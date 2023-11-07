"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function MotionText({ text }) {
  return text ? (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ ease: "easeOut", duration: 0.2, delay: 0.1 }}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </motion.div>
  ) : null;
}
