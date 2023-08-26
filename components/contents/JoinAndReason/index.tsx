import ChalkTitle from '@/components/common/ChalkTitle';

import { motion } from 'framer-motion';

import IconFree from '@/assets/images/join-team/icon-free.svg';
import IconHarvest from '@/assets/images/join-team/icon-harvest.svg';
import IconClap from '@/assets/images/join-team/icon-clap.svg';
import { ComponentProps, FC, HTMLProps, ReactNode, SVGProps } from 'react';
import clsx from 'clsx';

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
      className={clsx('mx-auto max-w-[1280px] pt-12', 'px-4', 'sm:px-10')}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <ChalkTitle title="加入byrTeam的N个理由" />
      <div
        className={clsx(
          'mx-auto mt-3 flex items-center justify-center py-3 sm:py-9',
          'flex-col gap-6',
          'sm:flex-row sm:gap-3',
          'lg:gap-6'
        )}
      >
        {reasons.map(({ title, icon: Icon, description }, index) => (
          <div
            key={`${title}+${index}`}
            className="relative mx-auto flex max-w-[344px] flex-col items-center self-stretch sm:basis-1/3"
          >
            <Icon
              className={clsx(
                'z-10 mx-auto shrink-0',
                '-mb-6 h-[80px]',
                'sm:-mb-8 sm:h-[100px]',
                'lg:-mb-20 lg:h-[150px]'
              )}
            />
            <div
              className={clsx(
                'grow rounded-2xl bg-white text-center',
                'px-6 pb-6 pt-[30px]',
                'sm:px-6 sm:pb-6 sm:pt-[40px]',
                'lg:px-12 lg:pb-9 lg:pt-[100px]'
              )}
            >
              <h3
                className={clsx(
                  'font-smiley',
                  'text-[20px]',
                  'sm:text-[24px]',
                  'lg:text-[28px]'
                )}
              >
                {title}
              </h3>
              <p
                className={clsx(
                  'mt-5 text-xs text-[#585858]',
                  'sm:text-sm',
                  'lg:text-base'
                )}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
