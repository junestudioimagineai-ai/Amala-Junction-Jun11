import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export function Gallery() {
  return (
    <div className="flex-grow bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Food & Ambience</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our freshly prepared dishes and our welcoming space.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.concat(GALLERY_IMAGES).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden bg-gray-100"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center flex flex-col items-center">
          <div className="p-4 bg-orange-50 rounded-full mb-6">
            <Instagram className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Craving more?</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Follow us on Instagram for daily mouth-watering updates, behind-the-scenes, and special offers.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Follow @AmalaJunction
          </a>
        </div>
      </div>
    </div>
  );
}
