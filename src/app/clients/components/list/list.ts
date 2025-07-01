import { Component, signal, WritableSignal } from '@angular/core';
import { CallService } from '../../services/call';
import { map } from 'rxjs';
import { Client } from '../../models/Client';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [
    RouterModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class ListComponent {
  clients:WritableSignal<Client[]>=signal([]);
constructor(private readonly callService: CallService) {
    this.callService
    .getClients()
    .pipe(
      map((res:any)=>{
        this.clients.set(res.data as Client[]);
        console.log('Clients:', this.clients());
        
        return res.data;
      })
    )
    .subscribe();

}
}
