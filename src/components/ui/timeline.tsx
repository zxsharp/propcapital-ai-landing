"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  description,
  className,
}: {
  data: TimelineEntry[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full bg-[#0c0d10] text-white font-sans md:px-6 relative overflow-hidden", className)}
      ref={containerRef}
    >
      {/* Background subtle mesh pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {(title || description) && (
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 md:px-8 lg:px-10 relative z-10">
          {title && (
            <div className="text-2xl md:text-5xl font-extrabold mb-3 text-white max-w-4xl tracking-tight">
              {title}
            </div>
          )}
          {description && (
            <div className="text-neutral-400 text-sm md:text-base max-w-2xl font-normal">
              {description}
            </div>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-16 z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-16 md:gap-8"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 self-start max-w-xs md:w-64 shrink-0">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-[#16171c] border border-white/20 flex items-center justify-center shadow-md">
                <div className="h-3 w-3 rounded-full bg-neutral-300 border border-white/40" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-2xl font-bold text-neutral-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-14 pr-4 md:pl-2 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-neutral-300">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-7 left-7 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-white via-neutral-400 to-transparent from-[0%] via-[20%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
