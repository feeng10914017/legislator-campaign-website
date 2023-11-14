import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from 'src/app/components/submit-button.component';
import { NavigationButtonComponent } from 'src/app/components/navigation-button.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, SubmitButtonComponent, NavigationButtonComponent],
  template: `
    <div class="flex p-2">
      <div class="bg-primary mr-2 h-20 w-20"></div>
      <div class="bg-secondary mr-2 h-20 w-20"></div>
      <div class="bg-info mr-2 h-20 w-20"></div>
      <div class="bg-high-light-primary mr-2 h-20 w-20"></div>
      <div class="bg-high-light-brown mr-2 h-20 w-20"></div>
      <div class="bg-high-light-yellow mr-2 h-20 w-20"></div>
    </div>
    <h1>The quick brown fox jumps over the lazy dog.</h1>
    <h2>The quick brown fox jumps over the lazy dog.</h2>
    <h3>The quick brown fox jumps over the lazy dog.</h3>
    <h4>The quick brown fox jumps over the lazy dog.</h4>
    <h5>The quick brown fox jumps over the lazy dog.</h5>
    <h6>The quick brown fox jumps over the lazy dog.</h6>
    <strong>The quick brown fox jumps over the lazy dog.</strong>
    <p>The quick brown fox jumps over the lazy dog.</p>
    <app-submit-button></app-submit-button>
    <app-navigation-button></app-navigation-button>
  `,
  styles: [],
})
export default class DemoComponent {}
