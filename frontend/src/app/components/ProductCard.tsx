import { Product } from '../types/product';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-green-700">
              LKR {product.pricePerKg} <span className="text-sm font-normal text-gray-500">/ kg</span>
            </span>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            In Stock
          </span>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => onSelect(product)}
            className="flex-1 btn-primary flex items-center justify-center"
          >
            <Eye size={18} className="mr-2" />
            View Details
          </button>
          <button
            onClick={() => onSelect(product)}
            className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 flex items-center"
            title="Contact to Order"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}