import { Component, signal, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage],
  template: `
    <div
      style="min-height: 100vh; background-color: var(--bg-gray-50); padding: 5rem 0;"
    >
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1
            style="font-size: 2.25rem; font-weight: 700; color: var(--dark-text-color); margin-bottom: 1rem;"
          >
            My Projects
          </h1>
          <p
            style="font-size: 1.25rem; color: var(--light-text-color); max-width: 42rem; margin: 0 auto;"
          >
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and an opportunity to learn and grow as a
            developer.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div
          style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-bottom: 3rem;"
        >
          <button
            (click)="setActiveFilter('all')"
            [style.background-color]="
              activeFilter() === 'all' ? 'var(--primary-blue)' : 'var(--white)'
            "
            [style.color]="
              activeFilter() === 'all' ? 'var(--white)' : 'var(--text-gray)'
            "
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid var(--border-gray); cursor: pointer;"
          >
            All Projects
          </button>
          <button
            (click)="setActiveFilter('frontend')"
            [style.background-color]="
              activeFilter() === 'frontend'
                ? 'var(--primary-blue)'
                : 'var(--white)'
            "
            [style.color]="
              activeFilter() === 'frontend'
                ? 'var(--white)'
                : 'var(--text-gray)'
            "
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid var(--border-gray); cursor: pointer;"
          >
            Frontend
          </button>
          <button
            (click)="setActiveFilter('backend')"
            [style.background-color]="
              activeFilter() === 'backend'
                ? 'var(--primary-blue)'
                : 'var(--white)'
            "
            [style.color]="
              activeFilter() === 'backend' ? 'var(--white)' : 'var(--text-gray)'
            "
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid var(--border-gray); cursor: pointer;"
          >
            Backend
          </button>
          <button
            (click)="setActiveFilter('fullstack')"
            [style.background-color]="
              activeFilter() === 'fullstack'
                ? 'var(--primary-blue)'
                : 'var(--white)'
            "
            [style.color]="
              activeFilter() === 'fullstack'
                ? 'var(--white)'
                : 'var(--text-gray)'
            "
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid var(--border-gray); cursor: pointer;"
          >
            Full Stack
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 gap-8">
          @for (project of filteredProjects(); track project.id) {
          <div
            style="background: var(--white); border-radius: 0.5rem; box-shadow: 0 4px 6px -1px var(--shadow-gray); overflow: hidden; transition: all 0.3s;"
          >
            <div
              style="
                height: 12rem;
                background-image: url('/{{ project.image }}');
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
                  {{ project.title }}
                </h4>
                <p
                  style="
                    font-size: 0.875rem;
                    opacity: 0.9;
                    text-shadow: 0 1px 2px var(--project-text-shadow);
                  "
                >
                  {{ project.description }}
                </p>
              </div>
            </div>
            <div style="padding: 1.5rem;">
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: var(--dark-text-color); margin-bottom: 0.5rem;"
              >
                {{ project.title }}
              </h3>
              <p style="color: var(--light-text-color); margin-bottom: 1rem;">
                {{ project.description }}
              </p>

              <div
                style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
              >
                @for (tech of project.technologies; track tech) {
                <span
                  style="padding: 0.25rem 0.75rem; background-color: var(--project-tag-angular-bg); color: var(--project-tag-angular-color); font-size: 0.875rem; border-radius: 9999px;"
                  >{{ tech }}</span
                >
                }
              </div>

              <div style="display: flex; gap: 0.75rem;">
                @if (project.githubUrl) {
                <a
                  [href]="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="flex: 1; background-color: var(--dark-text-color); color: var(--white); text-align: center; padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
                >
                  GitHub
                </a>
                } @if (project.liveUrl) {
                <a
                  [href]="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="flex: 1; background-color: var(--primary-blue); color: var(--white); text-align: center; padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
                >
                  Live Demo
                </a>
                }
              </div>
            </div>
          </div>
          }
        </div>

        <!-- Empty State -->
        @if (filteredProjects().length === 0) {
        <div class="text-center" style="padding: 3rem 0;">
          <div style="font-size: 3.75rem; margin-bottom: 1rem;">🔍</div>
          <h3
            style="font-size: 1.25rem; font-weight: 600; color: var(--dark-text-color); margin-bottom: 0.5rem;"
          >
            No projects found
          </h3>
          <p style="color: var(--light-text-color);">
            Try adjusting your filter criteria or check back later for new
            projects.
          </p>
        </div>
        }
      </div>
    </div>
  `,
})
export class Projects {
  protected readonly activeFilter = signal<
    'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile'
  >('all');

  protected readonly projects = signal<Project[]>([
    {
      id: 5,
      title: 'Weather Dashboard',
      description:
        'A simple weather dashboard with real-time data, charts, and location-based forecasts.',
      technologies: [
        'Angular',
        'Chart.js',
        'OpenWeather API',
        'Geolocation API',
      ],
      image: 'weather-alerts.png',
      githubUrl: 'https://github.com/Antonia000',
      liveUrl: 'https://avertizari-meteo.ro',
      category: 'frontend',
    },
  ]);

  protected readonly filteredProjects = computed(() => {
    if (this.activeFilter() === 'all') {
      return this.projects();
    }
    return this.projects().filter(
      (project) => project.category === this.activeFilter()
    );
  });

  protected setActiveFilter(
    filter: 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile'
  ): void {
    this.activeFilter.set(filter);
  }
}
