"use client";
import React from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

export default function MobileNav() {
  const [mobileNavbar, toggleMobileNavbar] = useCycle(false, true);

  return (
    <nav className="px-8">
      <div>
        <motion.button
          animate={mobileNavbar ? "open" : "closed"}
          onClick={() => toggleMobileNavbar()}
          className="flex flex-col space-y-2"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="block h-[0.125rem] w-8 bg-slate-400/75"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="block h-[0.125rem] w-8 bg-slate-400/75"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -12 },
            }}
            className="block h-[0.125rem] w-8 bg-slate-400/75"
          />
        </motion.button>
      </div>
    </nav>
  );
}
