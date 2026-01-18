import { Injectable } from '@nestjs/common';

export class Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  pricePerKg: number;
  storageInstructions: string;
  nutritionalInfo: string;
  isAvailable: boolean;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'American Oyster',
      description: 'Fresh American Oyster mushrooms with delicate flavor and velvety texture. Perfect for stir-fries and soups.',
      imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800',
      pricePerKg: 1200,
      storageInstructions: 'Store in refrigerator at 4°C. Consume within 5 days.',
      nutritionalInfo: 'Rich in protein, fiber, and antioxidants. Low in calories and fat.',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Abalone Mushroom',
      description: 'Premium Abalone mushrooms known for their meaty texture and rich umami flavor.',
      imageUrl: 'https://images.unsplash.com/photo-1626070520471-ec2b2e1d0d29?auto=format&fit=crop&w=800',
      pricePerKg: 1500,
      storageInstructions: 'Keep in paper bag in refrigerator. Best used within 3 days.',
      nutritionalInfo: 'High in vitamin D, B vitamins, and selenium.',
      isAvailable: true
    },
    {
      id: 3,
      name: 'Dry Mushroom',
      description: 'Sun-dried mushrooms with concentrated flavor. Ideal for long-term storage and intense dishes.',
      imageUrl: 'https://images.unsplash.com/photo-1564073239425-2c987f2d61be?auto=format&fit=crop&w=800',
      pricePerKg: 2500,
      storageInstructions: 'Store in airtight container in cool, dry place. Lasts up to 1 year.',
      nutritionalInfo: 'Concentrated nutrients, rich in protein and minerals.',
      isAvailable: true
    },
    {
      id: 4,
      name: 'Mushroom Powder',
      description: 'Finely ground mushroom powder for seasoning, soups, and health supplements.',
      imageUrl: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=800',
      pricePerKg: 3000,
      storageInstructions: 'Store in airtight container away from moisture and sunlight.',
      nutritionalInfo: 'Concentrated antioxidants and immune-boosting properties.',
      isAvailable: true
    },
    {
      id: 5,
      name: 'Shiitake Mushroom',
      description: 'Japanese Shiitake mushrooms with rich, smoky flavor. Excellent for Asian cuisine.',
      imageUrl: 'https://images.unsplash.com/photo-1578665484036-01c4455ac56d?auto=format&fit=crop&w=800',
      pricePerKg: 1800,
      storageInstructions: 'Refrigerate in paper bag. Use within 4 days.',
      nutritionalInfo: 'High in lentinan, known for immune support.',
      isAvailable: true
    },
    {
      id: 6,
      name: 'Button Mushroom',
      description: 'Classic white button mushrooms, versatile and mild flavored for all culinary uses.',
      imageUrl: 'https://images.unsplash.com/photo-1516550893923-42d28aa567d4?auto=format&fit=crop&w=800',
      pricePerKg: 1000,
      storageInstructions: 'Keep refrigerated. Wash just before use.',
      nutritionalInfo: 'Good source of potassium and vitamin B2.',
      isAvailable: true
    }
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  create(product: Product): Product {
    const newProduct = {
      ...product,
      id: this.products.length + 1,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, productData: Partial<Product>): Product | undefined {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return undefined;
    
    this.products[index] = { ...this.products[index], ...productData };
    return this.products[index];
  }

  remove(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.products.splice(index, 1);
    return true;
  }
}