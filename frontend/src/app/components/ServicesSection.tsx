import Link from 'next/link';
import { Truck, Store, Coffee, Gem } from 'lucide-react';

const services = [
  {
    id: 1,
    name: "Hotel Mushroom Supplier",
    description: "Regular supply of fresh mushrooms to hotels and restaurants. Custom cuts and packaging available.",
    icon: Coffee,
    href: "/services/hotel-mushroom-supplier",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    name: "Arpico Supermarket Supplier",
    description: "Wholesale supply to Arpico supermarkets across the island. Consistent quality guaranteed.",
    icon: Store,
    href: "/services/arpico-supermarket-supplier",
    color: "bg-green-100 text-green-700"
  },
  {
    id: 3,
    name: "Keells Super Mushroom Supplier",
    description: "Exclusive supplier to Keells Super chain. Daily deliveries and seasonal specials.",
    icon: Store,
    href: "/services/keells-super-mushroom-supplier",
    color: "bg-red-100 text-red-700"
  },
  {
    id: 4,
    name: "Good Market Mushroom Supplier",
    description: "Supplier to Good Market outlets. Focus on organic and specialty mushrooms.",
    icon: Store,
    href: "/services/good-market-mushroom-supplier",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 5,
    name: "Diamond Cutters Limited Mushroom Supplier",
    description: "Corporate supply to Diamond Cutters Limited for their staff cafeteria and events.",
    icon: Gem,
    href: "/services/diamond-cutters-limited-mushroom-supplier",
    color: "bg-yellow-100 text-yellow-700"
  }
];

export default function ServicesSection() {
  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide reliable mushroom supply services to various institutions across Sri Lanka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              href={service.href}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${service.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-green-600 font-medium flex items-center">
                  Learn more
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex flex-wrap justify-center items-center bg-green-50 rounded-full px-6 py-3 gap-2">
          <Truck className="text-green-600 mr-1" size={24} />
          <span className="text-green-800 font-medium text-sm md:text-base">
            Island-wide delivery available • Minimum order: 5kg • Bulk discounts available
          </span>
        </div>
      </div>
    </div>
  );
}