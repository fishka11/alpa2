"use client";
import { motion } from "framer-motion";
import Metamorphose from "./metamorphose";

const container = {
  initial: { opacity: 1 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  initial: { y: 30, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
  },
};

export default function MotionMetamorphoses({ metamorphoses }) {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="enter"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
    >
      {metamorphoses.map((meta) => (
        <motion.div
          key={meta.id}
          variants={item}
          className="flex self-stretch bg-gray-100"
        >
          <Metamorphose meta={meta} />
        </motion.div>
      ))}
    </motion.div>
  );
}
