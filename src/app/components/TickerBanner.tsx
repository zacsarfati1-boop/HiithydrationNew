import { motion } from 'motion/react';

const MESSAGES = [
  'ENGINEERED FOR PERFORMANCE',
  'ENGINEERED FOR PERFORMANCE',
  'ENGINEERED FOR PERFORMANCE',
  'ENGINEERED FOR PERFORMANCE',
  'ENGINEERED FOR PERFORMANCE',
];

export function TickerBanner() {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Render messages multiple times for seamless loop */}
        {[...MESSAGES, ...MESSAGES, ...MESSAGES, ...MESSAGES].map((message, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-xl font-bold tracking-wider uppercase"
          >
            {message}
          </div>
        ))}
      </motion.div>
    </div>
  );
}