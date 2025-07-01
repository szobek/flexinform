import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CallService } from '../../services/call';
import { catchError, map } from 'rxjs/operators';
import { Client } from '../../models/Client';
import { HttpErrorResponse } from '@angular/common/http';

interface SearchCriteria {
  name?: string;
  card_number?: string;
}
@Component({
  selector: 'app-client-search',
  imports: [FormsModule],
  templateUrl: './client-search.html',
  styleUrl: './client-search.scss',
})
export class ClientSearch {
  client:Client | null = null;
  name: string = '';
  card_number: string = '';
  callService = inject(CallService);
  clickOnSearchButton() {
    const body: SearchCriteria = {
      name: this.name.trim() || '',
      card_number: this.card_number.trim() || '',
    };
    if (this.name === '' && this.card_number === '') {
      alert('Please fill in at least one field: name or card number.');
      return;
    }
    if (this.name != '' && this.card_number != '') {
      alert('Please fill in only one field: either name or card number.');
      return;
    }
    if (this.card_number != '' && !this.isOnlyNumbers(this.card_number)) {
      alert('Card number must contain only numbers.');
      return;
    }

    this.callService
      .searchClient(body)
      .pipe(
        map((res: any) => {
          this.client = res as Client | null;
        }),
        catchError((error: HttpErrorResponse) => {
          switch (error.status) {
            case 400:
              alert('Bad Request: Please check the input data.');
              break;
            case 404:
              alert(error.error.error || 'Client not found.');
              break;
            case 422:
              alert(error.error.error || 'Validation error: Please check the input data.');
              break
            case 500:
              alert(error.error.error || 'Internal Server Error: Please try again later.');
              break;
            default:
              alert('An unexpected error occurred. Please try again later.');
              break;
          }
          return [];
        })
      )
      .subscribe();
  }

  isOnlyNumbers(value: string): boolean {
    return /^[0-9]+$/.test(value);
  }

  clearSearch() {
    this.name = '';
    this.card_number = '';
    this.client = null;
  }
}
