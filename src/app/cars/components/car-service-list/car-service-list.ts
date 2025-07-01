import { Component, signal, WritableSignal } from '@angular/core';
import { CallService } from '../../../clients/services/call';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Service } from '../../models/Service';
import { Client } from '../../../clients/models/Client';
import { Car } from '../../models/Car';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-car-service-list',
  imports: [DatePipe, RouterModule],
  templateUrl: './car-service-list.html',
  styleUrl: './car-service-list.scss',
})
export class CarServiceList {
  serviceList: WritableSignal<Service[] | null> = signal(null);
  client: WritableSignal<Client | null> = signal(null);
  car: WritableSignal<Car | null> = signal(null);

  constructor(
    private readonly callService: CallService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const car = this.callService.clientCar();
    const carId = car?.id || this.route.snapshot.paramMap.get('carId');
    const client = this.callService.client();
    this.client.set(client);
    this.car.set(car);
    const clientId = this.client()?.id;
    if (!carId || !clientId) {
      console.error('Car ID or client id not found');
      return;
    }
    this.callService
      .getCarServiceList(clientId, parseInt(carId as string))
      .pipe(
        map((res: any) => {
          this.serviceList.set(res);
          return res;
        }),
        catchError((error: any) => {
          if (error.status === 500) {
            alert('Server error.');
          }
          if (error.status === 404) {
            alert('No services found for this car.');
            this.router.navigate(['/clients']);
          }
          return [];
        })
      )
      .subscribe();
  }
}
