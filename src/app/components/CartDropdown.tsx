import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

interface CartDropdownProps {
  isVisible: boolean;
}

export function CartDropdown({ isVisible }: CartDropdownProps) {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = item.isSubscription ? item.price * 0.85 : item.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const shipping = subtotal >= 75 ? 0 : 7.99;
  const total = subtotal + shipping;
  const shippingThreshold = 75;
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
    >
      {cartItems.length === 0 ? (
        <div className="p-8 text-center">
          <ShoppingBag size={48} className="mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
          <p className="text-sm text-gray-600 mb-6">Add some products to get started</p>
          <Link to="/product">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="max-h-80 overflow-y-auto p-4">
            {/* Free Shipping Progress */}
            {remainingForFreeShipping > 0 && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-900 mb-2">
                  Add <span className="font-bold">${remainingForFreeShipping.toFixed(2)}</span> more for free shipping!
                </p>
                <div className="w-full bg-blue-200 rounded-full h-1.5">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((subtotal / shippingThreshold) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {remainingForFreeShipping === 0 && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200 flex items-center gap-2">
                <Check className="text-green-600" size={16} />
                <p className="text-xs text-green-900 font-medium">
                  Free shipping unlocked!
                </p>
              </div>
            )}

            {/* Items List */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    💧
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-gray-600">
                      {item.flavor} • {item.sachets} Sachets
                    </p>
                    {item.isSubscription && (
                      <p className="text-xs text-green-600 font-medium">
                        Subscribe & Save 15%
                      </p>
                    )}
                    <p className="text-xs text-gray-600 mt-1">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm">
                      ${((item.isSubscription ? item.price * 0.85 : item.price) * item.quantity).toFixed(2)}
                    </p>
                    {item.isSubscription && (
                      <p className="text-xs text-gray-400 line-through">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Footer */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link to="/cart" className="block w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                View Cart
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
}