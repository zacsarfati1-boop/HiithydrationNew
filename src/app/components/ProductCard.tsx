import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface ProductCardProps {
  title: string;
  flavor: string;
  color: string;
  image: string;
  delay?: number;
}

export function ProductCard({ title, flavor, color, image, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gray-50 aspect-square mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={`${title} - ${flavor}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/10 flex items-center justify-center"
        >
          <Link to="/product">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-black px-10 py-4 rounded-full font-medium"
            >
              Shop
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <div className="text-center">
        <div 
          className="w-16 h-1 mx-auto mb-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="text-3xl mb-2">{title}</h3>
        <p className="text-gray-600 text-lg">{flavor}</p>
      </div>
    </motion.div>
  );
}