import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketData } from './models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get<any>('assets/tickets.json')
      .toPromise()
      .then(res => <TicketData[]>res.data)
      .then(data => { return data; });
    }
}
