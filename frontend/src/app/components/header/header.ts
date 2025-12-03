import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  template: `
    <header
      style="background: var(--white); box-shadow: 0 1px 3px 0 var(--shadow-gray); border-bottom: 1px solid var(--border-gray);"
    >
      <nav class="container">
        <div
          style="display: flex; justify-content: space-between; height: 4rem; align-items: center;"
        >
          <div style="display: flex; align-items: center;">
            <a routerLink="/">
              <img
                ngSrc="/LOGO.png"
                alt="Logo"
                width="50"
                height="50"
                priority
                style="height: auto;"
              />
            </a>
          </div>
          <div style="display: flex; align-items: center; gap: 2rem;">
            <a
              routerLink="/"
              routerLinkActive="text-blue-600"
              style="color: var(--text-gray); text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              Home
            </a>
            <a
              routerLink="/projects"
              routerLinkActive="text-blue-600"
              style="color: var(--text-gray); text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              Projects
            </a>
            <a
              routerLink="/about"
              routerLinkActive="text-blue-600"
              style="color: var(--text-gray); text-decoration: none; transition: color 0.2s;"
              class="nav-link"
            >
              About
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="text-blue-600"
              style="color: var(--text-gray); text-decoration: none; transition: color 0.2s;"
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
        color: var(--primary-blue) !important;
      }

      .nav-link.text-blue-600 {
        color: var(--primary-blue) !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly isMenuOpen = signal(false);
}
