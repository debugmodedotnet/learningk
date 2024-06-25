import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogService } from './log.service';
import { ProductComponent } from './product/product.component';
import { ProducerComponent } from './producer/producer.component';
import { ConsumerComponent } from './consumer/consumer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    ProductComponent,
    ProducerComponent,
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
