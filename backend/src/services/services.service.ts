import { Injectable } from '@nestjs/common';

export class Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  clients: string[];
  detailedDescription: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  minimumOrder: string;
  deliverySchedule: string;
}

@Injectable()
export class ServicesService {
  private services: Service[] = [
    {
      id: 1,
      name: 'Hotel Mushroom Supplier',
      description: 'Regular supply of fresh mushrooms to hotels and restaurants. Custom cuts and packaging available.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800',
      clients: ['Galle Face Hotel, Colombo', 'Cinnamon Grand, Colombo', 'Mount Lavinia Hotel', 'Heritance Kandalama'],
      detailedDescription: 'We provide daily fresh mushroom deliveries to hotels and restaurants across Sri Lanka. Our service includes custom cutting, packaging, and menu consultation with chefs.',
      contactPerson: 'Mr. Kamal Perera',
      contactNumber: '+94 77 234 5678',
      email: 'hotels@piyumproduct.com',
      minimumOrder: '10kg per delivery',
      deliverySchedule: 'Daily (6 AM - 8 AM)'
    },
    {
      id: 2,
      name: 'Arpico Supermarket Supplier',
      description: 'Wholesale supply to Arpico supermarkets across the island. Consistent quality guaranteed.',
      imageUrl: 'https://images.unsplash.com/photo-1606788075767-20b25ec7e8c4?auto=format&fit=crop&w=800',
      clients: ['Arpico Supercentre - Rajagiriya', 'Arpico Supercentre - Nugegoda', 'Arpico Supercentre - Kandy'],
      detailedDescription: 'As an official supplier to Arpico supermarkets, we ensure consistent quality and timely deliveries to all outlets nationwide.',
      contactPerson: 'Ms. Nimali Fernando',
      contactNumber: '+94 77 345 6789',
      email: 'wholesale@piyumproduct.com',
      minimumOrder: '50kg per outlet',
      deliverySchedule: 'Twice weekly'
    },
    {
      id: 3,
      name: 'Keells Super Mushroom Supplier',
      description: 'Exclusive supplier to Keells Super chain. Daily deliveries and seasonal specials.',
      imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e66b4cd4?auto=format&fit=crop&w=800',
      clients: ['Keells Super - Colombo', 'Keells Super - Kandy', 'Keells Super - Galle'],
      detailedDescription: 'We maintain exclusive supply agreements with Keells Super, providing fresh mushrooms daily with special seasonal varieties.',
      contactPerson: 'Mr. Sunil Bandara',
      contactNumber: '+94 77 456 7890',
      email: 'keells@piyumproduct.com',
      minimumOrder: '30kg per store',
      deliverySchedule: 'Daily morning deliveries'
    },
    {
      id: 4,
      name: 'Good Market Mushroom Supplier',
      description: 'Supplier to Good Market outlets. Focus on organic and specialty mushrooms.',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      clients: ['Good Market - Colombo', 'Good Market - Kandy'],
      detailedDescription: 'Specializing in organic and specialty mushrooms for Good Market outlets, focusing on sustainable and ethical farming practices.',
      contactPerson: 'Ms. Anusha Silva',
      contactNumber: '+94 77 567 8901',
      email: 'organic@piyumproduct.com',
      minimumOrder: '20kg per outlet',
      deliverySchedule: 'Weekly deliveries'
    },
    {
      id: 5,
      name: 'Diamond Cutters Limited Mushroom Supplier',
      description: 'Corporate supply to Diamond Cutters Limited for their staff cafeteria and events.',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800',
      clients: ['Diamond Cutters Ltd - Head Office', 'Diamond Cutters Ltd - Factory'],
      detailedDescription: 'Corporate supply service providing fresh mushrooms for staff cafeterias and corporate events at Diamond Cutters Limited.',
      contactPerson: 'Mr. Rohan Fernando',
      contactNumber: '+94 77 678 9012',
      email: 'corporate@piyumproduct.com',
      minimumOrder: '15kg per week',
      deliverySchedule: 'Weekly (Monday mornings)'
    }
  ];

  findAll(): Service[] {
    return this.services;
  }

  findOne(id: number): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  findByName(name: string): Service | undefined {
    return this.services.find(service => 
      service.name.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase()
    );
  }
}