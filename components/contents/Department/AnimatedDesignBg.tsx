import { SVGProps } from 'react';
import { motion } from 'framer-motion';

const circleVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
};
const circles = [
  {
    cx: '126.878',
  },
  {
    cx: '281.878',
  },
  {
    cx: '436.878',
  },
  {
    cx: '591.878',
  },
  {
    cx: '746.878',
  },
];
export default function AnimatedDesignBg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="874"
      height="254"
      viewBox="0 0 874 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {circles.map((circle, index) => (
        <motion.circle
          key={'svg-circle-' + index}
          cx={circle.cx}
          cy="126.878"
          r="121.878"
          fill="#EBFAE8"
          stroke="white"
          stroke-width="10"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={circleVariants}
        />
      ))}
    </svg>
  );
}
