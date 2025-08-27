import { Component, signal } from '@angular/core';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-about',
  template: `
    <div style="min-height: 100vh; background-color: #f9fafb; padding: 5rem 0;">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1
            style="font-size: 2.25rem; font-weight: 700; color: #111827; margin-bottom: 1rem;"
          >
            About Me
          </h1>
          <p
            style="font-size: 1.25rem; color: #4b5563; max-width: 48rem; margin: 0 auto;"
          >
            I'm a passionate full-stack developer with a love for creating
            innovative web solutions and solving complex problems through clean,
            efficient code.
          </p>
        </div>

        <!-- Personal Info -->
        <div
          style="display: grid; grid-template-columns: 1fr; gap: 3rem; margin-bottom: 5rem;"
        >
          <div>
            <h2
              style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem;"
            >
              Who I Am
            </h2>
            <div style="margin-bottom: 1rem;">
              <p style="color: #4b5563; margin-bottom: 1rem;">
                Hello! I'm Nicoleta Antonia, a dedicated software developer with
                a passion for building web applications that make a difference.
                I believe in writing clean, maintainable code and creating user
                experiences that are both beautiful and functional.
              </p>
              <p style="color: #4b5563; margin-bottom: 1rem;">
                My journey in software development started with a curiosity
                about how websites work, which quickly evolved into a passion
                for creating them. I love learning new technologies and
                approaches, and I'm always excited to take on new challenges.
              </p>
              <p style="color: #4b5563; margin-bottom: 1rem;">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>

          <div
            style="background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
          >
            <h3
              style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem;"
            >
              Quick Facts
            </h3>
            <div style="margin-bottom: 0.75rem;">
              <div
                style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;"
              >
                <span style="color: #4b5563;">Location:</span>
                <span style="font-weight: 500;">Your City, Country</span>
              </div>
              <div
                style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;"
              >
                <span style="color: #4b5563;">Experience:</span>
                <span style="font-weight: 500;">3+ Years</span>
              </div>
              <div
                style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;"
              >
                <span style="color: #4b5563;">Languages:</span>
                <span style="font-weight: 500;">English, Romanian</span>
              </div>
              <div
                style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;"
              >
                <span style="color: #4b5563;">Interests:</span>
                <span style="font-weight: 500;">Web Dev, AI, Open Source</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div style="margin-bottom: 5rem;">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: #111827; margin-bottom: 3rem;"
          >
            Work Experience
          </h2>
          <div style="margin-bottom: 2rem;">
            @for (exp of experience(); track exp.id) {
            <div
              style="background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;"
            >
              <div
                style="display: flex; flex-direction: column; margin-bottom: 1rem;"
              >
                <div>
                  <h3
                    style="font-size: 1.25rem; font-weight: 600; color: #111827;"
                  >
                    {{ exp.position }}
                  </h3>
                  <p style="color: #2563eb; font-weight: 500;">
                    {{ exp.company }}
                  </p>
                </div>
                <span
                  style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;"
                  >{{ exp.duration }}</span
                >
              </div>
              <p style="color: #4b5563; margin-bottom: 1rem;">
                {{ exp.description }}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                @for (tech of exp.technologies; track tech) {
                <span
                  style="padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; font-size: 0.875rem; border-radius: 9999px;"
                  >{{ tech }}</span
                >
                }
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Education -->
        <div style="margin-bottom: 5rem;">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: #111827; margin-bottom: 3rem;"
          >
            Education
          </h2>
          <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
            @for (edu of education(); track edu.id) {
            <div
              style="background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
            >
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;"
              >
                {{ edu.degree }}
              </h3>
              <p
                style="color: #2563eb; font-weight: 500; margin-bottom: 0.5rem;"
              >
                {{ edu.institution }}
              </p>
              <p
                style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.75rem;"
              >
                {{ edu.year }}
              </p>
              <p style="color: #4b5563;">{{ edu.description }}</p>
            </div>
            }
          </div>
        </div>

        <!-- Skills -->
        <div style="margin-bottom: 5rem;">
          <h2
            style="font-size: 1.875rem; font-weight: 700; text-align: center; color: #111827; margin-bottom: 3rem;"
          >
            Technical Skills
          </h2>
          <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
            <div
              style="background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
            >
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem; text-align: center;"
              >
                Frontend
              </h3>
              <div style="margin-bottom: 0.75rem;">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Angular</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #2563eb; height: 0.5rem; border-radius: 9999px; width: 90%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">React</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #2563eb; height: 0.5rem; border-radius: 9999px; width: 85%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">TypeScript</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #2563eb; height: 0.5rem; border-radius: 9999px; width: 95%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">CSS/SCSS</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #2563eb; height: 0.5rem; border-radius: 9999px; width: 88%;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style="background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
            >
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem; text-align: center;"
              >
                Backend
              </h3>
              <div style="margin-bottom: 0.75rem;">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Node.js</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #16a34a; height: 0.5rem; border-radius: 9999px; width: 85%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Express</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #16a34a; height: 0.5rem; border-radius: 9999px; width: 80%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Python</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #16a34a; height: 0.5rem; border-radius: 9999px; width: 75%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Java</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #16a34a; height: 0.5rem; border-radius: 9999px; width: 70%;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style="background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
            >
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem; text-align: center;"
              >
                Tools & Others
              </h3>
              <div style="margin-bottom: 0.75rem;">
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Git</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #9333ea; height: 0.5rem; border-radius: 9999px; width: 90%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">Docker</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #9333ea; height: 0.5rem; border-radius: 9999px; width: 75%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">AWS</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #9333ea; height: 0.5rem; border-radius: 9999px; width: 70%;"
                    ></div>
                  </div>
                </div>
                <div
                  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;"
                >
                  <span style="color: #4b5563;">CI/CD</span>
                  <div
                    style="width: 6rem; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;"
                  >
                    <div
                      style="background-color: #9333ea; height: 0.5rem; border-radius: 9999px; width: 80%;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div style="text-align: center;">
          <h2
            style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1rem;"
          >
            Interested in working together?
          </h2>
          <p style="color: #4b5563; margin-bottom: 2rem;">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <a routerLink="/contact" class="btn btn-primary"> Get In Touch </a>
        </div>
      </div>
    </div>
  `,
})
export class About {
  protected readonly experience = signal<Experience[]>([
    {
      id: 1,
      company: 'Tech Company Inc.',
      position: 'Senior Full-Stack Developer',
      duration: '2022 - Present',
      description:
        'Leading development of web applications using Angular, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    },
    {
      id: 2,
      company: 'Startup XYZ',
      position: 'Full-Stack Developer',
      duration: '2020 - 2022',
      description:
        'Built and maintained multiple web applications, worked with React, Express, and various databases. Collaborated with cross-functional teams.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      id: 3,
      company: 'Digital Agency',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      description:
        'Developed responsive websites and web applications using modern frontend technologies. Worked with clients to implement design requirements.',
      technologies: ['Angular', 'Vue.js', 'SCSS', 'JavaScript', 'Git'],
    },
  ]);

  protected readonly education = signal<Education[]>([
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2015 - 2019',
      description:
        'Studied computer science fundamentals, algorithms, data structures, and software engineering principles.',
    },
    {
      id: 2,
      degree: 'Web Development Certification',
      institution: 'Online Learning Platform',
      year: '2019',
      description:
        'Completed comprehensive web development course covering modern frameworks and best practices.',
    },
  ]);
}
