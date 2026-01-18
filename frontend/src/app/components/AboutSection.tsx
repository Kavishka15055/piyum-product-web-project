import { Leaf, Truck, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About PIYUM PRODUCT
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing the highest quality mushrooms while promoting 
          sustainable farming practices and supporting local businesses.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            Our Story & Mission
          </h3>
          <p className="text-gray-600 mb-4">
            Founded with a passion for organic farming and sustainable agriculture, 
            PIYUM PRODUCT has grown to become a trusted supplier of premium mushrooms 
            across Sri Lanka.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to deliver fresh, nutritious mushrooms while educating 
            consumers and businesses about the benefits of incorporating mushrooms 
            into their diets and menus.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <Leaf className="text-green-600 mt-1 mr-3" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">100% Organic</h4>
                <p className="text-gray-600 text-sm">Chemical-free farming methods</p>
              </div>
            </div>
            <div className="flex items-start">
              <Truck className="text-green-600 mt-1 mr-3" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Daily Delivery</h4>
                <p className="text-gray-600 text-sm">Fresh supply to your doorstep</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="text-green-600 mt-1 mr-3" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">Rigorous quality checks</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-green-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-800">50+</div>
              <div className="text-gray-600">Hotels Supplied</div>
            </div>
            <div className="bg-orange-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-800">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-800">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-800">15+</div>
              <div className="text-gray-600">Mushroom Varieties</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}