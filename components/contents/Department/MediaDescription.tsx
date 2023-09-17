import IconDots from '@/assets/images/departments/media/icon-dots.svg';
import PurpleMonster from '@/assets/images/departments/media/avatar-purple-monster.svg';
import BlueCutie from '@/assets/images/departments/media/avatar-blue-cutie.svg';
import Dinosaur from '@/assets/images/departments/media/avatar-dinosaur.svg';
import IconPencil from '@/assets/images/departments/icon-pencil.svg';

import IconSmile from '@/assets/images/departments/media/icon-smile.svg';
import IconPhoto from '@/assets/images/departments/media/icon-photo.svg';
import IconLocation from '@/assets/images/departments/media/icon-location.svg';
import IconPin from '@/assets/images/departments/media/icon-pin.svg';

import * as ScrollArea from '@radix-ui/react-scroll-area';
import clsx from 'clsx';

import { FC, ReactNode, SVGProps } from 'react';
import style from './style.module.scss';

function Chat({
  children,
  isYou = false,
  isLast = false,
  className,
}: {
  children: ReactNode;
  isYou?: boolean;
  isLast?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx('w-fit px-5 py-2 max-sm:text-sm sm:text-lg', className, {
        'bg-[#4AA3FF]': isYou,
        'bg-[#FFF] shadow-[0_0_4px_0] shadow-[#DEE6F2]': !isYou,
        'rounded-l-[24px] rounded-br-[24px] rounded-tr-[4px]': isYou && isLast,
        'rounded-l-[24px] rounded-r-[4px]': isYou && !isLast,
        'rounded-r-[24px] rounded-bl-[24px] rounded-tl-[4px]': !isYou && isLast,
        'rounded-l-[4px] rounded-r-[24px]': !isYou && !isLast,
      })}
    >
      {children}
    </div>
  );
}

function WechatDialog({
  chat,
  avatar: Avatar,
  name,
  time,
  isYou = false,
  className,
}: {
  chat: ReactNode;
  avatar: FC<SVGProps<SVGGElement>>;
  name: string;
  time: string;
  isYou?: boolean;
  className?: string;
}) {
  return (
    <section
      className={clsx('flex max-sm:gap-2 sm:gap-4', className, {
        'flex-row-reverse': !isYou,
      })}
    >
      <div className="flex flex-col gap-[6px]">
        <div
          className={clsx('flex items-baseline justify-end gap-4', {
            'flex-row-reverse': !isYou,
          })}
        >
          <span className="leading-[180%] opacity-50 max-sm:text-xs sm:text-sm">
            {time}
          </span>
          <span className="leading-[180%] text-[#393939] max-sm:text-sm sm:text-lg">
            {name}
          </span>
        </div>
        <div
          className={clsx('flex flex-col gap-[6px]', {
            'text-white': isYou,
            'text-black': !isYou,
          })}
        >
          {chat}
        </div>
      </div>
      <Avatar
        className={clsx(
          'shrink-0',
          'max-sm:h-[36px] max-sm:w-[36px]',
          'sm:h-[56px] sm:w-[56px]'
        )}
      />
    </section>
  );
}

function WechatAritcleLink({
  href,
  content,
}: {
  href: string;
  content: string;
}) {
  return (
    <div className="flex items-start gap-1">
      <a
        className="leading-[180%] underline max-sm:text-sm sm:text-lg"
        href={href}
        rel="noreferrer noopener"
        target="_blank"
      >
        {content}
      </a>
      <IconPencil />
    </div>
  );
}
function ChalkSpan({ content }: { content: ReactNode }) {
  return (
    <div className="relative block w-fit">
      <div
        className={clsx(
          'absolute bottom-0 box-content h-3/5 w-full pr-8',
          'bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900] opacity-40'
        )}
      ></div>
      <div className="relative whitespace-nowrap text-center leading-[180%] max-sm:text-base sm:text-xl">
        {content}
      </div>
    </div>
  );
}

export default function Description() {
  return (
    <section className="overflow-hidden rounded-xl border-[0.5px] bg-[#F6F8FC]">
      <header className="flex h-[75px] items-center justify-between border-b-[0.5px] px-4 text-[#333] max-sm:py-2 sm:py-4">
        <div className=" text-2xl leading-[180%] tracking-[4.8px]">
          🎉招新啦🎉
        </div>
        <div className="cursor-pointer p-1">
          <IconDots width={32} height={32} className="opacity-40" />
        </div>
      </header>
      <ScrollArea.Root>
        <ScrollArea.Viewport className="h-[394px] w-full">
          <article
            className={clsx(
              'flex flex-col gap-3 px-3 pb-10 pt-2',
              style.MediaBG
            )}
          >
            <WechatDialog
              className="self-end"
              name="You"
              time="05:04 PM"
              avatar={PurpleMonster}
              chat={
                <>
                  <Chat isLast isYou>
                    新媒体组好酷啊！好想加！！❤
                  </Chat>
                </>
              }
              isYou
            />
            <div className="text-center leading-[180%] opacity-60">
              北邮人团队 新媒体组 拍了拍 你，并发送了一条加群邀请
            </div>
            <WechatDialog
              className="self-start"
              name="新媒体组某不知名成员壹"
              time="05:06 PM"
              avatar={BlueCutie}
              chat={
                <>
                  <Chat>Hi，欢迎来到有趣灵魂聚集地新媒体组！ 我们是——</Chat>
                  <Chat>＃生活观察员＃</Chat>
                  <Chat className="max-w-[640px]">
                    在这里，与你同行，写你所想。
                    <br />
                    我们驻守在官方新媒体平台，捕捉校园生活中的小确幸、小美好，以图文定格北邮人的独家记忆。
                  </Chat>
                  <Chat className="w-full" isLast>
                    <div className="flex justify-between max-sm:flex-col [&>div]:flex [&>div]:flex-col [&>div]:gap-[2px]">
                      <div>
                        <ChalkSpan content="#春日邮啊邮：" />
                        <WechatAritcleLink
                          href="https://mp.weixin.qq.com/s/vI0UQ144QMib4nX00E_mNw"
                          content="藏在北三环里的小众宝藏打卡地 "
                        />
                        <WechatAritcleLink
                          href="https://mp.weixin.qq.com/s/ADSExMLzODeZxSbGP_Lg2Q"
                          content="北六环约会圣地，城区40min可达 "
                        />
                        <WechatAritcleLink
                          href="https://mp.weixin.qq.com/s/lC57Iya44k2g7KoiVcjtMw"
                          content="春日邮花图鉴"
                        />
                      </div>
                      <div>
                        <ChalkSpan content="#北邮爱情故事：" />
                        <WechatAritcleLink
                          href="https://mp.weixin.qq.com/s/Fg4ETkdX0Z1qlUBazAE7DA"
                          content="BYR七夕不规则访谈"
                        />
                        <WechatAritcleLink
                          href="https://mp.weixin.qq.com/s/oGQ9BGFT-Lt0YjMN4RoVGg"
                          content="BYR520约会方式一览 "
                        />
                      </div>
                    </div>
                  </Chat>
                </>
              }
              isYou={false}
            />
            <WechatDialog
              className="self-start"
              name="新媒体组某不知名成员贰"
              time="05:12 PM"
              avatar={Dinosaur}
              chat={
                <>
                  <Chat>我们也是——</Chat>
                  <Chat>＃浪漫的幻想家＃</Chat>
                  <Chat className="max-w-[640px]">
                    在这里，梦境碰撞现实，一切皆有可能。
                    <br />
                    我们点燃灵感的焰火，将天马行空的脑洞付诸笔下，摘星揽月、逐光织梦。
                  </Chat>
                  <Chat isLast>
                    <WechatAritcleLink
                      href="https://mp.weixin.qq.com/s/SPhbDiPZIETY8QqiC4rwSw"
                      content="世界破破烂烂，小动物缝缝补补"
                    />
                    <WechatAritcleLink
                      href="https://mp.weixin.qq.com/s/HCklNWP5T37ukMYtgPVYpg"
                      content="超能力与副作用的化学反应"
                    />
                  </Chat>
                </>
              }
              isYou={false}
            />
          </article>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="relative flex-1 cursor-grab rounded-[10px] bg-black/30 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] hover:bg-black/60 active:cursor-grabbing" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <footer className="bg-white p-4">
        <div className="flex items-center justify-between rounded-full bg-[#F6F8FC] text-black/40 max-md:px-6 max-md:py-[6px] md:px-11 md:py-3">
          <div className="border-r-[2px] max-sm:pr-3 sm:pr-6 [&>svg]:cursor-pointer [&>svg]:max-sm:h-5 [&>svg]:max-sm:w-5">
            <IconPin />
          </div>
          <input
            className="min-w-0 bg-transparent py-[3px] outline-none placeholder:tracking-[2.16px] max-sm:shrink max-sm:px-4 sm:grow sm:px-7"
            type="text"
            placeholder="请输入..."
          />
          <div className="flex justify-between gap-4 sm:gap-5 md:gap-7 [&>svg]:cursor-pointer [&>svg]:max-sm:h-6 [&>svg]:max-sm:w-6">
            <IconSmile />
            <IconPhoto />
            <IconLocation />
          </div>
        </div>
      </footer>
    </section>
  );
}
