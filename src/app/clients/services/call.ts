import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private readonly _API_URL = 'https://carservice-backend-test.flexinform.hu/api';

  constructor(private readonly http: HttpClient) { }

  getClients(page:number = 1, per_page:number = 15) {
    return this.http.get<any[]>(`${this._API_URL}/clients?page=${page}&per_page=${per_page}`);
  }
}
