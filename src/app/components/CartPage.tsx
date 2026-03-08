import { motion } from 'motion/react';
import { Minus, Plus, Trash2, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

interface CartItem {
  id: string;
  name: string;
  flavor: string;
  sachets: number;
  price: number;
  quantity: number;
  isSubscription: boolean;
}

const UPSELL_PRODUCTS = [
  {
    id: 'bundle-upgrade',
    title: 'Upgrade to 60 Sachets',
    description: 'Save 20% more and never run out',
    price: 79.99,
    savings: 15.00,
    badge: 'Best Value'
  },
  {
    id: 'subscription',
    title: 'Subscribe & Save 15%',
    description: 'Get automatic deliveries every month',
    price: null,
    savings: null,
    badge: 'Most Popular'
  },
  {
    id: 'multi-flavor',
    title: 'Try Both Flavors',
    description: '30 Passionfruit + 30 Lemon Lime',
    price: 89.99,
    savings: 10.00,
    badge: 'Variety Pack'
  }
];

export function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = item.isSubscription ? item.price * 0.85 : item.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const shipping = subtotal >= 75 ? 0 : 7.99;
  const total = subtotal + shipping;
  const shippingThreshold = 75;
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);

  const handleUpsellClick = (upsellId: string) => {
    // Handle upsell actions - in a real app, this would add items to the cart
    console.log('Upsell clicked:', upsellId);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl mb-12">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
                <h2 className="text-2xl mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">Add some products to get started</p>
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-black text-white rounded-lg font-medium"
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Free Shipping Indicator */}
                {remainingForFreeShipping > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <p className="text-sm text-blue-900">
                      Add <span className="font-bold">${remainingForFreeShipping.toFixed(2)}</span> more to get free shipping!
                    </p>
                    <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((subtotal / shippingThreshold) * 100, 100)}%` }}
                      />
                    </div>
                  </motion.div>
                )}

                {remainingForFreeShipping === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-50 rounded-lg border border-green-200 flex items-center gap-2"
                  >
                    <Check className="text-green-600" size={20} />
                    <p className="text-sm text-green-900 font-medium">
                      You've unlocked free shipping!
                    </p>
                  </motion.div>
                )}

                {/* Cart Items */}
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 border-2 border-gray-200 rounded-xl"
                  >
                    <div className="flex gap-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
                        💧
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-medium">{item.name}</h3>
                            <p className="text-gray-600">
                              {item.flavor} • {item.sachets} Sachets
                            </p>
                            {item.isSubscription && (
                              <p className="text-sm text-green-600 font-medium mt-1">
                                Subscribe & Save 15%
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 rounded transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 rounded transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">
                              ${((item.isSubscription ? item.price * 0.85 : item.price) * item.quantity).toFixed(2)}
                            </p>
                            {item.isSubscription && (
                              <p className="text-sm text-gray-400 line-through">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Upsells Section */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <h2 className="text-2xl mb-6">Maximize Your Results</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {UPSELL_PRODUCTS.map((upsell, index) => (
                    <motion.div
                      key={upsell.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-5 border-2 border-gray-200 rounded-xl hover:border-black transition-all cursor-pointer group relative overflow-hidden"
                      onClick={() => handleUpsellClick(upsell.id)}
                    >
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black text-white text-xs rounded-full">
                        {upsell.badge}
                      </div>
                      <h3 className="font-medium text-lg mb-2 pr-20">{upsell.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{upsell.description}</p>
                      {upsell.price && (
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold">${upsell.price}</span>
                          {upsell.savings && (
                            <span className="text-sm text-green-600">
                              Save ${upsell.savings}
                            </span>
                          )}
                        </div>
                      )}
                      <motion.div
                        className="mt-3 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                      >
                        Add to Cart
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-32 p-8 border-2 border-gray-200 rounded-xl"
              >
                <h2 className="text-2xl mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {cartItems.some(item => item.isSubscription) && (
                    <div className="flex justify-between text-lg text-green-600">
                      <span>Subscription Savings</span>
                      <span className="font-medium">
                        -${cartItems.reduce((sum, item) => 
                          sum + (item.isSubscription ? item.price * 0.15 * item.quantity : 0), 0
                        ).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="pt-4 border-t-2 border-gray-200">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-black text-white rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </motion.button>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-600" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-600" />
                    <span>Free shipping on orders over $75</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-600" />
                    <span>HASTA certified & tested</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
