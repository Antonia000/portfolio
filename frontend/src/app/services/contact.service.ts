import { Injectable, signal } from '@angular/core';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  status: 'pending' | 'sent' | 'failed';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly messages = signal<ContactMessage[]>([]);

  async sendMessage(
    formData: ContactFormData
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create new message
      const newMessage: ContactMessage = {
        id: this.generateId(),
        ...formData,
        timestamp: new Date(),
        status: 'sent',
      };

      // Add to messages list
      this.messages.update((messages) => [...messages, newMessage]);

      // In a real application, you would send this to your backend API
      // const response = await this.http.post<ContactMessage>('/api/contact', formData).toPromise();

      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      };
    } catch (error) {
      console.error('Error sending message:', error);

      // Add failed message to list
      const failedMessage: ContactMessage = {
        id: this.generateId(),
        ...formData,
        timestamp: new Date(),
        status: 'failed',
      };

      this.messages.update((messages) => [...messages, failedMessage]);

      return {
        success: false,
        message:
          'Sorry, there was an error sending your message. Please try again.',
      };
    }
  }

  getMessages(): ContactMessage[] {
    return this.messages();
  }

  getMessageById(id: string): ContactMessage | undefined {
    return this.messages().find((message) => message.id === id);
  }

  deleteMessage(id: string): void {
    this.messages.update((messages) =>
      messages.filter((message) => message.id !== id)
    );
  }

  clearMessages(): void {
    this.messages.set([]);
  }

  getMessageStats(): {
    total: number;
    sent: number;
    failed: number;
    pending: number;
  } {
    const messages = this.messages();
    return {
      total: messages.length,
      sent: messages.filter((m) => m.status === 'sent').length,
      failed: messages.filter((m) => m.status === 'failed').length,
      pending: messages.filter((m) => m.status === 'pending').length,
    };
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
