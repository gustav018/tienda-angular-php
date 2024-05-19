import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before and during render
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));

    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit(): void {
    // after render
    // una vez
    // async, them, subscribe
    console.log('ngOnInit');
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
    console.log('-'.repeat(10));

    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));

    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
  }
}
