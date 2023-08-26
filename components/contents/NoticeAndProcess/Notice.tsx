'use client';
import { ComponentProps } from 'react';
import IconArrow from '@/assets/images/senpai-saying/icon-arrow.svg';
import { useCycle, motion, AnimatePresence } from 'framer-motion';

import dayjs from 'dayjs';
import clsx from 'clsx';
const notices = [
  {
    title: '北邮人2023招新公告',
    time: '2023-08-21 15:30',
    href: '',
    tag: ['置顶'],
  },
  {
    title: '北邮人2024技术组考核公告',
    time: '2023-08-21 15:30',
    href: '',
    tag: ['技术组', '考核'],
  },
  {
    title: '北邮人2024设计组面试公告',
    time: '2023-08-21 15:30',
    href: '',
    tag: ['设计组'],
  },
  {
    title: '北邮人2024招新公告',
    time: '2023-08-21 15:30',
    href: '',
  },
  {
    title: '北邮人2024招新公告',
    time: '2023-08-21 15:30',
    href: '',
  },
  {
    title: '北邮人2024招新公告',
    time: '2023-08-21 15:30',
    href: '',
  },
  {
    title: '北邮人2024招新公告',
    time: '2023-08-21 15:30',
    href: '',
  },
] as Array<ComponentProps<typeof NoticeItem>>;

function Tag({ name }: { name: string }) {
  return (
    <div className="box-content rounded-[4px] border-[1.5px] border-solid border-[#0067D1] px-2 py-[2px] text-sm text-[#0067D1]">
      {name}
    </div>
  );
}

function NoticeItem(props: {
  title: string;
  time: string;
  href: string;
  tag?: Array<string>;
}) {
  const { title, time, href, tag } = props;
  return (
    <motion.div
      className={clsx(
        'flex justify-between',
        'flex-col items-start gap-1',
        'sm:flex-row sm:items-center'
      )}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div
        className={clsx(
          'flex shrink flex-nowrap self-stretch text-xl',
          'flex-col items-start gap-1',
          'sm:flex-row sm:items-center sm:gap-6'
        )}
      >
        <a className=" line-clamp-1" href={href}>
          {title}
        </a>
        <div className="flex shrink-0 items-center gap-2">
          {tag &&
            tag.length > 0 &&
            tag.map((item, index) => (
              <Tag name={item} key={`${title}-${item}-${index}`} />
            ))}
        </div>
      </div>
      <div className=" whitespace-nowrap text-sm text-[#9A9A9A]">{time}</div>
    </motion.div>
  );
}

export default function Notice() {
  const [showMore, toggleShowMore] = useCycle(false, true);
  return (
    <motion.div
      layout
      className="flex flex-col gap-6 rounded-[18px] bg-white p-9"
    >
      {notices.slice(0, showMore ? undefined : 4).map((item, index) => (
        <NoticeItem key={`${item.title}-${index}`} {...item} />
      ))}
      <motion.button
        onClick={() => toggleShowMore()}
        layout
        className="flex w-fit items-center gap-2 text-sm leading-none text-black opacity-50 lg:text-xl"
      >
        展开更多
        <IconArrow
          width={16}
          className={clsx('transition duration-500', {
            'rotate-90': !showMore,
            '-rotate-90': showMore,
          })}
        />
      </motion.button>
    </motion.div>
  );
}
