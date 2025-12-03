import { Component, input, output } from '@angular/core';
import { Project } from '../../../services/project.service';

@Component({
  selector: 'app-project-card',
  template: `
    <div
      style="background: var(--white); border-radius: 0.5rem; box-shadow: 0 4px 6px -1px var(--shadow-gray); overflow: hidden; transition: all 0.3s;"
    >
      <div
        style="background-color: var(--project-image-placeholder-bg); height: 12rem; display: flex; align-items: center; justify-content: center;"
      >
        @if (project().image) {
        <img
          [src]="project().image"
          [alt]="project().title"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
        } @else {
        <span style="color: var(--project-image-placeholder-text);">{{
          project().title
        }}</span>
        }
      </div>

      <div style="padding: 1.5rem;">
        <h3
          style="font-size: 1.25rem; font-weight: 600; color: var(--dark-text-color); margin-bottom: 0.5rem;"
        >
          {{ project().title }}
        </h3>
        <p style="color: var(--light-text-color); margin-bottom: 1rem;">
          {{ project().description }}
        </p>

        <div
          style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;"
        >
          @for (tech of project().technologies; track tech) {
          <span
            style="padding: 0.25rem 0.75rem; background-color: var(--project-tag-angular-bg); color: var(--project-tag-angular-color); font-size: 0.875rem; border-radius: 9999px;"
            >{{ tech }}</span
          >
          }
        </div>

        <div style="display: flex; gap: 0.75rem;">
          @if (project().githubUrl) {
          <a
            [href]="project().githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            style="flex: 1; background-color: var(--dark-text-color); color: var(--white); text-align: center; padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
          >
            GitHub
          </a>
          } @if (project().liveUrl) { }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      div:hover {
        box-shadow: 0 10px 15px -3px var(--shadow-gray),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transform: translateY(-0.25rem);
      }

      a:hover {
        opacity: 0.9;
      }
    `,
  ],
})
export class ProjectCard {
  project = input.required<Project>();
  projectClicked = output<Project>();

  onProjectClick(): void {
    this.projectClicked.emit(this.project());
  }
}
