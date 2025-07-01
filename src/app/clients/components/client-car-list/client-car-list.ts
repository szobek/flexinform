import { Component, signal, WritableSignal } from '@angular/core';
import { Car } from '../../../cars/models/Car';
import { CallService } from '../../services/call';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-car-list',
  imports: [
    DatePipe 
  ],
  templateUrl: './client-car-list.html',
  styleUrl: './client-car-list.scss',
})
export class ClientCarList {
  clientCars: WritableSignal<Car[]> = signal([]);
  
  constructor(
    private readonly callService: CallService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const clientId = params.get('id');
      if (!clientId) {
        console.error('Client ID not found in route parameters');
        return;
      }
      this.callService
        .getClientCars(parseInt(clientId))
        .pipe(
          map((res: any) => {
            this.clientCars.set(res as Car[]);
            console.log('Client Cars:', this.clientCars());
            
          })
        )
        .subscribe();
    });
  }
}
