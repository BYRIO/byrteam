import clsx from 'clsx';
import { motion } from 'framer-motion';

import styles from './style.module.scss';

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
      width="170"
      height="170"
      viewBox="0 0 155 153"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'absolute left-1/2 top-[calc(50%+8px)] -translate-x-1/2 -translate-y-1/2',
        styles.circle
      )}
    >
      <motion.path
        d="M132.664 77.2784C133.653 75.5661 134.467 74.1559 135.281 72.7458C136.037 71.4363 137.062 70.5509 138.566 71.2849C140.07 72.0188 140.163 73.4155 139.503 74.7806C137.815 78.3722 136.455 82.287 133.957 85.2771C129.175 91.1114 125.203 97.5472 120.517 103.437C109.481 117.21 95.6384 126.274 78.587 129.323C72.002 130.49 65.3822 130.16 59.0364 128.242C58.4963 128.064 57.8982 127.987 57.3199 127.654C56.2016 127.142 55.4123 126.284 55.7247 124.852C56.1533 123.22 57.3895 122.859 58.7787 123.124C60.2642 123.444 61.7879 123.921 63.2734 124.242C70.3735 125.521 77.324 124.833 84.2396 122.648C93.3186 119.832 101.341 115.062 108.268 108.183C107.592 108.464 106.915 108.745 106.239 109.027C105.505 109.408 104.712 109.891 103.978 110.273C92.3032 116.694 80.137 119.071 67.2095 116.979C43.8637 112.901 27.4878 92.2996 24.0576 74.2033C20.9715 57.5142 26.024 43.6439 39.5426 32.9155C46.4664 27.3777 54.1961 23.7824 62.8082 22.4426C84.5121 19.126 103.628 24.5217 119.302 39.8835C128.892 49.3147 133.36 61.1612 132.38 75.0998C132.34 75.614 132.359 76.0274 132.319 76.5416C132.319 76.5416 132.357 76.698 132.664 77.2784ZM103.738 34.792C94.2346 29.4397 83.3742 26.6613 71.7728 26.9468C61.0786 27.2189 51.3234 30.3161 42.7363 37.1768C31.0937 46.4365 26.6442 58.372 29.1953 72.8719C30.3753 79.7309 33.3331 85.7363 37.2381 91.214C51.0684 110.883 74.8131 117.608 96.5517 108C105.518 104.044 113.6 98.5033 121.067 91.8018C122.363 90.6699 123.39 89.1139 124.011 87.5925C128.984 74.7505 128.319 62.5482 121.205 51.0546C117.111 44.1245 111.158 39.0765 103.738 34.792Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          default: { duration: 1, ease: 'easeInOut' },
          fill: { duration: 1, ease: [1, 0, 0.9, 1] },
        }}
      />
    </motion.svg>
  );
}
