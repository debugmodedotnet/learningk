import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogService } from './log.service';
import { ProductComponent } from './product/product.component';
import { ProducerComponent } from './producer/producer.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {InvoiceEditComponent} from './invoice-edit/invoice-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    ProductComponent,
    InvoiceComponent,
    ProducerComponent,
    InvoiceEditComponent,
    ConsumerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Event App';
  constructor() { 
  }
  
}
