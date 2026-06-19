import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "> Initializing Portfolio...",
  "> Loading Projects...",
  "> Loading Experience...",
  "> Loading Skills...",
  "> Ready.",
];

const Loader = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-black
      flex
      items-center
      justify-center
      "
    >
      <div
        className="
        w-full
        max-w-2xl
        px-8
        font-mono
        "
      >
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
            text-zinc-300
            text-lg
            md:text-xl
            mb-4
            "
          >
            {line}
          </motion.div>
        ))}

        {visibleLines < lines.length && (
          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="
            text-zinc-400
            text-xl
            "
          >
            ▋
          </motion.span>
        )}
      </div>
    </div>
  );
};

export default Loader;