import ChalkTitle from '@/components/common/ChalkTitle';

import { motion } from 'framer-motion';

import IconFree from '@/assets/images/join-team/icon-free.svg';
import IconHarvest from '@/assets/images/join-team/icon-harvest.svg';
import IconClap from '@/assets/images/join-team/icon-clap.svg';
import { ComponentProps, FC, HTMLProps, ReactNode, SVGProps } from 'react';

const reasons = [
  {
    icon: IconFree,
    title: '开放自由',
    description:
      '自由开放的文化氛围让你的声音会被认真聆听，你可以与整个团队的同学进行思想碰撞，点燃创意的火花。在这里，你遇到的不只是学长学姐，更是并肩作战的伙伴。',
  },
  {
    icon: IconHarvest,
    title: '收获满满',
    description:
      '无论你想提升自己的coding能力、产品思维能力还是交互设计能力，这里都有手握多个大厂offer的学长学姐手把手教学。从0到1带你做项目，成为你简历上最亮眼的一笔！',
  },
  {
    icon: IconClap,
    title: '发挥价值',
    description:
      '这里有梦和追梦的勇气，我们为每一个有想法的同学搭建舞台，赋予把思考变为现实以满足用户需求的勇气和能力。好的内容，值得被更多人看见！',
  },
] as Array<{
  icon: FC<SVGProps<SVGGElement>>;
  title: string;
  description: string;
}>;

export default function JoinAndReason() {
  return (
    <motion.section
      className="mx-auto max-w-[1200px] pt-12"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <ChalkTitle title="加入byrTeam的N个理由" />
      <div className="mx-auto mt-3 flex items-center justify-center gap-6 py-9">
        {reasons.map(({ title, icon: Icon, description }, index) => (
          <div
            key={`${title}+${index}`}
            className="relative flex max-w-[344px] flex-col self-stretch"
          >
            <Icon height={150} className="z-10 mx-auto -mb-20" />
            <div className="grow rounded-2xl bg-white px-12 pb-9 pt-[100px] text-center">
              <h3 className="font-smiley text-[28px]">{title}</h3>
              <p className="mt-5 text-[#585858]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
