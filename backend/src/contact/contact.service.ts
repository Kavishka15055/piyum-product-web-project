import { Injectable } from '@nestjs/common';

export class ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

@Injectable()
export class ContactService {
  private messages: ContactMessage[] = [];
  private idCounter = 1;

  create(contactMessage: Omit<ContactMessage, 'id' | 'isRead' | 'createdAt'>): ContactMessage {
    const newMessage: ContactMessage = {
      ...contactMessage,
      id: this.idCounter++,
      isRead: false,
      createdAt: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  findAll(): ContactMessage[] {
    return this.messages;
  }

  findOne(id: number): ContactMessage | undefined {
    return this.messages.find(message => message.id === id);
  }

  markAsRead(id: number): ContactMessage | undefined {
    const message = this.messages.find(m => m.id === id);
    if (message) {
      message.isRead = true;
    }
    return message;
  }
}