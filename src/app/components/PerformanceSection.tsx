import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PerformanceSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 leading-tight text-center text-[32px]">
              Built for high-intensity performance.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-center text-[15px]">
              HIIT Hydration delivers a precise electrolyte blend of sodium, potassium, and magnesium, combined with 5g of creatine to support hydration, strength, and recovery in one streamlined formula.
            </p>
            <p className="text-gray-600 leading-relaxed text-center text-[13px]">
              Clean ingredients. Minimal sugar. Engineered for serious training.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770664612843-b44e26070024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBpbnRlbnNlJTIwd29ya291dCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjkzNDQyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="High-intensity training performance"
                className="w-full h-full object-cover rounded-[15px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
