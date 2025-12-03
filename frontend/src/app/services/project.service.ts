import { Injectable, signal } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  featured: boolean;
  dateCreated: string;
  readme?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects = signal<Project[]>([
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
      featured: true,
      dateCreated: '2024-01-15',
      readme:
        'A comprehensive e-commerce platform built with modern web technologies...',
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
      featured: true,
      dateCreated: '2023-11-20',
      readme: 'Real-time collaborative task management application...',
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
      featured: true,
      dateCreated: '2024-02-01',
      readme: 'Personal portfolio website showcasing projects and skills...',
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
      featured: false,
      dateCreated: '2023-09-10',
      readme:
        'Production-ready REST API service with comprehensive features...',
    },
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
      image: 'assets/images/project5.jpg',
      githubUrl: 'https://github.com/username/weather-dashboard',
      liveUrl: 'https://weather-demo.com',
      category: 'frontend',
      featured: false,
      dateCreated: '2023-12-05',
      readme:
        'Interactive weather dashboard with real-time data visualization...',
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
      featured: false,
      dateCreated: '2023-10-15',
      readme: 'Real-time chat application with advanced features...',
    },
  ]);

  getProjects(): Project[] {
    return this.projects();
  }

  getFeaturedProjects(): Project[] {
    return this.projects().filter((project) => project.featured);
  }

  getProjectsByCategory(category: Project['category']): Project[] {
    return this.projects().filter((project) => project.category === category);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects().find((project) => project.id === id);
  }

  searchProjects(query: string): Project[] {
    const lowercaseQuery = query.toLowerCase();
    return this.projects().filter(
      (project) =>
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(lowercaseQuery)
        )
    );
  }

  addProject(project: Omit<Project, 'id'>): void {
    const newProject: Project = {
      ...project,
      id: Math.max(...this.projects().map((p) => p.id)) + 1,
    };
    this.projects.update((projects) => [...projects, newProject]);
  }

  updateProject(id: number, updates: Partial<Project>): void {
    this.projects.update((projects) =>
      projects.map((project) =>
        project.id === id ? { ...project, ...updates } : project
      )
    );
  }

  deleteProject(id: number): void {
    this.projects.update((projects) =>
      projects.filter((project) => project.id !== id)
    );
  }
}
