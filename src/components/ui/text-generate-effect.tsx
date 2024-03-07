"use client"
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { useInView } from 'react-intersection-observer';

export const TextGenerateEffect = ({
  words,
  className,
  dataspeed,
}: {
  words: string;
  className?: string;
  dataspeed?: string,
}) => {
  const [scope, animate] = useAnimate();
  const [inViewRef, inView] = useInView();
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, scope.current, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} data-speed={dataspeed}>
      <div className="mt-4">
        <div className="dark:text-white leading-snug tracking-wide" ref={inViewRef}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
