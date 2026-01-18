import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ServicesService, Service } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(): Service[] {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Service {
    const service = this.servicesService.findOne(+id);
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  @Get('name/:name')
  findByName(@Param('name') name: string): Service {
    const service = this.servicesService.findByName(name);
    if (!service) {
      throw new NotFoundException(`Service with name ${name} not found`);
    }
    return service;
  }
}