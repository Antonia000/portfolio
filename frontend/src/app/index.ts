// Components
export { Header } from './components/header/header';
export { Footer } from './components/footer/footer';

// Pages
export { Home } from './pages/home/home';
export { Projects } from './pages/projects/projects';
export { About } from './pages/about/about';
export { Contact } from './pages/contact/contact';

// Shared Components
export { ProjectCard } from './shared/components/project-card/project-card';
export { LoadingSpinner } from './shared/components/loading-spinner/loading-spinner';

// Services
export { ProjectService } from './services/project.service';
export { ContactService } from './services/contact.service';

// Types
export type { Project } from './services/project.service';
export type {
  ContactMessage,
  ContactFormData,
} from './services/contact.service';
