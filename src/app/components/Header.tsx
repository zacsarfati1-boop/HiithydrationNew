import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartDropdown } from './CartDropdown';
import { useState } from 'react';

export function Header() {
  const { cartCount } = useCart();
  const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-8">
          <Link to="/product" className="text-lg text-black hover:opacity-70 transition-opacity">
            Shop
          </Link>
          <Link to="/science" className="text-lg text-black hover:opacity-70 transition-opacity">
            Science
          </Link>
          <Link to="/athletes" className="text-lg text-black hover:opacity-70 transition-opacity">
            Athletes
          </Link>
        </nav>

        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity">HIIT <span className="">Hydration</span></Link>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsCartDropdownVisible(true)}
          onMouseLeave={() => setIsCartDropdownVisible(false)}
        >
          <Link to="/cart" className="hover:opacity-70 transition-opacity relative block text-black">
            <ShoppingCart size={24} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
          
          <AnimatePresence>
            {isCartDropdownVisible && <CartDropdown isVisible={isCartDropdownVisible} />}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}