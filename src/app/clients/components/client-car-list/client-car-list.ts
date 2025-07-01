import { Component, signal, WritableSignal } from '@angular/core';
import { Car } from '../../../cars/models/Car';
import { CallService } from '../../services/call';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Client } from '../../models/Client';

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
  client: WritableSignal<Client|null> = signal(null);
  
  constructor(
    private readonly callService: CallService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const clientId = params.get('id');
      if (!clientId) {
        console.error('Client ID not found in route parameters');
        return;
      }
      this.client.set(this.callService.client());
      this.callService
        .getClientCars(parseInt(clientId))
        .pipe(
          map((res: any) => {
            this.clientCars.set(res as Car[]);
          })
        )
        .subscribe();
    });
  }
  showServiceList(car: Car) {
    this.callService.clientCar.set(car);
    //:id/cars/:carId/services
    const clientId = this.callService.client()?.id;
    const carId = car.id;
    if (!carId) {
      console.error('Car ID not found');
      return;
    }
    if (!clientId) {
      console.error('Client ID not found');
      return;
    }
    // console.log('Navigating to services for car:', carId, 'of client:', clientId);
    this.router.navigate([ 'clients',clientId, 'cars', carId, 'services'], )
  }
}
