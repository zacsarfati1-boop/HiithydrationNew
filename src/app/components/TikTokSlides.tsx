import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1764426445457-59169e244cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHBlcnNvbiUyMGRyaW5raW5nJTIwd2F0ZXIlMjBneW18ZW58MXx8fHwxNzcyODYzMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    username: '@fitnessjunkie',
    caption: 'Game changer for my workouts! 💪',
    likes: '23.4K',
    comments: '1.2K'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1572565408388-cdd3afe23e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZml0bmVzcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzI4NjMxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    username: '@athletepro',
    caption: 'Finally, hydration that tastes good',
    likes: '18.9K',
    comments: '892'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1769462276401-34984555f883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGF0aGxldGUlMjB0cmFpbmluZyUyMG91dGRvb3JzfGVufDF8fHx8MTc3Mjg2MzE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    username: '@trainingdaily',
    caption: 'Best recovery drink on the market',
    likes: '31.2K',
    comments: '2.1K'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1770970716469-4b32abc0a577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5mbHVlbmNlciUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3Mjg2MzE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    username: '@gymlifestyle',
    caption: 'Can\'t live without this anymore 🔥',
    likes: '27.6K',
    comments: '1.5K'
  }
];

export function TikTokSlides() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Community Love</h2>
          <p className="text-xl text-gray-600">See what people are saying</p>
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...slides, ...slides].map((slide, index) => (
              <motion.div
                key={`${slide.id}-${index}`}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-80 bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-[9/16]">
                  <ImageWithFallback
                    src={slide.image}
                    alt={slide.username}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* TikTok-style overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium mb-2">{slide.username}</p>
                    <p className="text-white/90">{slide.caption}</p>
                  </div>
                  
                  {/* TikTok-style sidebar */}
                  <div className="absolute right-4 bottom-24 flex flex-col gap-6 text-white">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="flex flex-col items-center"
                    >
                      <Heart size={28} fill="white" />
                      <span className="text-xs mt-1">{slide.likes}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="flex flex-col items-center"
                    >
                      <MessageCircle size={28} />
                      <span className="text-xs mt-1">{slide.comments}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="flex flex-col items-center"
                    >
                      <Share2 size={28} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
