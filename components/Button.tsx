"use client";
import { motion } from "motion/react";
import React from "react";

export const Button = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="relative group text-neutral-400 outline-none px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_index,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer [perspective::1000px] [transform-style"
    >
      Follow Me
      <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
    </motion.button>
  );
};
