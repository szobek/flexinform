import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { Car } from '../../cars/models/Car';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private readonly _API_URL = 'https://carservice-backend-test.flexinform.hu/api';
  client:WritableSignal<Client|null> = signal(null);
  clientCar:WritableSignal<Car|null> = signal(null);

  constructor(private readonly http: HttpClient) { }

  getClients(page:number = 1, per_page:number = 15):Observable<any[]> {
    return this.http.get<any[]>(`${this._API_URL}/clients?page=${page}&per_page=${per_page}`);
  }
  getClientCars(id: number):Observable<any[]> {
    return this.http.get<any>(`${this._API_URL}/clients/${id}/cars`);
  }

  getCarServiceList(clientId:number, carId:number):Observable<any[]> {
    return this.http.get<any[]>(`${this._API_URL}/clients/${clientId}/cars/${carId}/services`);
  }
  searchClient(body: any):Observable<any[]> {
    return this.http.post<any[]>(`${this._API_URL}/clients/search`,body);
  }
}
