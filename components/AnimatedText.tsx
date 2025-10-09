"use client";
import { useAnimate, motion, stagger } from "motion/react";
import React, { useEffect } from "react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "Welcome to F*** C***, The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.05),
      },
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);

  return (
    <div
      ref={scope}
      className="mx-auto max-w-4xl text-4xl font-bold text-white"
    >
      {/* <button
        className="absolute top-75 left-122 cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-white transition duration-200 outline-none active:scale-110"
        onClick={startAnimating}
      >
        What is FC?
      </button> */}
      {text.split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          style={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
