import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  imports: [RouterLink],
  template: `
    <div style="min-height: 100vh; background-color: #f9fafb; padding: 5rem 0;">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1
            style="font-size: 2.25rem; font-weight: 700; color: #111827; margin-bottom: 1rem;"
          >
            My Projects
          </h1>
          <p
            style="font-size: 1.25rem; color: #4b5563; max-width: 42rem; margin: 0 auto;"
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
              activeFilter() === 'all' ? '#2563eb' : 'white'
            "
            [style.color]="activeFilter() === 'all' ? 'white' : '#374151'"
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid #d1d5db; cursor: pointer;"
          >
            All Projects
          </button>
          <button
            (click)="setActiveFilter('frontend')"
            [style.background-color]="
              activeFilter() === 'frontend' ? '#2563eb' : 'white'
            "
            [style.color]="activeFilter() === 'frontend' ? 'white' : '#374151'"
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid #d1d5db; cursor: pointer;"
          >
            Frontend
          </button>
          <button
            (click)="setActiveFilter('backend')"
            [style.background-color]="
              activeFilter() === 'backend' ? '#2563eb' : 'white'
            "
            [style.color]="activeFilter() === 'backend' ? 'white' : '#374151'"
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid #d1d5db; cursor: pointer;"
          >
            Backend
          </button>
          <button
            (click)="setActiveFilter('fullstack')"
            [style.background-color]="
              activeFilter() === 'fullstack' ? '#2563eb' : 'white'
            "
            [style.color]="activeFilter() === 'fullstack' ? 'white' : '#374151'"
            style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; border: 1px solid #d1d5db; cursor: pointer;"
          >
            Full Stack
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 gap-8">
          @for (project of filteredProjects(); track project.id) {
          <div
            style="background: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden; transition: all 0.3s;"
          >
            <div
              style="background-color: #e5e7eb; height: 12rem; display: flex; align-items: center; justify-content: center;"
            >
              <span style="color: #6b7280;">{{ project.title }}</span>
            </div>
            <div style="padding: 1.5rem;">
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;"
              >
                {{ project.title }}
              </h3>
              <p style="color: #4b5563; margin-bottom: 1rem;">
                {{ project.description }}
              </p>

              <div
                style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
              >
                @for (tech of project.technologies; track tech) {
                <span
                  style="padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; font-size: 0.875rem; border-radius: 9999px;"
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
                  style="flex: 1; background-color: #111827; color: white; text-align: center; padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
                >
                  GitHub
                </a>
                } @if (project.liveUrl) {
                <a
                  [href]="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="flex: 1; background-color: #2563eb; color: white; text-align: center; padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
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
            style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;"
          >
            No projects found
          </h3>
          <p style="color: #4b5563;">
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
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'assets/images/project1.jpg',
      githubUrl: 'https://github.com/username/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'assets/images/project2.jpg',
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Angular and Tailwind CSS, featuring smooth animations.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'GSAP'],
      image: 'assets/images/project3.jpg',
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://portfolio-demo.com',
      category: 'frontend',
    },
    {
      id: 4,
      title: 'REST API Service',
      description:
        'A scalable REST API service with authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'JWT', 'Redis', 'Swagger'],
      image: 'assets/images/project4.jpg',
      githubUrl: 'https://github.com/username/api-service',
      category: 'backend',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with real-time data, charts, and location-based forecasts.',
      technologies: [
        'Angular',
        'Chart.js',
        'OpenWeather API',
        'Geolocation API',
      ],
      image: 'assets/images/project5.jpg',
      githubUrl: 'https://github.com/username/weather-dashboard',
      liveUrl: 'https://weather-demo.com',
      category: 'frontend',
    },
    {
      id: 6,
      title: 'Chat Application',
      description:
        'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
      image: 'assets/images/project6.jpg',
      githubUrl: 'https://github.com/username/chat-app',
      liveUrl: 'https://chat-demo.com',
      category: 'fullstack',
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
