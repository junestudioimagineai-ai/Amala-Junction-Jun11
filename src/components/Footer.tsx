import { Link } from 'react-router-dom';
import { Instagram, Facebook, PhoneIcon as WhatsApp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="font-bold text-2xl tracking-tight">Amala Junction</span>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Serving Lagos' favourite swallows and authentic Yoruba recipes daily.
              From one pot to a thousand plates.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-semibold text-lg text-gray-200">Visit Us</h3>
            <p className="text-gray-400 text-sm">29 Dayo Adeniji St, Ifako-Ijaiye, Lagos</p>
            <p className="text-gray-400 text-sm">Mon–Sat: 8AM–8PM<br/>Sunday: Closed</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-semibold text-lg text-gray-200">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-orange-600 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-orange-600 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-green-600 rounded-full transition-colors" aria-label="WhatsApp">
                <WhatsApp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Amala Junction Restaurant · Ifako-Ijaiye, Lagos</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
          <p className="text-xs">Imagined by JuneStudio</p>
        </div>
      </div>
    </footer>
  );
}
