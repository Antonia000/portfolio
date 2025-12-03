import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
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
            Get In Touch
          </h1>
          <p
            style="font-size: 1.25rem; color: var(--light-text-color); max-width: 42rem; margin: 0 auto;"
          >
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to
            collaborate or just want to say hello!
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 3rem;">
          <!-- Contact Form -->
          <div
            style="background: var(--white); padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px var(--shadow-gray);"
          >
            <h2
              style="font-size: 1.5rem; font-weight: 700; color: var(--dark-text-color); margin-bottom: 1.5rem;"
            >
              Send a Message
            </h2>

            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              style="margin-bottom: 1.5rem;"
            >
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  class="form-input"
                  placeholder="Your name"
                />
                @if (contactForm.get('name')?.invalid &&
                contactForm.get('name')?.touched) {
                <p
                  style="color: var(--error-red); font-size: 0.875rem; margin-top: 0.25rem;"
                >
                  Name is required
                </p>
                }
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  class="form-input"
                  placeholder="your.email@example.com"
                />
                @if (contactForm.get('email')?.invalid &&
                contactForm.get('email')?.touched) {
                <p
                  style="color: var(--error-red); font-size: 0.875rem; margin-top: 0.25rem;"
                >
                  Please enter a valid email address
                </p>
                }
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  formControlName="subject"
                  class="form-input"
                  placeholder="What's this about?"
                />
                @if (contactForm.get('subject')?.invalid &&
                contactForm.get('subject')?.touched) {
                <p
                  style="color: var(--error-red); font-size: 0.875rem; margin-top: 0.25rem;"
                >
                  Subject is required
                </p>
                }
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="5"
                  class="form-input form-textarea"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
                @if (contactForm.get('message')?.invalid &&
                contactForm.get('message')?.touched) {
                <p
                  style="color: var(--error-red); font-size: 0.875rem; margin-top: 0.25rem;"
                >
                  Message is required
                </p>
                }
              </div>

              <button
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting()"
                style="width: 100%; background-color: var(--primary-blue); color: var(--white); padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; border: none; cursor: pointer; transition: background-color 0.2s;"
                [style.background-color]="
                  contactForm.invalid || isSubmitting()
                    ? 'var(--disabled-button-bg)'
                    : 'var(--primary-blue)'
                "
                [style.cursor]="
                  contactForm.invalid || isSubmitting()
                    ? 'not-allowed'
                    : 'pointer'
                "
              >
                @if (isSubmitting()) { Sending... } @else { Send Message }
              </button>
            </form>

            @if (submitStatus()) {
            <div
              style="margin-top: 1rem; padding: 1rem; border-radius: 0.5rem;"
              [style.background-color]="
                submitStatus() === 'success'
                  ? 'var(--success-bg)'
                  : 'var(--error-bg)'
              "
              [style.color]="
                submitStatus() === 'success'
                  ? 'var(--success-color)'
                  : 'var(--error-red)'
              "
            >
              @if (submitStatus() === 'success') { Thank you! Your message has
              been sent successfully. I'll get back to you soon. } @else {
              Sorry, there was an error sending your message. Please try again.
              }
            </div>
            }
          </div>

          <!-- Contact Information -->
          <div style="margin-bottom: 2rem;">
            <div style="margin-bottom: 2rem;">
              <h2
                style="font-size: 1.5rem; font-weight: 700; color: var(--dark-text-color); margin-bottom: 1.5rem;"
              >
                Contact Information
              </h2>
              <div style="margin-bottom: 1rem;">
                <div
                  style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;"
                >
                  <div
                    style="background-color: var(--skill-bg-frontend); padding: 0.75rem; border-radius: 9999px;"
                  >
                    <svg
                      style="width: 1.5rem; height: 1.5rem; color: var(--primary-blue);"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p style="font-weight: 500; color: var(--dark-text-color);">
                      Email
                    </p>
                    <a
                      href="mailto:hello@nicoletaantonia.com"
                      style="color: var(--primary-blue); text-decoration: none;"
                    >
                      hello@nicoletaantonia.com
                    </a>
                  </div>
                </div>

                <div
                  style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;"
                >
                  <div
                    style="background-color: var(--skill-bg-backend); padding: 0.75rem; border-radius: 9999px;"
                  >
                    <svg
                      style="width: 1.5rem; height: 1.5rem; color: var(--skill-color-backend);"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p style="font-weight: 500; color: var(--dark-text-color);">
                      Location
                    </p>
                    <p style="color: var(--light-text-color);">
                      Your City, Country
                    </p>
                  </div>
                </div>

                <div
                  style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;"
                >
                  <div
                    style="background-color: var(--skill-bg-database); padding: 0.75rem; border-radius: 9999px;"
                  >
                    <svg
                      style="width: 1.5rem; height: 1.5rem; color: var(--skill-color-database);"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p style="font-weight: 500; color: var(--dark-text-color);">
                      Response Time
                    </p>
                    <p style="color: var(--light-text-color);">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 2rem;">
              <h3
                style="font-size: 1.25rem; font-weight: 600; color: var(--dark-text-color); margin-bottom: 1rem;"
              >
                Connect on Social Media
              </h3>
              <div style="display: flex; gap: 1rem;">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="background-color: var(--dark-text-color); color: var(--white); padding: 0.75rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
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
                  style="background-color: var(--primary-blue); color: var(--white); padding: 0.75rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
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
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="background-color: var(--social-media-twitter); color: var(--white); padding: 0.75rem; border-radius: 0.5rem; text-decoration: none; transition: background-color 0.2s;"
                >
                  <svg
                    style="width: 1.5rem; height: 1.5rem;"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              style="background-color: var(--light-blue-bg); padding: 1.5rem; border-radius: 0.5rem;"
            >
              <h3
                style="font-size: 1.125rem; font-weight: 600; color: var(--dark-text-color); margin-bottom: 0.75rem;"
              >
                Let's Work Together!
              </h3>
              <p style="color: var(--light-text-color); margin-bottom: 1rem;">
                I'm currently available for freelance work and exciting
                opportunities. Whether you have a project in mind or just want
                to chat about technology, I'd love to hear from you.
              </p>
              <p style="color: var(--light-text-color);">
                <strong>Available for:</strong> Web Development, Consulting,
                Open Source Collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      button:hover:not(:disabled) {
        background-color: var(--button-hover-blue) !important;
      }

      a:hover {
        opacity: 0.8;
      }
    `,
  ],
})
export class Contact {
  protected readonly contactForm: FormGroup;
  protected readonly isSubmitting = signal(false);
  protected readonly submitStatus = signal<'success' | 'error' | null>(null);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  protected onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitStatus.set('success');
        this.contactForm.reset();

        // Reset status after 5 seconds
        setTimeout(() => {
          this.submitStatus.set(null);
        }, 5000);
      }, 2000);
    }
  }
}
