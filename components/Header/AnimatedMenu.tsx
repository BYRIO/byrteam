import { motion } from 'framer-motion';

import { links } from './link';

export default function AnimatedMenu() {
  return (
    <motion.ul
      className="absolute top-[58px] flex -translate-x-[calc(100%-34px)] flex-col gap-4 rounded-lg bg-white p-4 text-left shadow-lg"
      variants={{
        open: {
          clipPath: 'inset(0% 0% 0% 0% round 10px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.5,
          },
        },
        closed: {
          clipPath: 'inset(0% 0% 100% 100% round 10px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.5,
          },
        },
      }}
    >
      {links.map((link, index) => (
        <motion.li
          className="whitespace-nowrap border-b text-sm text-black"
          key={index}
          variants={{
            open: {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.2,
                delay: index * 0.1,
              },
            },
            closed: {
              opacity: 0,
              scale: 0.3,
              filter: 'blur(5px)',
              transition: {
                duration: 0.2,
                delay: 0,
              },
            },
          }}
        >
          <motion.a href={link.href} rel="noopener noreferrer" target="_blank">
            {link.name}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
