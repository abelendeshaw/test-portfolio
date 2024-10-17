"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}