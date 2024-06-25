import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataproviderService {

  private counter = {
    count: 0,
  };

  public counter$ : BehaviorSubject<number>;
  constructor() {
    this.counter$ =  new BehaviorSubject<number>(this.counter.count);
  }

  setCount(counter: number | undefined) {
    if (counter) {
      this.counter.count = counter;
      this.counter$.next(this.counter.count);
      //console.log('Counter set to: ', this.counter.count);
    }
  }

}
