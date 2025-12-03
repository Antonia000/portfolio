import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div style="min-height: 100vh;">
      <!-- Hero Section -->
      <section
        style="background: linear-gradient(135deg, var(--light-blue-bg) 0%, var(--lighter-blue-bg) 100%); padding: 5rem 0;"
      >
        <div class="container text-center">
          <h1
            style="font-size: 3rem; font-weight: 700; color: var(--dark-text-color); margin-bottom: 1.5rem;"
          >
            Hi, I'm <span style="color: var(--primary-blue);">Antonia</span>
          </h1>
          <p
            style="font-size: 1.25rem; color: var(--light-text-color); margin-bottom: 2rem; max-width: 48rem; margin-left: auto; margin-right: auto;"
          >
            A passionate software engineer who loves creating innovative web
            solutions and turning ideas into reality through clean, efficient
            code.
          </p>
          <div
            style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center;"
          >
            <a routerLink="/projects" class="btn btn-primary"> View My Work </a>
            <a routerLink="/contact" class="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section style="padding: 5rem 0; background: var(--white);">
        <div class="container">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: var(--dark-text-color); margin-bottom: 3rem;"
          >
            Skills & Technologies
          </h2>
          <div
            style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;"
          >
            <div style="text-align: center;">
              <div
                style="background-color: var(--skill-bg-frontend); width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: var(--primary-blue);"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: var(--dark-text-color);">
                Frontend
              </h3>
              <p style="color: var(--light-text-color); font-size: 0.875rem;">
                Angular, React, Vanilla Javascript
              </p>
            </div>
            <div style="text-align: center;">
              <div
                style="background-color: var(--skill-bg-backend); width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: var(--skill-color-backend);"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: var(--dark-text-color);">
                Backend
              </h3>
              <p style="color: var(--light-text-color); font-size: 0.875rem;">
                Nest.js, Node.js, Express
              </p>
            </div>
            <div style="text-align: center;">
              <div
                style="background-color: var(--skill-bg-database); width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: var(--skill-color-database);"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: var(--dark-text-color);">
                Database
              </h3>
              <p style="color: var(--light-text-color); font-size: 0.875rem;">
                PostgreSQL, MySQL
              </p>
            </div>
            <div style="text-align: center;">
              <div
                style="background-color: var(--skill-bg-devops); width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: var(--skill-color-devops);"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: var(--dark-text-color);">
                DevOps
              </h3>
              <p style="color: var(--light-text-color); font-size: 0.875rem;">
                Docker, Azure, CI/CD
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Preview -->
      <section style="padding: 5rem 0; background-color: var(--bg-gray-50);">
        <div class="container">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: var(--dark-text-color); margin-bottom: 3rem;"
          >
            Featured Projects
          </h2>
          <div class="grid grid-cols-1 gap-8">
            @for (featuredProject of featuredProjects(); track
            featuredProject.id) {
            <div
              style="background: var(--white); border-radius: 0.5rem; box-shadow: 0 4px 6px -1px var(--shadow-gray); overflow: hidden;"
            >
              <div
                style="
                  height: 12rem; 
                  background-image: url('/{{ featuredProject.image }}');
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <!-- Cool overlay -->
                <div
                  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, 
                      var(--project-overlay-blue-start) 0%, 
                      var(--project-overlay-blue-mid) 50%, 
                      var(--project-overlay-white-end) 100%);
                    backdrop-filter: blur(1px);
                  "
                ></div>

                <!-- Content overlay -->
                <div
                  style="
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    color: var(--white);
                  "
                >
                  <h4
                    style="
                      font-size: 1.5rem;
                      font-weight: 700;
                      margin-bottom: 0.5rem;
                      text-shadow: 0 2px 4px var(--project-text-shadow);
                    "
                  >
                    {{ featuredProject.title }}
                  </h4>
                  <p
                    style="
                      font-size: 0.875rem;
                      opacity: 0.9;
                      text-shadow: 0 1px 2px var(--project-text-shadow);
                    "
                  >
                    {{ featuredProject.description }}
                  </p>
                </div>
              </div>
              <div style="padding: 1.5rem;">
                <h3
                  style="font-size: 1.25rem; font-weight: 600; color: var(--dark-text-color); margin-bottom: 0.5rem;"
                >
                  {{ featuredProject.title }}
                </h3>
                <p style="color: var(--light-text-color); margin-bottom: 1rem;">
                  {{ featuredProject.description }}
                </p>
                <div
                  style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
                >
                  @for (tech of featuredProject.technologies; track tech) {
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: var(--project-tag-angular-bg); color: var(--project-tag-angular-color); font-size: 0.875rem; border-radius: 9999px;"
                    >{{ tech }}</span
                  >
                  }
                </div>
                <a
                  routerLink="/projects"
                  style="color: var(--primary-blue); font-weight: 600; text-decoration: none;"
                >
                  View Project →
                </a>
              </div>
            </div>
            }
          </div>
          <div style="text-align: center; margin-top: 3rem;">
            <a routerLink="/projects" class="btn btn-primary">
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class Home {
  protected readonly featuredProjects = signal([
    {
      id: 1,
      title: 'Weather Alerts',
      description:
        'A lightweight, real-time alert system using live meteorological APIs to deliver location-based severe weather alerts, weather forecasts, and customizable thresholds for critical conditions.',
      technologies: ['Angular', 'Nest.js', 'Firebase Firestore'],
      image: 'weather-alerts.png',
    },
  ]);
}
