export interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  clients?: string[];
  detailedDescription: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
}