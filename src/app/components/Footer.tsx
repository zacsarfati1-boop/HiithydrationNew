import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your email service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="py-20 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h3 className="mb-2 font-bold text-[96px]">HIIT Hydration</h3>
            <p className="text-gray-600 mb-6">Elevate your performance</p>
            
            {/* Email Signup */}
            <form onSubmit={handleSubmit} className="max-w-sm">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-black text-white text-sm rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  {submitted ? 'Done!' : 'Subscribe'}
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Youtube size={24} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600"
        >
          <p>© 2026 HIIT Hydration. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}