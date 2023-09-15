import ChalkTitle from '@/components/common/ChalkTitle';
import Notice from './Notice';
import Process from './Process';
import { motion, LayoutGroup } from 'framer-motion';
import clsx from 'clsx';

export default function NoticeAndProcess() {
  return (
    <motion.section
      className="mx-auto pt-12"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className={clsx('mx-auto max-w-[1280px]', 'px-4', 'sm:px-10')}>
        <ChalkTitle title="招新公告与招新流程" />
      </div>
      <LayoutGroup>
        {/* <motion.div
          layout
          className={clsx(
            'mx-auto mt-3 max-w-[1280px] px-4 py-3 sm:px-10 sm:py-9'
          )}
        >
          <Notice />
        </motion.div> */}
        <Process />
      </LayoutGroup>
    </motion.section>
  );
}
