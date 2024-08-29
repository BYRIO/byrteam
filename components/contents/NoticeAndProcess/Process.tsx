import ProcessDesktop from '@/assets/images/process/process-desktop-2024.svg';
import ProcessMobile from '@/assets/images/process/process-mobile-2024.svg';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <motion.div layout className="mx-auto my-6 max-w-[1440px] px-12">
      <ProcessDesktop className="h-fit w-full max-md:hidden" />
      <ProcessMobile className="h-fit w-full max-sm:px-4 sm:px-10 md:hidden" />
    </motion.div>
  );
}
