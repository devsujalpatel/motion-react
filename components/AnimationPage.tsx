"use client";
import {
  IconBrush,
  IconCamera,
  IconCpu,
  IconPalette,
  IconRocket,
  IconSparkles,
} from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const AnimationPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#212529", "#124559", "#001219"];

  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  return (
    <motion.div
      animate={{
        background,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state-of-the-art AI, you can generate ultra realistic images in seconds.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          height={500}
          width={500}
          className="rounded-lg"
          alt="Car"
        />
      </div>
    ),
  },
  {
    icon: <IconCamera className="size-8 text-neutral-200" />,
    title: "Create cinematic scenes instantly",
    description:
      "Transform your prompts into cinematic, high-quality renders that look straight out of a movie.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-2.jpg"
          height={500}
          width={500}
          className="rounded-lg"
          alt="Cinematic Scene"
        />
      </div>
    ),
  },
  {
    icon: <IconBrush className="size-8 text-neutral-200" />,
    title: "Turn sketches into masterpieces",
    description:
      "Upload a rough idea and let our AI turn it into a polished digital masterpiece in seconds.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-3.jpg"
          height={500}
          width={500}
          className="rounded-lg"
          alt="Artwork"
        />
      </div>
    ),
  },
  {
    icon: <IconSparkles className="size-8 text-neutral-200" />,
    title: "Enhance image quality effortlessly",
    description:
      "Upscale your photos with stunning detail and clarity using our enhancement engine.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-4.jpg"
          height={500}
          width={500}
          className="rounded-lg"
          alt="Enhanced Image"
        />
      </div>
    ),
  },
  {
    icon: <IconPalette className="size-8 text-neutral-200" />,
    title: "Explore creative visual styles",
    description:
      "Experiment with various styles — from cyberpunk to watercolor — with just one click.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-2.jpg"
          height={500}
          width={500}
          className="rounded-lg"
          alt="Creative Styles"
        />
      </div>
    ),
  },
  {
    icon: <IconCpu className="size-8 text-neutral-200" />,
    title: "AI powered precision control",
    description:
      "Fine-tune your generations with precision sliders to adjust lighting, texture, and realism.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          height={500}
          width={500}
          className="rounded-lg"
          alt="Precision Control"
        />
      </div>
    ),
  },
];
