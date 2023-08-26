import { ComponentProps } from 'react';
import IconArrow from '@/assets/images/senpai-saying/icon-arrow.svg';

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
    <div
      className={clsx(
        'flex justify-between',
        'flex-col items-start gap-1',
        'sm:flex-row sm:items-center'
      )}
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
    </div>
  );
}

export default function Notice() {
  return (
    <div className="flex flex-col gap-6 rounded-[18px] bg-white p-9">
      {notices.map((item, index) => (
        <NoticeItem key={`${item.title}-${index}`} {...item} />
      ))}
      <button className="flex w-fit items-center gap-2 text-sm leading-none text-black opacity-50 lg:text-xl">
        展开更多
        <IconArrow width={16} className="rotate-90" />
      </button>
    </div>
  );
}
