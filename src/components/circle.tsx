import { motion } from "framer-motion";

export const Circle = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.05;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.div
      className="bg-[#ff033e] rounded-md dark:bg-[#C9C9C7] flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
    >
      <motion.svg
        width="122.67"
        height="80"
        viewBox="0 0 122.67 80"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="60"
          cy="40"
          r="25"
          stroke="#00cc88"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    </motion.div>
  );
};
