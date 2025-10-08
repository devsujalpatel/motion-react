"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Icon24Hours,
  Icon360,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              scale: 0.98,
              filter: "blur(4px)",
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
              "w-72 min-h-[26rem] h-[27rem] rounded-xl",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",

              "p-4 flex flex-col"
            )}
          >
            <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of UI components, let's get on with it.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
        rounded-md px-2 py-1
        "
              >
                <Image
                  width={50}
                  height={50}
                  className="h-4 w-4"
                  src="https://ui.aceternity.com/logo.png"
                  alt="Aceternity Logo"
                />
                Aceternity
                <IconX className="h-3 w-3 text-neutral-400" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute index-0 h-full w-full rounded-lg bg-white divide-y divide-neutral-200 border border-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconMessage className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-600 text-[8px] font-bold">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon24Hours className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-600 text-[8px] font-bold">
                      24 hours turnaround
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Super fast delivery at warp speed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon360 className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-600 text-[8px] font-bold">
                      360 days all around
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      We're here to help you 24/7
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon3dCubeSphere className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-600 text-[8px] font-bold">
                      Some other feature
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Here is another feature
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4 items-center justify-center">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconPlus className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-600 text-[8px] font-bold">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
