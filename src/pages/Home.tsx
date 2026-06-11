import { Link } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data';

export function Home() {
  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('/AmalaFront.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Lagos' Favourite Swallow, <span className="text-orange-500">Right Here in Ifako-Ijaiye</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium text-lg transition-colors inline-flex items-center justify-center"
            >
              View Menu
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 text-sm md:text-base font-medium bg-black/40 p-4 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              <span>1,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Open 8AM–8PM</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From One Pot to a Thousand Plates</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Serving authentic Yoruba recipes made fresh daily. 
            Experience the rich taste of tradition in every bite.
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors group text-lg"
          >
            Learn Our Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Instagram Feed (Mocked with Gallery images) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Flavour</h2>
            <p className="text-gray-600 mb-6">Join our community on Instagram @AmalaJunction</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-xl bg-gray-200 group">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-2 text-center pointer-events-none">
                    View on Instagram
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Maps embed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Find Us Here</h2>
              <p className="text-lg text-gray-600">
                Stop by and enjoy a hot plate of Amala with Assorted meat. 
                We're right in the heart of Ifako-Ijaiye.
              </p>
              <div className="p-6 bg-orange-50 rounded-xl space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shrink-0 shadow-sm">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">29 Dayo Adeniji St, Ifako-Ijaiye, Lagos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shrink-0 shadow-sm">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-500 text-sm mt-0.5">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.12356133036!2d3.310115!3d6.6433552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzgnMzYuMSJOIDPCsDE4JzM0LjkiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
