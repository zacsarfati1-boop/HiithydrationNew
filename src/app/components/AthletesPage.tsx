import { motion } from 'motion/react';

const ATHLETES = [
  {
    id: 1,
    name: 'Marcus Chen',
    sport: 'Professional Basketball',
    team: 'NBA Player',
    bio: 'Marcus has been dominating on the court for 8 years. HIIT Hydration keeps him at peak performance through grueling training sessions and back-to-back games. "The combination of creatine and electrolytes is a game-changer for my recovery and endurance."',
    imageUrl: 'https://images.unsplash.com/photo-1763219803356-35c685767c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXNrZXRiYWxsJTIwcGxheWVyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcyODkyNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Sophia Rodriguez',
    sport: 'CrossFit Athlete',
    team: 'CrossFit Games Competitor',
    bio: 'As a 5-time CrossFit Games competitor, Sophia pushes her body to the absolute limit. "HIIT Hydration is the only supplement I trust to keep me hydrated and strong through the most intense WODs. The creatine boost makes a real difference in my lifts."',
    imageUrl: 'https://images.unsplash.com/photo-1772450014685-369473acebc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHdvbWFuJTIwYXRobGV0ZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzcyODkyNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Jordan Taylor',
    sport: 'Professional Soccer',
    team: 'MLS Midfielder',
    bio: 'Jordan covers over 10km every match and needs optimal hydration to maintain performance. "I started using HIIT Hydration during preseason and immediately noticed improved stamina and recovery. It\'s now an essential part of my daily routine."',
    imageUrl: 'https://images.unsplash.com/photo-1680762377870-9ff8865f2b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2NjZXIlMjBwbGF5ZXIlMjBydW5uaW5nfGVufDF8fHx8MTc3Mjg5MjUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Aisha Okonkwo',
    sport: 'Olympic Track & Field',
    team: '400m Sprinter',
    bio: 'Aisha is a two-time Olympic medalist known for explosive power and speed. "The electrolyte blend in HIIT Hydration keeps me performing at my best, even in extreme heat. The added creatine supports my power output when it matters most."',
    imageUrl: 'https://images.unsplash.com/photo-1706736828642-17dec58ed7e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0cmFjayUyMHNwcmludGVyJTIwYXRobGV0ZXxlbnwxfHx8fDE3NzI4OTI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: 'Devon Martinez',
    sport: 'Professional MMA',
    team: 'UFC Welterweight',
    bio: 'Training for fights requires intense cardio and strength work. "HIIT Hydration helps me maintain my weight while staying properly hydrated and fueled. The convenience of having both creatine and electrolytes in one product saves me time and money."',
    imageUrl: 'https://images.unsplash.com/photo-1765303193537-ae41f1a3720f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBmaWdodGVyJTIwdHJhaW5pbmclMjBib3hpbmd8ZW58MXx8fHwxNzcyODkyNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    name: 'Emma Larsson',
    sport: 'Professional Triathlete',
    team: 'Ironman Champion',
    bio: 'Emma competes in some of the world\'s most demanding endurance events. "During long training days, HIIT Hydration keeps me going. The electrolyte profile is perfectly balanced, and the creatine helps with muscle preservation during extended cardio sessions."',
    imageUrl: 'https://images.unsplash.com/flagged/photo-1574999917270-904fd49b5f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlhdGhsZXRlJTIwd29tYW4lMjBjeWNsaW5nJTIwcnVubmluZ3xlbnwxfHx8fDE3NzI4OTI1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

function AthleteCard({ athlete, index }: { athlete: typeof ATHLETES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={athlete.imageUrl}
          alt={`${athlete.name} - ${athlete.sport}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-2">{athlete.name}</h3>
        <p className="text-xl text-gray-600 mb-1">{athlete.sport}</p>
        <p className="text-lg text-gray-500 mb-6">{athlete.team}</p>
        <p className="text-lg text-gray-700 leading-relaxed italic">
          "{athlete.bio}"
        </p>
      </div>
    </motion.div>
  );
}

export function AthletesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            HIIT Athletes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Meet the elite athletes who trust HIIT Hydration to fuel their performance and push their limits every day
          </p>
        </motion.div>

        {/* Athletes Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {ATHLETES.map((athlete, index) => (
            <AthleteCard key={athlete.id} athlete={athlete} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gray-50 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
            Train Like a Champion
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our athletes in experiencing the difference that optimal hydration and performance nutrition can make
          </p>
          <motion.a
            href="/product"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-12 py-6 rounded-full text-lg hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}