import { motion } from 'motion/react';
import { Beaker, Droplet, Zap, Battery, Leaf, ShieldCheck } from 'lucide-react';

const INGREDIENTS = [
  {
    name: 'Creatine Monohydrate',
    amount: '5g',
    icon: Zap,
    description: 'The gold standard for muscle energy and performance. Creatine helps regenerate ATP (your body\'s energy currency), supporting explosive power, strength gains, and faster recovery between sets.',
    benefits: [
      'Increases muscle strength and power output',
      'Enhances high-intensity exercise performance',
      'Supports muscle growth and recovery',
      'Improves cognitive function and mental clarity'
    ]
  },
  {
    name: 'Sodium',
    amount: '1000mg',
    icon: Droplet,
    description: 'The most critical electrolyte for hydration. Sodium regulates fluid balance, enables nerve signals, and supports muscle contractions during intense training.',
    benefits: [
      'Maintains optimal hydration levels',
      'Prevents muscle cramps and fatigue',
      'Supports nerve function and muscle contractions',
      'Helps regulate blood pressure and volume'
    ]
  },
  {
    name: 'Potassium',
    amount: '230mg',
    icon: Battery,
    description: 'Essential for muscle function and cellular hydration. Potassium works synergistically with sodium to maintain electrolyte balance and support cardiovascular health.',
    benefits: [
      'Regulates fluid balance within cells',
      'Supports healthy muscle contractions',
      'Aids in nerve signal transmission',
      'Helps maintain heart rhythm and function'
    ]
  },
  {
    name: 'Magnesium',
    amount: '70mg',
    icon: Beaker,
    description: 'A vital mineral involved in over 300 enzymatic reactions. Magnesium supports energy production, protein synthesis, and muscle relaxation after contraction.',
    benefits: [
      'Supports energy metabolism and ATP production',
      'Reduces muscle tension and promotes recovery',
      'Enhances protein synthesis for muscle growth',
      'Supports bone health and strength'
    ]
  },
  {
    name: 'Coconut Water Powder',
    amount: '625mg',
    icon: Leaf,
    description: 'Nature\'s sports drink. Coconut water powder provides natural electrolytes and trace minerals, enhancing the overall hydration profile with a clean, refreshing base.',
    benefits: [
      'Provides natural source of electrolytes',
      'Contains essential trace minerals',
      'Supports natural hydration',
      'Adds clean, refreshing flavor profile'
    ]
  }
];

export function SciencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Science          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Peak hydration and performance, simplified into one convenient sachet. 
            Every ingredient is precisely dosed based on clinical research to deliver 
            maximum results.
          </p>
        </motion.div>

        {/* The Formula */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-12 mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-6">One Sachet, Complete Performance</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We've eliminated the guesswork. No need to mix multiple powders, measure doses, 
            or carry multiple containers. Each sachet contains the perfect ratio of creatine 
            and electrolytes to support your training, competition, or active lifestyle.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">5g</div>
              <div className="text-sm text-gray-600">Creatine</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">1000mg</div>
              <div className="text-sm text-gray-600">Sodium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">230mg</div>
              <div className="text-sm text-gray-600">Potassium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">70mg</div>
              <div className="text-sm text-gray-600">Magnesium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">625mg</div>
              <div className="text-sm text-gray-600">Coconut Powder</div>
            </div>
          </div>
        </motion.div>

        {/* Ingredients Breakdown */}
        <div className="space-y-16">
          {INGREDIENTS.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-black text-white p-4 rounded-2xl">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-3xl font-bold">{ingredient.name}</h3>
                      <span className="text-2xl font-bold text-gray-400">{ingredient.amount}</span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                </div>

                <div className="pl-20">
                  <h4 className="font-bold text-lg mb-4">Key Benefits:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {ingredient.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-black mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why This Combination Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Why This Combination Works</h2>
          <div className="space-y-6 text-left">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Synergistic Effect</h3>
              <p className="text-gray-700 leading-relaxed">
                Creatine requires proper hydration to be fully effective. By combining creatine 
                with the exact electrolyte ratio your body needs, we ensure optimal absorption 
                and utilization. The result? Better performance, faster recovery, and no bloating.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Clinical Dosing</h3>
              <p className="text-gray-700 leading-relaxed">
                Every ingredient is dosed at levels proven effective in peer-reviewed research. 
                5g of creatine is the gold standard maintenance dose, while our electrolyte blend 
                matches what elite athletes lose during intense training sessions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Ultimate Convenience</h3>
              <p className="text-gray-700 leading-relaxed">
                One sachet gives you everything you need. No measuring, no mixing multiple products, 
                no confusion. Just rip, mix, and fuel your performance. Perfect for the gym, 
                competition, travel, or everyday training.
              </p>
            </div>
          </div>
        </motion.div>

        {/* HASTA Certification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <ShieldCheck className="w-8 h-8" />
            <h3 className="text-xl font-bold">HASTA Certified</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            HIIT Hydration is HASTA approved, meaning every batch is tested to ensure it's free 
            from banned substances. Trusted by professional athletes and sports organizations worldwide.
          </p>
        </motion.div>
      </section>
    </div>
  );
}