import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, MessageCircle } from 'lucide-react';
import { MENU_CATEGORIES, formatWhatsAppLink } from '../data';

export function Menu() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].id);

  const handleOrderClick = (itemName: string) => {
    const url = formatWhatsAppLink(`Hi Amala Junction, I'd like to order: ${itemName}`);
    window.open(url, '_blank');
  };

  const handleGeneralOrderClick = () => {
    const url = formatWhatsAppLink("Hi Amala Junction, I'd like to make an order.");
    window.open(url, '_blank');
  };

  return (
    <div className="flex-grow bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authentic, freshly prepared meals that bring the true taste of Lagos to your plate.
          </p>
        </div>

        {/* Category Navigation (Horizontal scroll on mobile) */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-200 mb-8 pb-4 gap-6">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`whitespace-nowrap pb-2 font-medium text-lg border-b-2 transition-colors ${
                activeTab === category.id 
                  ? 'border-orange-600 text-orange-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[50vh]">
          {MENU_CATEGORIES.map((category) => (
            category.id === activeTab && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-6 border border-gray-100 rounded-2xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.1)] transition-shadow flex justify-between items-start"
                  >
                    <div className="pr-4">
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                      <span className="font-semibold text-orange-600 text-lg">₦{item.price.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => handleOrderClick(item.name)}
                      className="p-3 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-full transition-colors shrink-0"
                      aria-label={`Add ${item.name} to WhatsApp Order`}
                      title="Order via WhatsApp"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </motion.div>
            )
          ))}
        </div>

        {/* Sticky generic CTA at the bottom of the page */}
        <div className="mt-16 text-center sticky bottom-24 z-40 bg-white/80 backdrop-blur-md py-4 rounded-full shadow-lg border border-gray-100 mx-auto max-w-sm flex justify-center">
          <button
            onClick={handleGeneralOrderClick}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Send My Order via WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}
