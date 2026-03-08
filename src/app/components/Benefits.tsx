import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const highlights = [
  '5g Creatine Monohydrate per serving',
  '1000mg Sodium',
  '230mg Potassium',
  '70mg Magnesium',
  '625mg Coconut Powder',
  'Zero Added Sugar',
  'No Artificial Colors or Flavors',
  'Vegan & Gluten-Free',
  'Third-Party Tested',
  'HASTA Approved'
];

const benefits = [
  {
    title: 'Enhanced Muscle Performance',
    description: 'Creatine boosts ATP production for explosive power and strength during high-intensity training'
  },
  {
    title: 'Superior Hydration',
    description: 'Balanced electrolytes restore minerals lost through sweat for optimal fluid balance'
  },
  {
    title: 'Faster Recovery',
    description: 'Reduce muscle fatigue and recover faster between sets and workouts'
  },
  {
    title: 'Improved Endurance',
    description: 'Stay hydrated longer and push through intense HIIT sessions with sustained energy'
  },
  {
    title: 'Clean Energy',
    description: 'No crash, no jitters—just pure, effective hydration and performance support'
  },
  {
    title: 'Daily Support',
    description: 'Perfect for training days or everyday hydration needs'
  }
];

export function Benefits() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Product Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl mb-12">Product Highlights</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-lg">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Benefits</h2>
          <p className="text-xl text-gray-600">Everything you need to maximize your performance</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="border-l-4 border-black pl-8 py-4"
              >
                <h3 className="text-2xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}