# Nicoleta Antonia - Portfolio Website

A modern, responsive portfolio website built with Angular 17 and Tailwind CSS, showcasing professional projects, skills, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Project Showcase**: Dedicated projects page with filtering and search capabilities
- **Contact Form**: Interactive contact form with validation
- **Performance Optimized**: Built with Angular 17 best practices and OnPush change detection
- **SEO Friendly**: Optimized for search engines and accessibility

## 🛠️ Tech Stack

- **Frontend Framework**: Angular 17
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: Angular Signals
- **Forms**: Reactive Forms
- **Routing**: Angular Router with lazy loading
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header/         # Navigation header
│   │   └── footer/         # Site footer
│   ├── pages/              # Main page components
│   │   ├── home/           # Landing page
│   │   ├── projects/       # Projects showcase
│   │   ├── about/          # About me page
│   │   └── contact/        # Contact form
│   ├── services/           # Business logic services
│   │   ├── project.service.ts
│   │   └── contact.service.ts
│   ├── shared/             # Shared components and utilities
│   │   └── components/
│   │       ├── project-card/
│   │       └── loading-spinner/
│   └── app.ts              # Main app component
├── assets/                  # Static assets (images, icons)
└── styles.scss             # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Pages

### Home

- Hero section with introduction
- Skills and technologies overview
- Featured projects preview
- Call-to-action buttons

### Projects

- Grid layout of all projects
- Category filtering (Frontend, Backend, Full Stack)
- Search functionality
- Project details with technology tags

### About

- Personal information and background
- Work experience timeline
- Education details
- Technical skills with proficiency indicators

### Contact

- Contact form with validation
- Contact information
- Social media links
- Professional availability status

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/app/pages/home/home.ts` - Hero section and skills
- `src/app/pages/about/about.ts` - Personal details and experience
- `src/app/pages/contact/contact.ts` - Contact details
- `src/app/services/project.service.ts` - Project data

### Styling

- Modify `src/styles.scss` for global styles
- Update Tailwind classes in component templates
- Customize colors in `tailwind.config.js`

### Projects

Add or modify projects in `src/app/services/project.service.ts`:

```typescript
{
  id: 7,
  title: 'Your Project',
  description: 'Project description...',
  technologies: ['Angular', 'Node.js'],
  image: 'assets/images/your-project.jpg',
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://your-project.com',
  category: 'fullstack',
  featured: true,
  dateCreated: '2024-01-01'
}
```

## 🔧 Development

### Code Style

This project follows Angular best practices:

- Standalone components
- OnPush change detection strategy
- Signals for state management
- Reactive forms
- Lazy loading for routes

### Adding New Features

1. Create new components in appropriate directories
2. Update routing in `app.routes.ts`
3. Add services for business logic
4. Update the main app component if needed

## 📊 Performance

- Lazy-loaded routes for better initial load time
- OnPush change detection for optimal performance
- Optimized images and assets
- Efficient state management with signals

## 🌐 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Vercel

1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: hello@nicoletaantonia.com
- **GitHub**: [@username](https://github.com/username)
- **LinkedIn**: [Nicoleta Antonia](https://linkedin.com/in/nicoletaantonia)

---

Built with ❤️ using Angular and Tailwind CSS
