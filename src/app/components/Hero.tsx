import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/e9ce3da9162bba883fe5e47f4b4073e3cda5f1b7.png';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src={heroImage}
          alt="HIIT Hydration athletes in gym"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 z-10"
      >
        
      </motion.div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
      </div>

      {/* Bottom right corner button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-12 right-12 flex flex-col items-center gap-4 z-10"
      >
        <p className="text-lg md:text-xl font-medium text-white drop-shadow-lg">
          Creatine Meets Electrolytes
        </p>
        <Link to="/product">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black rounded-full inline-flex items-center gap-3 hover:bg-gray-100 transition-colors text-center font-bold px-[48px] pt-[24px] pb-[22px] shadow-xl text-[16px]"
          >
            Shop Now
            
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}