import ProcessDesktop from '@/assets/images/senpai-saying/process-desktop.svg';
import ProcessMobile from '@/assets/images/senpai-saying/process-mobile.svg';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <motion.div layout className="mx-auto my-6 max-w-[1440px]">
      <ProcessDesktop className="w-full max-sm:hidden" />
      <div className="-mt-[80px] -mb-[100px] flex justify-center">
        <ProcessMobile className="w-[85%] sm:hidden" />
      </div>
    </motion.div>
  );
}
