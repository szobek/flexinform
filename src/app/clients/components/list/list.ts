import { Component, signal, WritableSignal } from '@angular/core';
import { CallService } from '../../services/call';
import { map } from 'rxjs';
import { Client } from '../../models/Client';
import { Router, RouterModule } from '@angular/router';
import { ClientSearch } from '../client-search/client-search';
import { Paginator } from '../paginator/paginator';

@Component({
  selector: 'app-list',
  imports: [RouterModule, ClientSearch, Paginator],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class ListComponent {
  responseData: any = null;
  clients: WritableSignal<Client[]> = signal([]);
  constructor(
    private readonly callService: CallService,
    private readonly router: Router
  ) {
    this.getClientsFromDB()
  }
  showClientWithCars(client: Client) {
    this.callService.client.set(client);
    this.router.navigate(['/clients', client.id]);
  }

  getClientsFromDB(page: number = 1) {
    this.callService
      .getClients(page)
      .pipe(
        map((res: any) => {
          this.clients.set(res.data as Client[]);
          this.responseData = res;
          return res.data;
        })
      )
      .subscribe();
  }
}
