import { motion } from "framer-motion";

export const Cross = () => {
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
        <motion.line
          x1="40"
          y1="20"
          x2="80"
          y2="60"
          stroke="#0099ff"
          variants={draw}
          custom={0.5}
        />
        <motion.line
          x1="40"
          y1="60"
          x2="80"
          y2="20"
          stroke="#0099ff"
          variants={draw}
          custom={0.5}
        />
      </motion.svg>
    </motion.div>
  );
};
