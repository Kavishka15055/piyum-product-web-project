export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  pricePerKg: number;
  storageInstructions: string;
  nutritionalInfo: string;
  isAvailable?: boolean;
}