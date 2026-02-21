import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mammas Hair / E-Commerce Site',
    description: 'A modern e-commerce solution with real-time inventory and seamless checkout and payment integration',
    image: '/Mamma_Hair.png',
    tags: ['WooCommerce', 'WordPress', 'RazorPay', 'ShipRocket', 'MySql', 'Elementor', 'HTML', 'CSS'],
    liveUrl: 'https://mammashair.com',   // change if needed
  },
  {
    id: 2,
    title: 'CIOMOGUL / UI/UX Design',
    description: 'Played a key role in shaping the visual design of the brand website, focusing on clarity, usability, and brand consistency.',
    image: '/ciomogul.png',
    tags: ['UI/UX', 'Frontend Development', 'Web Designing', 'Logo Designing', 'React', 'PostgreSql' ,'Brand Design', 'WordPress'],
    liveUrl: 'https://theciomogul.com',
  },
  {
    id: 3,
    title: 'Graphic Designing',
    description: 'Designed 5+ brand logos and 20+ digital magazines',
    image: 'https://images.unsplash.com/photo-1508745453110-c69ab4be30cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Canva', 'Adobe Illustrator', 'Photoshop', 'Inkscape', 'Logo Designing', 'Branding', 'Package Designing'],
    liveUrl: 'https://www.theciomogul.com/magazines' ,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
      
      {/* Animated background lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
          style={{
            top: `${20 + i * 15}%`,
            left: 0,
            right: 0,
          }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
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
            Featured Work
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Some of my recent projects that I'm proud of
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover -0 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover overlay with links */}
          <motion.div
            className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="w-5 h-5 text-black" />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: -180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="w-5 h-5 text-black" />
              </motion.a>
            )}
          </motion.div>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3 
            className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          <motion.p 
            className="text-gray-400 mb-4"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />
      </motion.div>
    </motion.div>
  );
}