import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button class="submit-button">送出意見</button> `,
  styles: [
    `
      .submit-button {
        @apply bg-info text-h4-m laptop:text-h4 laptop:h-[70px] laptop:w-[491px] h-[50px] w-[335px] text-white hover:bg-[#274043];
      }
    `,
  ],
})
export class SubmitButtonComponent {}
