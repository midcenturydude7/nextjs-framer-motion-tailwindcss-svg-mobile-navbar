"use client";
import React from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

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
      <AnimatePresence>
        {mobileNavbar && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              key="mobile-navbar"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                  type: "spring",
                  bounce: 0.099,
                },
                closed: {
                  x: "100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="container fixed inset-0 mx-auto flex flex-col items-center justify-center space-y-10 bg-slate-100/80 p-6"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link #1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link #2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link #3
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="h-px w-full bg-slate-500/10"
              />
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center justify-center space-x-8">
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                  </li>
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                  </li>
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}
