import { Component } from '@angular/core';
import { TicketData, User } from 'src/app/domain/ticket/models/ticket';
import { TicketService } from 'src/app/domain/ticket/ticket.repository';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {
  ticketData!: TicketData[];
  users!: User[];
  cols!: any[];
  totalRecords!: number;
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().
      then(ticketData => this.ticketData = ticketData);

    this.cols = [
      { field: 'name', header: 'المستخدم' },
      { field: 'numberTicket', header: 'رقم التذكرة' },
      { field: 'priceTicket', header: 'قيمى التذكره' },
      { field: 'cinemas', header: 'السينمات' },
      { field: 'personNumber', header: 'عدد الاشخاص' },
      { field: 'payNumber', header: 'عدد مرات الشراء' },
      { field: 'ticket', header: ' التذكره' },

    ];

    this.totalRecords = this.cols.length;
    this.users = [
      { name: 'احمد محمود', image: 'assets/Image-30.png', phone: '0123456789' },
      { name: 'محمد الغريب', image: 'assets/Image-user2.png', phone: '0123456789' },
      { name: 'احمد محمود', image: 'assets/Image-30.png', phone: '0123456789' },
      { name: 'محمد الغريب', image: 'assets/Image-user2.png', phone: '0123456789' },
    ];
  }
}
