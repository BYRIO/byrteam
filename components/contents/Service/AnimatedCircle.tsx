import clsx from 'clsx';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(0, 103, 209, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(0, 103, 209, 1)',
  },
};

export default function AnimatedCircle() {
  return (
    <motion.svg
      width="130"
      height="120"
      viewBox="0 0 117 104"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'absolute left-[calc(50%+6px)] top-[calc(50%+8px)] -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-100'
      )}
      fill="none"
    >
      <motion.path
        d="M113.758 47.7575C100.925 67.2575 72.799 105.113 32.2585 86.2575C-10.7416 66.2579 -6.16411 7.76068 44.796 3.26009C101.575 -1.7544 115.259 46.7575 97.7588 71.7575C80.2588 96.7575 65.298 103.758 32.2585 100.257"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        stroke="#0067D1"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
}
