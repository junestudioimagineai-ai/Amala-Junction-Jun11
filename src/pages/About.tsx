import { motion } from 'motion/react';

export function About() {
  return (
    <div className="flex-grow bg-white pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            From One Pot to a Thousand Plates
          </motion.h1>
          <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-left">
              Amala Junction started with a simple belief: nothing beats the comforting, rich taste of home-cooked Yoruba meals. What began as a single pot of rich Gbegiri and steaming Amala in a small kitchen has blossomed into Ifako-Ijaiye's favourite spot for authentic swallows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-left">
              We don't cut corners. Our ingredients are sourced fresh daily from local markets, and our recipes have been passed down to preserve that unmistakable 'party jollof' and authentic 'iya basira' flavour profile that our customers know and love.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/Amala2.jpg" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-100 rounded-full z-0"></div>
          </motion.div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                🌿
              </div>
              <h3 className="font-bold text-xl text-gray-900">Fresh Daily</h3>
              <p className="text-gray-600">Fresh ingredients, prepared daily to ensure the highest quality in every plate.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                🥘
              </div>
              <h3 className="font-bold text-xl text-gray-900">Authentic Recipes</h3>
              <p className="text-gray-600">True Yoruba culinary heritage, cooked with passion and traditional spices.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                💖
              </div>
              <h3 className="font-bold text-xl text-gray-900">For Everyone</h3>
              <p className="text-gray-600">Affordable, hearty meals served with a warm smile in a welcoming environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
