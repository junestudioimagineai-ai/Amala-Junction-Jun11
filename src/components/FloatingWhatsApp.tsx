import { MessageCircle } from 'lucide-react';
import { formatWhatsAppLink } from '../data';

export function FloatingWhatsApp() {
  const message = "Hi Amala Junction, I'd like to order";
  
  return (
    <a
      href={formatWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-medium">
        Order on WhatsApp
      </span>
    </a>
  );
}
