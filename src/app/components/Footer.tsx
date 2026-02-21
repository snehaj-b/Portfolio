import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Sneha Buktare
            </motion.h3>
            <p className="text-gray-400">
              Creative developer crafting immersive digital experiences
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5, color: '#ffffff' }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform, i) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5, color: '#ffffff' }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="pt-8 border-t border-white/10 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>© 2026 Sneha. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}