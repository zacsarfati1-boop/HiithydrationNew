import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Check, CheckCircle2, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FLAVORS = [
  { id: 'passionfruit', name: 'Passionfruit', color: '#FF6B35' },
  { id: 'lemon-lime', name: 'Lemon Lime', color: '#C8E66D' }
];

const BUNDLES = [
  { sachets: 15, price: 29.99, label: '15 Sachets' },
  { sachets: 30, price: 49.99, label: '30 Sachets', popular: true },
  { sachets: 45, price: 64.99, label: '45 Sachets' },
  { sachets: 60, price: 79.99, label: '60 Sachets', bestValue: true }
];

const INGREDIENTS = [
  { 
    name: 'Creatine Monohydrate', 
    amount: '5g', 
    benefit: 'Supports muscle strength and power output',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGluZSUyMHBvd2RlciUyMHN1cHBsZW1lbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NzI5MzczMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Sodium', 
    amount: '1000mg', 
    benefit: 'Essential for hydration and nerve function',
    image: 'https://images.unsplash.com/photo-1598187063081-02e97620b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaGltYWxheWFuJTIwc2FsdCUyMGNyeXN0YWxzfGVufDF8fHx8MTc3MjkzNzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Potassium', 
    amount: '230mg', 
    benefit: 'Helps maintain fluid balance',
    image: 'https://images.unsplash.com/photo-1743007361678-6c7344ab7da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmFzJTIwcG90YXNzaXVtJTIwZnJ1aXR8ZW58MXx8fHwxNzcyOTM3MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Magnesium', 
    amount: '70mg', 
    benefit: 'Supports muscle function and recovery',
    image: 'https://images.unsplash.com/photo-1649333243484-df91ff7b73ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWduZXNpdW0lMjBzdXBwbGVtZW50JTIwY2Fwc3VsZXN8ZW58MXx8fHwxNzcyOTM3MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Coconut Powder', 
    amount: '625mg', 
    benefit: 'Natural source of electrolytes',
    image: 'https://images.unsplash.com/photo-1651592058939-48f33b9023f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcG93ZGVyJTIwYm93bHxlbnwxfHx8fDE3NzI5MzczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const BENEFITS = [
  'Enhanced muscle performance',
  'Superior hydration',
  'Faster recovery',
  'Natural ingredients',
  'No artificial colors',
  'Science-backed formula'
];

const FAQS = [
  {
    question: 'When should I take HIIT Hydration?',
    answer: 'For best results, consume before, during, or after your workout. You can also take it daily to maintain optimal creatine and hydration levels.'
  },
  {
    question: 'Is this product safe for drug-tested athletes?',
    answer: 'Yes! HIIT Hydration is HASTA approved and tested to be free from banned substances, making it safe for all competitive athletes.'
  },
  {
    question: 'How does the subscription work?',
    answer: 'Subscribe and save 15% on every order. Your selected bundle will be delivered monthly, and you can cancel or modify your subscription anytime.'
  },
  {
    question: 'Can I mix this with other supplements?',
    answer: 'Yes, HIIT Hydration can be safely combined with other supplements. However, consult with your healthcare provider if you have any concerns.'
  },
  {
    question: 'What makes this different from regular creatine?',
    answer: 'HIIT Hydration combines premium creatine with essential electrolytes for superior hydration and performance, all in convenient single-serve sachets.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard delivery takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping on orders over $50.'
  }
];

export function ProductPage() {
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVORS[0]);
  const [selectedBundle, setSelectedBundle] = useState(BUNDLES[1]);
  const [isSubscription, setIsSubscription] = useState(false);
  const [showAddedAnimation, setShowAddedAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { addToCart } = useCart();

  const basePrice = selectedBundle.price;
  const subscriptionDiscount = 0.15; // 15% off for subscription
  const pricePerUnit = isSubscription ? basePrice * (1 - subscriptionDiscount) : basePrice;
  const totalPrice = pricePerUnit.toFixed(2);
  const savings = isSubscription ? (basePrice * subscriptionDiscount).toFixed(2) : '0.00';

  const handleAddToCart = () => {
    addToCart({
      name: 'HIIT Hydration',
      flavor: selectedFlavor.name,
      sachets: selectedBundle.sachets,
      price: selectedBundle.price,
      isSubscription
    });
    
    // Show success animation
    setShowAddedAnimation(true);
    setTimeout(() => setShowAddedAnimation(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      {/* Add to Cart Success Animation */}
      <AnimatePresence>
        {showAddedAnimation && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 size={24} className="text-green-400" />
            <span className="text-lg font-medium">Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Hero */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div 
              className="aspect-square rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: `${selectedFlavor.color}20` }}
            >
              <div className="text-center">
                <div 
                  className="text-9xl mb-4"
                  style={{ color: selectedFlavor.color }}
                >
                  💧
                </div>
                <p className="text-3xl font-bold">{selectedFlavor.name}</p>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-2 tracking-tight text-[32px]">Hydration<span className="font-bold italic">+</span> Sachets</h1>
            <p className="text-lg text-gray-600 mb-4">
              Creatine + Electrolytes
            </p>
            
            <div className="mb-2">
              <span className="text-3xl font-bold">${pricePerUnit.toFixed(2)}</span>
              {isSubscription && (
                <span className="ml-2 text-lg text-gray-400 line-through">
                  ${basePrice.toFixed(2)}
                </span>
              )}
            </div>
            {isSubscription && (
              <p className="text-green-600 font-medium mb-4 text-sm">
                Save 15% with subscription
              </p>
            )}

            {/* Bundle Selection */}
            <div className="mb-3">
              <label className="block text-sm mb-2">Select Bundle</label>
              <div className="grid grid-cols-2 gap-2">
                {BUNDLES.map((bundle) => (
                  <button
                    key={bundle.sachets}
                    onClick={() => setSelectedBundle(bundle)}
                    className={`relative py-2 px-3 rounded-lg border-2 transition-all ${
                      selectedBundle.sachets === bundle.sachets
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-sm">{bundle.label}</div>
                      <div className="text-xs opacity-80">${bundle.price}</div>
                    </div>
                    {bundle.popular && (
                      <div className={`absolute -top-1.5 -right-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedBundle.sachets === bundle.sachets
                          ? 'bg-white text-black'
                          : 'bg-black text-white'
                      }`}>
                        Popular
                      </div>
                    )}
                    {bundle.bestValue && (
                      <div className={`absolute -top-1.5 -right-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedBundle.sachets === bundle.sachets
                          ? 'bg-white text-black'
                          : 'bg-black text-white'
                      }`}>
                        Best Value
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Subscription Toggle */}
            <div className="mb-3">
              <button
                onClick={() => setIsSubscription(!isSubscription)}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  isSubscription
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="font-bold text-sm mb-0.5">Subscribe & Save 15%</div>
                    <div className="text-xs text-gray-600">Delivered monthly, cancel anytime</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSubscription ? 'bg-black border-black' : 'border-gray-300'
                  }`}>
                    {isSubscription && <Check size={14} className="text-white" />}
                  </div>
                </div>
              </button>
            </div>

            {/* Flavor Selection */}
            <div className="mb-3">
              <label className="block text-sm mb-2">Select Flavor</label>
              <div className="flex gap-2">
                {FLAVORS.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all text-sm ${
                      selectedFlavor.id === flavor.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {flavor.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white py-3 rounded-full text-base flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mb-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
              {isSubscription ? 'Subscribe' : 'Add to Cart'} - ${totalPrice}
            </motion.button>

            {isSubscription && parseFloat(savings) > 0 && (
              <p className="text-center text-green-600 font-medium mb-1 text-xs">
                You're saving ${savings}!
              </p>
            )}
            <p className="text-center text-gray-600 text-xs mb-3">Free shipping on orders over $50</p>

            {/* Collapsible Tabs */}
            <div className="space-y-1.5">
              {/* Description Tab */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === 'description' ? null : 'description')}
                  className="w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-sm">Description</span>
                  <motion.div
                    animate={{ rotate: activeTab === 'description' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeTab === 'description' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 py-2 bg-gray-50 text-gray-700 text-xs border-t border-gray-200">
                        HIIT Hydration combines premium creatine monohydrate with a scientifically formulated blend of essential electrolytes. Designed for athletes who demand peak performance, each sachet delivers 5g of pure creatine plus optimal hydration support. Perfect for high-intensity training, endurance sports, and daily performance optimization.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ingredients Tab */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === 'ingredients' ? null : 'ingredients')}
                  className="w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-sm">Ingredients</span>
                  <motion.div
                    animate={{ rotate: activeTab === 'ingredients' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeTab === 'ingredients' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 py-2 bg-gray-50 text-gray-700 text-xs border-t border-gray-200">
                        <div className="space-y-0.5">
                          <p><strong>Creatine Monohydrate:</strong> 5g</p>
                          <p><strong>Sodium:</strong> 1000mg</p>
                          <p><strong>Potassium:</strong> 230mg</p>
                          <p><strong>Magnesium:</strong> 70mg</p>
                          <p><strong>Coconut Powder:</strong> 625mg</p>
                          <p className="mt-1.5 pt-1.5 border-t border-gray-300">HASTA approved and tested to be free from banned substances. Natural flavoring, no artificial colors.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shipping Tab */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === 'shipping' ? null : 'shipping')}
                  className="w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-sm">Shipping</span>
                  <motion.div
                    animate={{ rotate: activeTab === 'shipping' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeTab === 'shipping' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 py-2 bg-gray-50 text-gray-700 text-xs border-t border-gray-200">
                        <div className="space-y-0.5">
                          <p><strong>Free Shipping:</strong> On all orders over $50</p>
                          <p><strong>Standard Delivery:</strong> 3-5 business days</p>
                          <p><strong>Express Shipping:</strong> 1-2 business days (additional fee)</p>
                          <p className="mt-1.5 pt-1.5 border-t border-gray-300">All orders are processed within 24 hours. You'll receive tracking information once your order ships.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ingredient Ticker Banner */}
        <div className="bg-black py-4 mb-20 -mx-6">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-32 items-center"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Render text multiple times for seamless loop */}
              {Array(10).fill(null).map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-white whitespace-nowrap text-lg font-medium"
                >
                  1000mg Sodium • 230mg Potassium • 70mg Magnesium • 5g Creatine
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770664612843-b44e26070024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwaW50ZW5zZSUyMHdvcmtvdXQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzI5MzgxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Athlete training intensely"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text on the right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-8 tracking-tight text-[24px] text-right">When to Use Hydration<span className=""> </span>Sachets</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-right text-[15px]">
                  HIIT Hydration is designed to support fluid balance and performance during high-intensity training and demanding physical activity. It is particularly beneficial during intense workouts, endurance sessions, competitions, or in hot environments where significant fluid and electrolyte loss can occur.
                </p>
                <p className="text-gray-700 leading-relaxed text-right text-[15px]">
                  It can also be used daily in the morning as a convenient way to support baseline hydration while maintaining a consistent intake of creatine and essential electrolytes to support strength, performance, and recovery.
                </p>
                <p className="text-gray-700 leading-relaxed text-right text-[15px]">
                  Maintaining proper hydration and electrolyte balance plays an important role in supporting endurance, strength output, and recovery during repeated high-intensity efforts.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Ingredient Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center tracking-tight">Ingredient Profile</h2>
          <div className="max-w-6xl mx-auto">
            {/* Top Row - 3 items */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {INGREDIENTS.slice(0, 3).map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{ingredient.name}</h3>
                      <span className="text-lg font-bold text-gray-600">{ingredient.amount}</span>
                    </div>
                    <p className="text-gray-600">{ingredient.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Row - 2 items centered */}
            <div className="flex justify-center gap-8">
              {INGREDIENTS.slice(3, 5).map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full md:w-[calc(33.333%-1rem)]"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{ingredient.name}</h3>
                      <span className="text-lg font-bold text-gray-600">{ingredient.amount}</span>
                    </div>
                    <p className="text-gray-600">{ingredient.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight text-center">
            How to Use
          </h2>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-gray-600 leading-relaxed mb-3">Mix one sachet with 500-750ml of cold water. Shake well and enjoy before, during, or after your workout.</p>
            <p className="text-gray-600 leading-relaxed">
              For best results, consume daily to maintain optimal hydration and creatine levels.
            </p>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-lg text-left">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}