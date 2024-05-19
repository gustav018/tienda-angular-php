import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { WaveAudioComponent } from '@/info/components/wave-audio/wave-audio.component';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    HeaderComponent,
    HighlightDirective,
    WaveAudioComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(100);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
