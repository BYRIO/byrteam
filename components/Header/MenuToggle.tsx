import { motion } from 'framer-motion';
import { ComponentProps, HTMLProps } from 'react';

function Path(props: ComponentProps<typeof motion.path>) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );
}

export default function MenuToggle(
  props: { toggle: () => void } & ComponentProps<typeof motion.button>
) {
  const { toggle, ...rest } = props;
  return (
    <motion.button {...rest} onClick={toggle}>
      <motion.svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </motion.svg>
    </motion.button>
  );
}
