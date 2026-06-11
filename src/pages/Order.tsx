import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { MENU_CATEGORIES, formatWhatsAppLink } from '../data';

export function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: '',
  });
  
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (itemName: string) => {
    setSelectedItems((prev) => 
      prev.includes(itemName) 
        ? prev.filter((i) => i !== itemName)
        : [...prev, itemName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedItems.length === 0) {
      alert("Please select at least one item from the menu.");
      return;
    }

    const itemsList = selectedItems.map(item => `- ${item}`).join('\n');
    const message = `*NEW PRE-ORDER*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Pickup Time:* ${formData.pickupTime}\n\n*Items Ordered:*\n${itemsList}`;
    
    const url = formatWhatsAppLink(message);
    window.open(url, '_blank');
  };

  return (
    <div className="flex-grow bg-gray-50 py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pre-Order / Reserve</h1>
          <p className="text-lg text-gray-600">
            Skip the wait. Select your items below and we'll prepare your meal just in time for your pickup.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="e.g. Adebayo Johnson"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="080..."
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Pickup/Dine-in Time (8 AM - 8 PM)</label>
                <input
                  type="time"
                  id="time"
                  required
                  min="08:00"
                  max="20:00"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Select Your Menu Items</h3>
              <div className="space-y-6">
                {MENU_CATEGORIES.map((category) => (
                  <div key={category.id}>
                    <h4 className="font-medium text-orange-600 mb-3 text-sm uppercase tracking-wider">{category.name}</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {category.items.map((item) => (
                        <label 
                          key={item.id} 
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedItems.includes(item.name) 
                              ? 'border-orange-500 bg-orange-50/50' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center h-5 mt-0.5">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
                              checked={selectedItems.includes(item.name)}
                              onChange={() => handleCheckboxChange(item.name)}
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-gray-500 text-sm">₦{item.price.toLocaleString()}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Submit Order via WhatsApp
              </button>
              
              <a
                href="tel:+2348000000000"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-sm"
              >
                <PhoneCall className="w-5 h-5" />
                Call to Reserve
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
