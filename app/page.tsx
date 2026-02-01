'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, ArrowUpRight, Github, Twitter, Code2, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function Card({ className, children, title, icon: Icon }: { className?: string; children?: React.ReactNode; title?: string; icon?: any }) {
  return (
    <motion.div
      variants={item}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6 hover:bg-zinc-900 transition-colors duration-300",
        className
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-4">
          {Icon && <Icon className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />}
          {title && <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{title}</span>}
        </div>
        <div className="relative z-10">{children}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto flex flex-col">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-12 md:mb-20"
      >
        <h1 className="text-xl font-bold tracking-tighter">kyrill.dev</h1>
        <div className="text-sm font-mono text-zinc-500">EST. 2026</div>
      </motion.header>

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Builder.<br />
          Explorer.<br />
          Nomad.
        </h2>
      </motion.section>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto md:h-[600px]"
      >
        {/* Builder Card - Large */}
        <Card className="md:col-span-2 md:row-span-2" title="Core" icon={Terminal}>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Full Stack Architecture</h3>
            <p className="text-zinc-400 leading-relaxed">
              Crafting robust digital experiences with Next.js, TypeScript, and modern AI integrations. 
              Obsessed with performance and clean code.
            </p>
            <div className="font-mono text-xs text-zinc-600 bg-black/50 p-3 rounded-lg border border-zinc-800/50 mt-4">
              <div className="flex gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <p><span className="text-purple-400">const</span> stack = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'AI'</span>];</p>
            </div>
          </div>
        </Card>

        {/* AI Explorer - Tall */}
        <Card className="md:col-span-1 md:row-span-2" title="Research" icon={Cpu}>
          <div className="h-full flex flex-col justify-end">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <Zap className="w-32 h-32" />
             </div>
             <h3 className="text-xl font-bold mb-2">AI Native</h3>
             <p className="text-sm text-zinc-400">
               Pushing boundaries with LLMs and generative agents. The future is automated.
             </p>
          </div>
        </Card>

        {/* Digital Nomad - Small */}
        <Card className="md:col-span-1 md:row-span-1" title="Location" icon={Globe}>
           <div className="flex items-center justify-between">
             <span className="font-mono text-xl">Anywhere</span>
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
           </div>
           <p className="text-xs text-zinc-500 mt-2">Currently: Base 1</p>
        </Card>

        {/* Socials - Small */}
        <div className="md:col-span-1 md:row-span-1 grid grid-cols-2 gap-4">
          <motion.a 
            variants={item}
            href="https://github.com/kyrillPysarenko" 
            target="_blank" 
            className="bg-zinc-900/50 rounded-3xl border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            variants={item}
            href="https://twitter.com" // Placeholder
            target="_blank" 
            className="bg-zinc-900/50 rounded-3xl border border-zinc-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
        </div>

      </motion.div>

      <footer className="mt-20 py-6 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>&copy; 2026 Kyrill Pysarenko. Built with Next.js & AI.</p>
      </footer>
    </main>
  );
}
