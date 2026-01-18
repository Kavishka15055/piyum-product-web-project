'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';

const serviceDetails: Record<string, any> = {
  'hotel-mushroom-supplier': {
    title: 'Hotel Mushroom Supplier',
    description: 'We are the preferred mushroom supplier for leading hotels and restaurants across Sri Lanka, providing fresh, high-quality mushrooms daily.',
    detailedDescription: 'Our hotel supply service includes daily deliveries, custom cutting and packaging, seasonal mushroom varieties, and menu consultation services. We work with chefs to provide the perfect mushrooms for their culinary creations.',
    hotels: [
      'Galle Face Hotel, Colombo',
      'Cinnamon Grand, Colombo',
      'Mount Lavinia Hotel',
      'Heritance Kandalama',
      'Shangri-La Colombo',
      'Taj Samudra',
      'Jetwing Hotels Chain',
      'Aitken Spence Hotels',
      'Cinnamon Hotels & Resorts',
      'Amari Hotels'
    ],
    contactPerson: 'Mr. Kamal Perera',
    contactNumber: '+94 77 234 5678',
    email: 'hotels@piyumproduct.com',
    minimumOrder: '10kg per delivery',
    deliverySchedule: 'Daily (6 AM - 8 AM)'
  },
  'arpico-supermarket-supplier': {
    title: 'Arpico Supermarket Supplier',
    description: 'Official mushroom supplier to Arpico Supercentre chain, ensuring consistent quality across all outlets.',
    detailedDescription: 'We maintain strict quality control measures and supply chain management to ensure fresh mushrooms are available at all Arpico locations nationwide.',
    outlets: [
      'Arpico Supercentre - Rajagiriya',
      'Arpico Supercentre - Nugegoda',
      'Arpico Supercentre - Kandy',
      'Arpico Supercentre - Galle',
      'Arpico Supercentre - Kurunegala',
      'Arpico Supercentre - Jaffna'
    ],
    contactPerson: 'Ms. Nimali Fernando',
    contactNumber: '+94 77 345 6789',
    email: 'wholesale@piyumproduct.com',
    minimumOrder: '50kg per outlet',
    deliverySchedule: 'Twice weekly'
  }
  // Add other services similarly
};

export default function ServiceDetailPage({ params }: { params: { name: string } }) {
  const service = serviceDetails[params.name];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <Link 
          href="/" 
          className="inline-flex items-center text-green-700 hover:text-green-800 mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h1>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <p className="text-gray-700">{service.detailedDescription}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={20} className="text-green-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-700">Contact</div>
                        <div className="text-gray-900">{service.contactPerson}</div>
                        <div className="text-gray-600">{service.contactNumber}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-green-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-700">Email</div>
                        <div className="text-gray-600">{service.email}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-gray-700">Minimum Order</div>
                      <div className="text-gray-900">{service.minimumOrder}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700">Delivery Schedule</div>
                      <div className="text-gray-900">{service.deliverySchedule}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-green-50 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {service.hotels ? 'Partner Hotels' : 'Service Outlets'}
              </h3>
              
              <div className="space-y-4">
                {(service.hotels || service.outlets || []).map((item: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <MapPin size={18} className="text-green-600 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-100 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Become a Partner</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Interested in our supply services? Contact us to discuss partnership opportunities.
                </p>
                <a
                  href={`tel:${service.contactNumber}`}
                  className="btn-primary w-full text-center block"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}