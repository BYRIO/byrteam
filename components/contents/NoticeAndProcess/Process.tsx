import ProcessDesktop from '@/assets/images/senpai-saying/process-desktop.svg';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <motion.div layout className="mx-auto my-6 max-w-[1440px]">
      <ProcessDesktop className="w-full" />
    </motion.div>
  );
}
