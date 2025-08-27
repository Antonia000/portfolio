import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      style="background: white; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); border-bottom: 1px solid #e5e7eb;"
    >
      <nav class="container">
        <div
          style="display: flex; justify-content: space-between; height: 4rem; align-items: center;"
        >
          <div style="display: flex; align-items: center;">
            <a
              routerLink="/"
              style="font-size: 1.25rem; font-weight: 700; color: #111827; text-decoration: none;"
            >
              Nicoleta Antonia
            </a>
          </div>
          <div style="display: flex; align-items: center; gap: 2rem;">
            <a
              routerLink="/"
              routerLinkActive="text-blue-600"
              style="color: #374151; text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              Home
            </a>
            <a
              routerLink="/projects"
              routerLinkActive="text-blue-600"
              style="color: #374151; text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              Projects
            </a>
            <a
              routerLink="/about"
              routerLinkActive="text-blue-600"
              style="color: #374151; text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              About
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="text-blue-600"
              style="color: #374151; text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      .nav-link:hover {
        color: #2563eb !important;
      }

      .nav-link.text-blue-600 {
        color: #2563eb !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly isMenuOpen = signal(false);
}
