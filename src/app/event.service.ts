import { Injectable } from '@angular/core';
import { IEvent } from './ievent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private Events : IEvent[] = [
    {
      Id: '1',
      Title: 'Angular Connect',
      Description: 'The Angular Connect Conference',
      Tech: 'Angular',
      Date: '9/26/2021',
    },
    {
      Id: '2',
      Title: 'React Conf',
      Description: 'The React Conference',
      Tech: 'React',
      Date: '9/27/2021',
    },
    {
      Id: '3',
      Title: 'Vue Conf',
      Description: 'The Vue Conference',
      Tech: 'Vue',
      Date: '9/28/2021',
    },
    {
      Id: '4',
      Title: 'Ember  99999',
      Description: 'The Ember Conference',
      Tech: 'Ember',
      Date: '9/29/2021',
    },
  ];

  constructor() { }

  getEvents(): IEvent[] {
    return this.Events;
  }

  addEvent(event: IEvent) {
    this.Events.push(event);
  }
}
