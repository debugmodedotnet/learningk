import { Component, OnInit, inject } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../ievent';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit{

  events?: IEvent[]; 
  private eventService = inject(EventService); 
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
