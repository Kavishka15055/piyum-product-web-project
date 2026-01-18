'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

// Mock data - replace with API call
const mockProducts: Product[] = [
  {
    id: 1,
    name: "American Oyster",
    description: "Fresh American Oyster mushrooms with delicate flavor and velvety texture. Perfect for stir-fries and soups.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800",
    pricePerKg: 1200,
    storageInstructions: "Store in refrigerator at 4°C. Consume within 5 days.",
    nutritionalInfo: "Rich in protein, fiber, and antioxidants. Low in calories and fat."
  },
  {
    id: 2,
    name: "Abalone Mushroom",
    description: "Premium Abalone mushrooms known for their meaty texture and rich umami flavor.",
    imageUrl: "https://images.unsplash.com/photo-1626070520471-ec2b2e1d0d29?auto=format&fit=crop&w=800",
    pricePerKg: 1500,
    storageInstructions: "Keep in paper bag in refrigerator. Best used within 3 days.",
    nutritionalInfo: "High in vitamin D, B vitamins, and selenium."
  },
  {
    id: 3,
    name: "Dry Mushroom",
    description: "Sun-dried mushrooms with concentrated flavor. Ideal for long-term storage and intense dishes.",
    imageUrl: "https://images.unsplash.com/photo-1564073239425-2c987f2d61be?auto=format&fit=crop&w=800",
    pricePerKg: 2500,
    storageInstructions: "Store in airtight container in cool, dry place. Lasts up to 1 year.",
    nutritionalInfo: "Concentrated nutrients, rich in protein and minerals."
  },
  {
    id: 4,
    name: "Mushroom Powder",
    description: "Finely ground mushroom powder for seasoning, soups, and health supplements.",
    imageUrl: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=800",
    pricePerKg: 3000,
    storageInstructions: "Store in airtight container away from moisture and sunlight.",
    nutritionalInfo: "Concentrated antioxidants and immune-boosting properties."
  },
  {
    id: 5,
    name: "Shiitake",
    description: "Japanese Shiitake mushrooms with rich, smoky flavor. Excellent for Asian cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1578665484036-01c4455ac56d?auto=format&fit=crop&w=800",
    pricePerKg: 1800,
    storageInstructions: "Refrigerate in paper bag. Use within 4 days.",
    nutritionalInfo: "High in lentinan, known for immune support."
  },
  {
    id: 6,
    name: "Button Mushroom",
    description: "Classic white button mushrooms, versatile and mild flavored for all culinary uses.",
    imageUrl: "https://images.unsplash.com/photo-1516550893923-42d28aa567d4?auto=format&fit=crop&w=800",
    pricePerKg: 1000,
    storageInstructions: "Keep refrigerated. Wash just before use.",
    nutritionalInfo: "Good source of potassium and vitamin B2."
  }
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(mockProducts);

  // Uncomment for API integration
  // useEffect(() => {
  //   fetch('http://localhost:3001/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //     .catch(err => console.error('Error fetching products:', err));
  // }, []);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of fresh and processed mushrooms. 
            All products are organically grown and carefully harvested.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Contact for Orders:</h4>
                      <p className="text-gray-600 mb-1">📞 +94 77 123 4567</p>
                      <p className="text-gray-600 mb-1">📞 +94 11 234 5678</p>
                      <p className="text-gray-600">✉️ orders@piyumproduct.com</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Price</h4>
                        <p className="text-2xl font-bold text-green-700">
                          LKR {selectedProduct.pricePerKg}/kg
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Storage Instructions</h4>
                        <p className="text-gray-600">{selectedProduct.storageInstructions}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Nutritional Information</h4>
                        <p className="text-gray-600">{selectedProduct.nutritionalInfo}</p>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-gray-600 text-sm">
                          <strong>Note:</strong> This website is for product awareness only. 
                          To place orders, please contact us via phone or email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <a
                    href="tel:+94771234567"
                    className="btn-primary inline-flex items-center"
                  >
                    📞 Call to Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}