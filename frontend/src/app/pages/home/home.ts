import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div style="min-height: 100vh;">
      <!-- Hero Section -->
      <section
        style="background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%); padding: 5rem 0;"
      >
        <div class="container text-center">
          <h1
            style="font-size: 3rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem;"
          >
            Hi, I'm <span style="color: #2563eb;">Nicoleta Antonia</span>
          </h1>
          <p
            style="font-size: 1.25rem; color: #4b5563; margin-bottom: 2rem; max-width: 48rem; margin-left: auto; margin-right: auto;"
          >
            A passionate full-stack developer who loves creating innovative web
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
      <section style="padding: 5rem 0; background: white;">
        <div class="container">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: #111827; margin-bottom: 3rem;"
          >
            Skills & Technologies
          </h2>
          <div class="grid grid-cols-1 gap-8">
            <div style="text-align: center;">
              <div
                style="background-color: #dbeafe; width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: #2563eb;"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: #111827;">Frontend</h3>
              <p style="color: #4b5563; font-size: 0.875rem;">
                Angular, React, Vue.js
              </p>
            </div>
            <div style="text-align: center;">
              <div
                style="background-color: #dcfce7; width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: #16a34a;"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: #111827;">Backend</h3>
              <p style="color: #4b5563; font-size: 0.875rem;">
                Node.js, Python, Java
              </p>
            </div>
            <div style="text-align: center;">
              <div
                style="background-color: #f3e8ff; width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: #9333ea;"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: #111827;">Database</h3>
              <p style="color: #4b5563; font-size: 0.875rem;">
                MongoDB, PostgreSQL
              </p>
            </div>
            <div style="text-align: center;">
              <div
                style="background-color: #fed7aa; width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;"
              >
                <svg
                  style="width: 2rem; height: 2rem; color: #ea580c;"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 style="font-weight: 600; color: #111827;">DevOps</h3>
              <p style="color: #4b5563; font-size: 0.875rem;">
                Docker, AWS, CI/CD
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Preview -->
      <section style="padding: 5rem 0; background-color: #f9fafb;">
        <div class="container">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: #111827; margin-bottom: 3rem;"
          >
            Featured Projects
          </h2>
          <div class="grid grid-cols-1 gap-8">
            <div
              style="background: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden;"
            >
              <div
                style="background-color: #e5e7eb; height: 12rem; display: flex; align-items: center; justify-content: center;"
              >
                <span style="color: #6b7280;">Project Image</span>
              </div>
              <div style="padding: 1.5rem;">
                <h3
                  style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;"
                >
                  E-Commerce Platform
                </h3>
                <p style="color: #4b5563; margin-bottom: 1rem;">
                  A full-stack e-commerce solution built with Angular and
                  Node.js
                </p>
                <div
                  style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
                >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; font-size: 0.875rem; border-radius: 9999px;"
                    >Angular</span
                  >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #dcfce7; color: #166534; font-size: 0.875rem; border-radius: 9999px;"
                    >Node.js</span
                  >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #f3e8ff; color: #7c3aed; font-size: 0.875rem; border-radius: 9999px;"
                    >MongoDB</span
                  >
                </div>
                <a
                  routerLink="/projects"
                  style="color: #2563eb; font-weight: 600; text-decoration: none;"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              style="background: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden;"
            >
              <div
                style="background-color: #e5e7eb; height: 12rem; display: flex; align-items: center; justify-content: center;"
              >
                <span style="color: #6b7280;">Project Image</span>
              </div>
              <div style="padding: 1.5rem;">
                <h3
                  style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;"
                >
                  Task Management App
                </h3>
                <p style="color: #4b5563; margin-bottom: 1rem;">
                  A collaborative task management application with real-time
                  updates
                </p>
                <div
                  style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
                >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; font-size: 0.875rem; border-radius: 9999px;"
                    >React</span
                  >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #dcfce7; color: #166534; font-size: 0.875rem; border-radius: 9999px;"
                    >Express</span
                  >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #f3e8ff; color: #7c3aed; font-size: 0.875rem; border-radius: 9999px;"
                    >Socket.io</span
                  >
                </div>
                <a
                  routerLink="/projects"
                  style="color: #2563eb; font-weight: 600; text-decoration: none;"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              style="background: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden;"
            >
              <div
                style="background-color: #e5e7eb; height: 12rem; display: flex; align-items: center; justify-content: center;"
              >
                <span style="color: #6b7280;">Project Image</span>
              </div>
              <div style="padding: 1.5rem;">
                <h3
                  style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;"
                >
                  Portfolio Website
                </h3>
                <p style="color: #4b5563; margin-bottom: 1rem;">
                  A modern, responsive portfolio built with Angular and Tailwind
                  CSS
                </p>
                <div
                  style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
                >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; font-size: 0.875rem; border-radius: 9999px;"
                    >Angular</span
                  >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #dcfce7; color: #166534; font-size: 0.875rem; border-radius: 9999px;"
                    >Tailwind CSS</span
                  >
                  <span
                    style="padding: 0.25rem 0.75rem; background-color: #f3e8ff; color: #7c3aed; font-size: 0.875rem; border-radius: 9999px;"
                    >TypeScript</span
                  >
                </div>
                <a
                  routerLink="/projects"
                  style="color: #2563eb; font-weight: 600; text-decoration: none;"
                >
                  View Project →
                </a>
              </div>
            </div>
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
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution built with Angular and Node.js',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: 'assets/images/project1.jpg',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates',
      technologies: ['React', 'Express', 'Socket.io'],
      image: 'assets/images/project2.jpg',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio built with Angular and Tailwind CSS',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      image: 'assets/images/project3.jpg',
    },
  ]);
}
