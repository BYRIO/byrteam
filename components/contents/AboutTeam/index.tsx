import { motion } from 'framer-motion';

import ChalkTitle from '@/components/common/ChalkTitle';
import AsteriskIcon from '@/assets/images/about-team/asterisk.svg';
import clsx from 'clsx';

export default function AboutTeam() {
  return (
    <motion.section
      className={clsx('mx-auto max-w-[1280px] pt-12', 'px-4', 'sm:px-10')}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <ChalkTitle title="关于BYR-Team" />
      <div className="mt-3 space-y-4 px-6 py-3 text-sm leading-loose sm:space-y-2 sm:py-9 lg:text-base">
        <p className="relative w-fit">
          有一个地方每个北邮人都来过，却鲜有人知道还有一群人默默陪伴，但从你被北邮录取开始，就已与他们结起一段看不见的缘分。
          <AsteriskIcon className="absolute -right-8 top-0" />
        </p>
        <p>
          {' '}
          北邮人团队成立于
          <b className="text-lg font-black italic text-[#175DDC]">2000 </b>
          年初，由北邮各年级各学院的在校生组成。成立至今，我们一直致力于服务北邮人，为大家提供便利。
        </p>
        <p>
          我们目前提供论坛，第二课堂，BT，IPTV，OA系统，健身房、场地预约等应用服务。维护并客制化Markdown系统，校内Overleaf服务器，校内Gitlab服务器等开源服务。同时与信息化中心协作提供北邮镜像站的运营。范围遍及多个方面，旨在全方位服务北邮人。
        </p>
        <p>
          我们有技术、技术、设计、产品和新媒体
          4个大组，一代代团队成员，用青春抒写着北邮人的辉煌历程。无论你是技术控，还是气氛组，是爱热闹，还是享受奋斗，你都能在北邮人团队找到你大展宏图的地方。
        </p>
      </div>
    </motion.section>
  );
}
