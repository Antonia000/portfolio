import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <div>
      <app-header />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Nicoleta Antonia - Portfolio');
}
