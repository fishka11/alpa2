'use client';
import { motion } from 'framer-motion';
import CardWithPic from './cardWithPic';

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

export default function MotionCardsWithPic({ cards }) {
  return cards.length ? (
    <motion.div variants={container} initial="initial" animate="enter">
      {cards.map((card) => (
        <motion.div key={card.id} variants={item}>
          <CardWithPic {...card} />
        </motion.div>
      ))}
    </motion.div>
  ) : null;
}
