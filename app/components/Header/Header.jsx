"use client";
import React from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

export default function Header() {
  return (
    <header className="flex border-b-[1px] border-slate-300/10 py-8 shadow-2xl">
      <div className="flex-grow px-8">Logo</div>
      <div className="px-8">
        <button className="flex flex-col space-y-2">
          <span className="block h-[0.125rem] w-8 bg-slate-400/75" />
          <span className="block h-[0.125rem] w-8 bg-slate-400/75" />
          <span className="block h-[0.125rem] w-8 bg-slate-400/75" />
        </button>
      </div>
    </header>
  );
}
