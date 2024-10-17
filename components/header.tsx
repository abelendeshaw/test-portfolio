"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          JD
        </motion.div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" href="#projects">Projects</Button></li>
            <li><Button variant="ghost" href="#skills">Skills</Button></li>
            <li><Button variant="ghost" href="#contact">Contact</Button></li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;