import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    image: 'https://images.unsplash.com/photo-1741520504652-27c2a6c0015e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXRpb24lMjBlbGVjdHJvbHl0ZXMlMjBzcG9ydHMlMjBkcmlua3xlbnwxfHx8fDE3NzI5MzM4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Optimal Hydration',
    description: 'Our advanced electrolyte blend delivers 1000mg sodium, 230mg potassium, and 70mg magnesium to keep you hydrated longer and performing at your peak during intense training sessions.'
  },
  {
    image: 'https://images.unsplash.com/photo-1768161680813-615df885ff82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGluZSUyMHBvd2RlciUyMHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcyOTMzODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: '5g Creatine Per Serving',
    description: 'Each sachet contains a full clinical dose of 5g creatine monohydrate, scientifically proven to enhance strength, power output, and muscle growth for athletes at every level.'
  },
  {
    image: 'https://images.unsplash.com/photo-1764622078331-78297ad8f6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNpbGhvdWV0dGUlMjBmaXRuZXNzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcyOTM0MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Clean Formula',
    description: 'HASTA certified and tested free from banned substances. No artificial colors, zero sugar, naturally flavored with premium ingredients you can trust for competition-level purity.'
  }
];

export function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-[24px] p-[0px] mx-[0px] mt-[0px] mb-[3px]">Key Benefits</h2>
          
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl mb-6 aspect-square"
              >
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-2xl mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}