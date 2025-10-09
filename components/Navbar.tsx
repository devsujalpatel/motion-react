"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-40">
      <nav className="mx-auto flex max-w-xl rounded-full bg-gray-100 px-2 py-2">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={item.title}
            href={item.url}
            className="group relative w-full py-3 text-center text-base text-neutral-500"
          >
            <span className="relative z-20 text-neutral-500 transition-all duration-200 group-hover:text-neutral-300">
              {item.title}
            </span>
            {hovered === idx && (
              <motion.div
                layoutId={`hover`}
                className="absolute inset-0 rounded-full bg-neutral-900 py-3"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

type NavItem = {
  title: string;
  url: string;
};

const navItems: NavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];
