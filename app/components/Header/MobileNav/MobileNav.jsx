"use client";
import React from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { menuSlide, slide } from "../../../lib/anim";
import Curve from "./Curve/Curve";

export default function MobileNav() {
  const [mobileNavbar, toggleMobileNavbar] = useCycle(false, true);

  return (
    <nav className="px-8">
      <div className="relative z-10">
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
      <AnimatePresence mode="wait">
        {mobileNavbar && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              key="mobile-navbar"
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed inset-0 flex h-full flex-col items-center justify-center space-y-10 bg-slate-100 p-6"
            >
              <div>
                <motion.ul
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="space-y-5 text-4xl text-slate-400/80"
                >
                  <li>
                    <a href="#">Link #1</a>
                  </li>
                  <li>
                    <a href="#">Link #2</a>
                  </li>
                  <li>
                    <a href="#">Link #3</a>
                  </li>
                </motion.ul>
              </div>
              <motion.div className="h-px w-full bg-slate-500/20" />
              <motion.div
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <motion.ul
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="flex items-center justify-center space-x-8"
                >
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                  </li>
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                  </li>
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                  </li>
                </motion.ul>
              </motion.div>
              <Curve />
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}
