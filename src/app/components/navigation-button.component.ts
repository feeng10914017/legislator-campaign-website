import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="navigation-button">
      更多活動
      <svg
        class="laptop:hidden block"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.65321 0.115967L14.5895 4.69797L6.65321 9.27997L6.65321 5.49159L0.304199 5.49159L0.304199 3.90434L6.65321 3.90434L6.65321 0.115967Z"
          fill="white"
        />
      </svg>
      <svg
        class="laptop:block hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="18"
        viewBox="0 0 27 18"
        fill="none"
      >
        <path
          d="M27 9L12 0.339746L12 17.6603L27 9ZM0 10.5L13.5 10.5V7.5L0 7.5L0 10.5Z"
          fill="white"
        />
      </svg>
    </button>
  `,
  styles: [
    `
      .navigation-button {
        @apply bg-primary laptop:h-[48px] laptop:w-[205px] laptop:gap-3 flex h-[26px] w-[108px] items-center justify-center gap-1.5 rounded-s-full text-white hover:bg-[#9DA859];
      }
    `,
  ],
})
export class NavigationButtonComponent {}
