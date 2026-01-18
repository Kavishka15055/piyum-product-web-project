'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for orders, partnerships, or inquiries about our products.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary flex items-center"
            >
              Send Message <Send size={20} className="ml-2" />
            </button>
          </form>
        </div>

        <div>
          <div className="bg-green-50 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">+94 77 123 4567</p>
                  <p className="text-gray-600">+94 11 234 5678</p>
                  <p className="text-gray-600 text-sm mt-1">Available 7:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Addresses</h4>
                  <p className="text-gray-600">orders@piyumproduct.com</p>
                  <p className="text-gray-600">info@piyumproduct.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">
                    No. 123, Mushroom Lane<br />
                    Colombo 05, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">7:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                <strong>Note:</strong> This website is for product awareness. 
                All orders must be placed via phone or email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}