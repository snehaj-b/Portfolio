import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/Sneha.jpeg"
                alt="Workspace"
                className="w-full h-[500px] object-cover transition-all duration-500"
                //grayscale group-hover:grayscale-0
                whileHover={{ scale: 1.05 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-300 to-white rounded-full blur-3xl opacity-40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Animated border */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-white to-gray-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                About
              </motion.span>{' '}
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                Me
              </motion.span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                "I’m a pre-final year Computer Engineering student at Pune Institute of Computer Technology with a CGPA of 9.17, building digital products where engineering meets design. I work as a full-stack MERN developer and designer, focused on creating clean, scalable, and user-centric web experiences.",
                "My work spans React applications, WordPress & WooCommerce websites, and brand design — including logos and graphic design. I’ve handled multiple production websites across both React and WordPress ecosystems, and I work comfortably with MongoDB, MySQL, and PostgreSQL to build reliable, well-structured systems.",
                "Alongside development, I’ve had 20+ magazine publications in creative and design work, which shaped my visual thinking and attention to detail. With 2+ years of hands-on experience, I focus on building things that are purposeful, clean, and thoughtfully engineered.",
                "When I’m not working, I enjoy reading and long walks — simple spaces that help me reset and think clearly about what I want to build next."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {[
                { value: '5+', label: 'Projects' },
                { value: '1.5+', label: 'Years Exp' },
                { value: '4+', label: 'Happy Clients' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      delay: 0.8 + i * 0.1,
                      type: 'spring',
                      stiffness: 200,
                      damping: 10 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}