import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold underline text-red-600">
      Hello {{ title }}!
    </h1>
  `,
  styles: [],
})
export class AppComponent {
  title = 'legislator-campaign-website';
}
