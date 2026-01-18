import { Controller, Get, Post, Body, Param, Put, NotFoundException } from '@nestjs/common';
import { ContactService, ContactMessage } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() contactMessage: Omit<ContactMessage, 'id' | 'isRead' | 'createdAt'>): ContactMessage {
    return this.contactService.create(contactMessage);
  }

  @Get()
  findAll(): ContactMessage[] {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ContactMessage {
    const message = this.contactService.findOne(+id);
    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    return message;
  }

  @Put(':id/read')
  markAsRead(@Param('id') id: string): ContactMessage {
    const message = this.contactService.markAsRead(+id);
    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    return message;
  }
}