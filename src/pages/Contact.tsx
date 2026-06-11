import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { formatWhatsAppLink } from '../data';

export function Contact() {
  return (
    <div className="flex-grow bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Find Us
          </motion.h1>
          <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Whether you're planning a visit or want to place a large order for a party, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-4 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    29 Dayo Adeniji Street,<br />
                    Ifako-Ijaiye, Lagos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-4 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-gray-600 text-lg">Monday – Saturday: 8:00 AM – 8:00 PM</p>
                  <p className="text-gray-500 mt-1">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-4 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone & WhatsApp</h3>
                  <p className="text-gray-600 text-lg mb-4">+234 800 000 0000</p>
                  <a
                    href={formatWhatsAppLink("Hi Amala Junction, I have an inquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-2 rounded-full font-medium transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] mb-6 border border-gray-200">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.12356133036!2d3.310115!3d6.6433552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzgnMzYuMSJOIDPCsDE4JzM0LjkiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <a
              href="https://maps.google.com/?q=29+Dayo+Adeniji+St,+Ifako-Ijaiye,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-sm w-full"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
