import { Component, signal, WritableSignal } from '@angular/core';
import { CallService } from '../../services/call';
import { map } from 'rxjs';
import { Client } from '../../models/Client';
import { Router, RouterModule } from '@angular/router';
import { ClientSearch } from '../client-search/client-search';

@Component({
  selector: 'app-list',
  imports: [
    RouterModule, ClientSearch
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class ListComponent {
  clients:WritableSignal<Client[]>=signal([]);
constructor(
  private readonly callService: CallService,
  private readonly router: Router
) {
    this.callService
    .getClients()
    .pipe(
      map((res:any)=>{
        this.clients.set(res.data as Client[]);
        return res.data;
      })
    )
    .subscribe();

}
showClientWithCars(client:Client) {
  this.callService.client.set(client) 
  this.router.navigate(['/clients', client.id]);

}
}
