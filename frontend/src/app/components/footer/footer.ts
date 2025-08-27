import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer style="background-color: #111827; color: white; padding: 3rem 0;">
      <div class="container">
        <div class="grid grid-cols-1 gap-8">
          <div>
            <h3
              style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;"
            >
              Nicoleta Antonia
            </h3>
            <p style="color: #d1d5db;">
              Full-stack developer passionate about creating innovative web
              solutions.
            </p>
          </div>
          <div>
            <h3
              style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;"
            >
              Quick Links
            </h3>
            <ul style="margin: 0; padding: 0; list-style: none;">
              <li style="margin-bottom: 0.5rem;">
                <a
                  href="/"
                  style="color: #d1d5db; text-decoration: none; transition: color 0.2s;"
                  >Home</a
                >
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a
                  href="/projects"
                  style="color: #d1d5db; text-decoration: none; transition: color 0.2s;"
                  >Projects</a
                >
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a
                  href="/about"
                  style="color: #d1d5db; text-decoration: none; transition: color 0.2s;"
                  >About</a
                >
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a
                  href="/contact"
                  style="color: #d1d5db; text-decoration: none; transition: color 0.2s;"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3
              style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;"
            >
              Connect
            </h3>
            <div style="display: flex; gap: 1rem;">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style="color: #d1d5db; transition: color 0.2s;"
              >
                <span
                  style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;"
                  >GitHub</span
                >
                <svg
                  style="width: 1.5rem; height: 1.5rem;"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style="color: #d1d5db; transition: color 0.2s;"
              >
                <span
                  style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;"
                  >LinkedIn</span
                >
                <svg
                  style="width: 1.5rem; height: 1.5rem;"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          style="border-top: 1px solid #374151; margin-top: 2rem; padding-top: 2rem; text-align: center; color: #d1d5db;"
        >
          <p>&copy; 2024 Nicoleta Antonia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      a:hover {
        color: white !important;
      }
    `,
  ],
})
export class Footer {}
