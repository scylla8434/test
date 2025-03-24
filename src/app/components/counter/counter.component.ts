import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../services/counter.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  currentCount: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.counter$.subscribe(count => {
      this.currentCount = count;
    });
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }
}
