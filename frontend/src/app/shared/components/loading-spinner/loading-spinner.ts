import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div
      style="display: flex; align-items: center; justify-content: center;"
      [style.padding]="
        size() === 'small' ? '0.5rem' : size() === 'large' ? '2rem' : '1rem'
      "
    >
      <div
        style="animation: spin 1s linear infinite; border-radius: 9999px; border: 2px solid #d1d5db; border-top-color: #2563eb;"
        [style.width]="
          size() === 'small' ? '1rem' : size() === 'large' ? '3rem' : '2rem'
        "
        [style.height]="
          size() === 'small' ? '1rem' : size() === 'large' ? '3rem' : '2rem'
        "
      ></div>
      @if (showText()) {
      <span style="margin-left: 0.75rem; color: #4b5563;">{{ text() }}</span>
      }
    </div>
  `,
  styles: [
    `
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingSpinner {
  size = input<'small' | 'medium' | 'large'>('medium');
  text = input<string>('Loading...');
  showText = input<boolean>(true);
}
