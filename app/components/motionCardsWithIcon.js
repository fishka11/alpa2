'use client';
import { motion } from 'framer-motion';
import CardWithIcon from './cardWithIcon';

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

export default function MotionCardsWithIcon({ cards }) {
  return cards.length ? (
    <motion.div
      variants={container}
      initial="initial"
      animate="enter"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {cards.map((card) => (
        <motion.div key={card.id} variants={item} className="flex self-stretch">
          <CardWithIcon {...card} />
        </motion.div>
      ))}
    </motion.div>
  ) : null;
}
