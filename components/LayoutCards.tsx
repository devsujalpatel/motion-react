import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion } from "motion/react";

const useOutSideClick = (callBack: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callBack();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return ref;
};

export const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutSideClick(() => setCurrent(null));

  return (
    <div className="relative min-h-screen bg-gray-100 py-20">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-10 bg-black/50 backdrop-blur-md"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[600px] w-90 rounded-2xl border border-neutral-200 bg-white p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="aspect-square h-82 rounded-xl"
          />
          <motion.div
            layoutId={`card-content-${current.title}`}
            className="flex flex-col items-start justify-between"
          >
            <div className="flex w-full items-start justify-between gap-2 py-4">
              <div className="flex flex-col items-start">
                <motion.h2
                  layoutId={`card-h2-${current.title}`}
                  className="text-md font-bold text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-p-${current.title}`}
                  className="text-normal text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="tex-xs rounded-full bg-green-500 px-4 py-1 text-white"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-40 overflow-auto"
            >
              {current.content()}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="flex cursor-pointer justify-between rounded-lg border border-neutral-200 bg-white p-4 shadow"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="aspect-square h-14 rounded-lg"
              />
              <motion.div
                layoutId={`card-content-${card.title}`}
                className="flex flex-col items-start gap-2"
              >
                <motion.h2
                  layoutId={`card-h2-${card.title}`}
                  className="text-xs font-bold text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-p-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="tex-xs my-4 rounded-full bg-green-500 px-4 py-1 text-white"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://sujalpatel.tech",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          “Summertime Sadness” is one of Lana Del Rey’s most iconic tracks — a
          cinematic blend of melancholy and nostalgia. The song captures the
          bittersweet beauty of fleeting moments, drenched in warm summer light
          yet shadowed by heartbreak. It’s dreamy, haunting, and deeply
          emotional — pure Lana energy.
        </p>
      );
    },
  },
  {
    description: "The Weeknd",
    title: "Blinding Lights",
    src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72ca76535794f57b04423447480",
    ctaText: "Play",
    ctaLink: "https://sujalpatel.tech",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          “Blinding Lights” is a retro-synth pop anthem that blends 80s
          nostalgia with futuristic vibes. The Weeknd’s vocals soar through
          neon-lit cityscapes, wrapped in energy and longing. It’s the perfect
          fusion of emotion and rhythm, making you feel like you're racing
          through the night with your heart wide open.
        </p>
      );
    },
  },
  {
    description: "Billie Eilish",
    title: "Happier Than Ever",
    src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c46efe38d28b4a4a1774e3ac5",
    ctaText: "Play",
    ctaLink: "https://sujalpatel.tech",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          “Happier Than Ever” starts soft and vulnerable, but transforms into a
          raw explosion of emotion. Billie Eilish takes listeners on a journey
          from quiet heartbreak to powerful self-realization. Her voice cracks
          with honesty, making it one of the most cathartic and relatable songs
          of her entire discography.
        </p>
      );
    },
  },
  {
    description: "Drake",
    title: "Passionfruit",
    src: "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc0d5",
    ctaText: "Play",
    ctaLink: "https://sujalpatel.tech",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          “Passionfruit” is smooth, chill, and effortlessly addictive. Drake
          blends tropical beats with reflective lyrics about distance and love
          fading away. The song feels like late-night conversations, missed
          calls, and quiet heartbreak wrapped in a groovy, sun-soaked rhythm
          that keeps looping in your head.
        </p>
      );
    },
  },
  {
    description: "Kendrick Lamar",
    title: "Alright",
    src: "https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58",
    ctaText: "Play",
    ctaLink: "https://sujalpatel.tech",
    content: () => {
      return (
        <p className="text-sm text-neutral-500">
          “Alright” by Kendrick Lamar is more than a song — it’s a message of
          resilience, power, and hope. With poetic lyricism and a hypnotic beat,
          Kendrick turns personal struggle into a universal mantra. It’s a
          reminder that even when the world feels heavy, we’ll be alright — no
          matter what.
        </p>
      );
    },
  },
];
