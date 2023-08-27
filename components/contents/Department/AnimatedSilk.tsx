import { motion } from 'framer-motion';

export default function AnimatedSilk() {
  return (
    <div className="max-sm:scale-[.4]">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="261"
        height="180"
        viewBox="0 0 261 180"
        fill="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          d="M10 175C26.6667 140.5 70.7671 86.8433 114.5 80.5002C180 71 173 128 142 138C111 148 89.5 55.5 258 11"
          stroke="#B1ECA2"
          strokeOpacity="0.43"
          strokeWidth="22"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
