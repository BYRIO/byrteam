import ProcessDesktop from '@/assets/images/senpai-saying/process-desktop.svg';
import ProcessMobile from '@/assets/images/senpai-saying/process-mobile.svg';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <motion.div layout className="mx-auto my-6 max-w-[1440px]">
      <ProcessDesktop className="h-fit w-full max-md:hidden" />
      <ProcessMobile className="h-fit w-full px-4 md:hidden" />
    </motion.div>
  );
}
