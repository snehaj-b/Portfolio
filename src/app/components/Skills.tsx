import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Code2, Palette, Zap, Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  { name: 'E-Commerce Site', level: 95, icon: Code2, color: 'from-gray-400 to-white' },
  { name: 'UI/UX Design', level: 98, icon: Palette, color: 'from-white-500 to-yellow-300' },
  { name: 'Branding', level: 92, icon: Zap, color: 'from-white to-whitw-400' },
  { name: 'Frontend Development', level: 85, icon: Database, color: 'from-whitw-300 to-white-500' },
  { name: 'Web Technologies', level: 90, icon: Globe, color: 'from-white-200 to-white' },
  { name: 'Graphic Designing', level: 92, icon: Smartphone, color: 'from-white-400 to-white-200' },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Animated radial gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Technology logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS', 'MongoDB', 'PostgreSQL', 'WordPress', 'WooCommerce', 'Git'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                }}
                className="relative px-6 py-3 bg-zinc-900 rounded-lg border border-zinc-800 text-white hover:border-white hover:bg-white hover:text-black transition-all cursor-pointer group"
              >
                <motion.span
                  className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const [progress, setProgress] = useState(0);
  const Icon = skill.icon;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 200 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-3">
        <motion.div
          className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} relative overflow-hidden`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 2, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          />
          <Icon className="w-6 h-6 text-black relative z-10" />
        </motion.div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <motion.span 
              className="text-white font-semibold"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {skill.name}
            </motion.span>
            <motion.span 
              className="text-gray-400 font-bold"
              key={progress}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {progress}%
            </motion.span>
          </div>
        </div>
      </div>
      
      <div className="relative h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
        <motion.div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-white/40"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
          />
        </motion.div>

        {/* Pulsing glow at the end of progress bar */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full blur-sm"
          style={{ left: `${progress}%` }}
          initial={{ opacity: 0 }}
          animate={isInView ? { 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          } : {}}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            delay: 0.2 + index * 0.1 + 1,
          }}
        />
      </div>
    </motion.div>
  );
}