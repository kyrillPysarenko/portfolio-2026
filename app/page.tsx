'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom easing for "snap" feel
  },
};

function Section({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.div 
      variants={item}
      className={`border-t-2 border-black pt-4 pb-12 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <h3 className="font-bold text-lg uppercase tracking-widest md:col-span-1">{title}</h3>
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-start z-50 mix-blend-difference text-white"
      >
        <h1 className="text-xl font-bold uppercase tracking-tighter">kyrill.dev</h1>
        <div className="text-sm font-bold uppercase tracking-widest">EST. 2026</div>
      </motion.header>

      <div className="pt-32 md:pt-48 px-6 md:px-12 max-w-[1920px] mx-auto">
        
        {/* Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 md:mb-48"
        >
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase break-words">
            DESIGNING<br />
            THE<br />
            FUTURE
          </h2>
          <p className="mt-8 text-xl md:text-3xl font-medium max-w-2xl leading-tight">
            Creating digital experiences that bridge the gap between imagination and reality.
          </p>
        </motion.section>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-0"
        >
          {/* Philosophy Section */}
          <Section title="Philosophy">
            <p className="text-2xl md:text-4xl font-bold uppercase leading-tight mb-8">
              Function over form. Radical simplicity. Uncompromising quality.
            </p>
            <p className="text-lg font-medium max-w-xl">
              I build systems that scale. My approach is rooted in the belief that the best design is invisible, and the best code is deleted.
            </p>
          </Section>

          <Section title="Selected Work">
            <div className="space-y-8">
              <div className="group border-b-2 border-black pb-8 cursor-pointer">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-4xl md:text-6xl font-bold uppercase group-hover:italic transition-all">Architecture</h4>
                  <span className="text-sm font-mono">01</span>
                </div>
              </div>
              <div className="group border-b-2 border-black pb-8 cursor-pointer">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-4xl md:text-6xl font-bold uppercase group-hover:italic transition-all">Development</h4>
                  <span className="text-sm font-mono">02</span>
                </div>
              </div>
              <div className="group border-b-2 border-black pb-8 cursor-pointer">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-4xl md:text-6xl font-bold uppercase group-hover:italic transition-all">Systems</h4>
                  <span className="text-sm font-mono">03</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Location / Status */}
          <Section title="Status">
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest mb-2">Location</span>
                <p className="text-2xl font-bold uppercase">Based in Berlin / World</p>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest mb-2">Availability</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                  <p className="text-2xl font-bold uppercase">Open for Select Projects</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Connect */}
          <Section title="Connect" className="border-b-2 border-black">
             <div className="flex gap-4">
                <a href="https://github.com/kyrillPysarenko" target="_blank" className="text-xl font-bold uppercase hover:underline decoration-2 underline-offset-4">
                  GitHub <ArrowUpRight className="inline w-5 h-5 mb-1" />
                </a>
                <a href="https://twitter.com" target="_blank" className="text-xl font-bold uppercase hover:underline decoration-2 underline-offset-4">
                  Twitter <ArrowUpRight className="inline w-5 h-5 mb-1" />
                </a>
             </div>
          </Section>

        </motion.div>

        <footer className="py-24 flex justify-between items-end">
          <div>
            <p className="text-[10vw] font-bold leading-none tracking-tighter select-none">KYRILL</p>
          </div>
          <div className="text-right">
             <p className="font-bold uppercase text-sm">Based in Berlin / World</p>
             <p className="font-bold uppercase text-xs mt-2">© 2026 Kyrill Pysarenko.</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
