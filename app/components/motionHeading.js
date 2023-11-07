"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function MotionHeading({ text, level, classes = "" }) {
  const heading = () => {
    if (!level || !text) {
      return null;
    }
    switch (level.toLowerCase()) {
      case "h1":
        return <h1 className={classes}>{text}</h1>;
      case "h2":
        return <h2 className={classes}>{text}</h2>;
      case "h3":
        return <h3 className={classes}>{text}</h3>;
      case "h4":
        return <h4 className={classes}>{text}</h4>;
      case "h5":
        return <h5 className={classes}>{text}</h5>;
      case "h6":
        return <h6 className={classes}>{text}</h6>;
      default:
        return null;
    }
  };

  return (
    heading() && (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        {heading()}
      </motion.div>
    )
  );
}
