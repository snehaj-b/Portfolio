import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(200, 200, 200, 0.15) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      {/* Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-gray-400 mb-4 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                SOFTWARE DEVELOPER | GRAPHIC DESIGNER | BRAND ANALYST
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                HEY I AM{' '}
                <span
                  className="text-black"
                  style={{
                    WebkitTextStroke: '2px white',
                    paintOrder: 'stroke fill',
                  }}
                >
                 SNEHA
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Thank you For stopping by. I build websites, design brands, and create interactive 3D experiences — heres one of my design which i made on spline please feel free to play around.
              </motion.p>

              <motion.div
                className="flex gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SPLINE */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[550px] flex justify-center items-center">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <Spline
                scene="https://prod.spline.design/Yp4HgRAX0pjzR04d/scene.splinecode"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
