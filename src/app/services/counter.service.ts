import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // BehaviorSubject to hold the current counter value
  private counterSubject = new BehaviorSubject<number>(0);
  
  // Observable to expose the counter value
  counter$ = this.counterSubject.asObservable();

  // Method to increment the counter value
  increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  // Method to decrement the counter value
  decrement() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  // Method to reset the counter value to 0
  reset() {
    this.counterSubject.next(0);
  }
}
