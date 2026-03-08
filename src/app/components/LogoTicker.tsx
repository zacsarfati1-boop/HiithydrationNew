import { motion } from 'motion/react';

const LOGOS = [
  'Men\'s Health',
  'Runner\'s World',
  'GQ',
  'Sports Illustrated',
  'Stack',
  'Muscle & Fitness',
  'Outside Magazine',
  'ESPN'
];

export function LogoTicker() {
  return (
    <section className="rounded-[0px] bg-[#d9d9d9] mx-[1px] my-[0px] px-[19px] py-[0px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          
        </motion.div>

        <div className="relative overflow-hidden px-[0px] py-[12px]">
          {/* Gradient overlays */}
          
          

          {/* Scrolling logos */}
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Render logos twice for seamless loop */}
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-gray-400 whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
