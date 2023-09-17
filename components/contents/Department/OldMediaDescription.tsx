import MediaWechat from '@/assets/images/departments/media/WeChat-lg.svg';
import MediaStarLg from '@/assets/images/departments/media/star-lg.svg';
import MediaStarSm from '@/assets/images/departments/media/star-sm.svg';
import IconPencil from '@/assets/images/departments/icon-pencil.svg';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { HTMLProps, ReactNode } from 'react';

export function ChalkSpan2({ content }: { content: ReactNode }) {
  return (
    <div className="relative mx-auto block w-fit max-sm:-ml-3 max-sm:scale-75">
      <div
        className={clsx(
          'absolute left-0 w-full',
          'bg-gradient-to-r from-transparent via-[#DAFF47] to-transparent opacity-40',
          'top-1/2 h-3/5 -translate-y-1/2',
          'md:bottom-0 md:top-auto md:h-1/2 md:translate-y-0'
        )}
      ></div>
      <h2 className="relative ml-2 text-center font-smiley text-[30px] leading-tight">
        {content}
      </h2>
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
      <div className="relative whitespace-nowrap text-center text-xl leading-[180%]">
        {content}
      </div>
    </div>
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
        className="text-base leading-[180%] underline"
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

export default function MediaDescription() {
  return (
    <section className="relative flex h-full flex-col items-center gap-2">
      <MediaWechat className={'md:h-[138px]'} />
      <ChalkSpan2
        content={
          <>
            <span>Hi，欢迎来到有趣灵魂聚集地——</span>
            <span className=" whitespace-nowrap">新媒体组！ 我们是——</span>
          </>
        }
      />
      <article className="w-full grow px-3">
        <section className="relative flex h-full flex-col justify-between gap-5 leading-[180%] md:flex-row md:gap-0">
          <div className="absolute inset-0 overflow-hidden">
            <MediaStarLg className="absolute -rotate-[20deg] max-md:left-1/2 max-md:-translate-x-[calc(50%+120px)] md:left-12" />
            <MediaStarSm className="absolute max-md:-bottom-12 max-md:right-1/2 max-md:translate-x-1/2 md:-bottom-36 md:right-0" />
          </div>
          <section className="relative flex max-w-[530px] flex-col gap-2">
            <h3 className="text-center text-2xl font-semibold leading-[180%] text-[#333]">
              ＃生活观察员＃
            </h3>
            <p className="text-xl leading-[172%]">
              在这里，与你同行，写你所想。
              <br />
              我们驻守在官方新媒体平台，捕捉校园生活中的小确幸、小美好，以图文定格北邮人的独家记忆。
            </p>
            <div className="flex flex-col justify-between md:flex-row">
              <div className="flex flex-col gap-[2px]">
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
              <div className="flex flex-col gap-[2px] md:[&>div]:whitespace-nowrap">
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
          </section>
          <section className="relative flex flex-col gap-2 md:max-w-[253px]">
            <h3 className="text-center text-2xl font-semibold leading-[180%] text-[#333] md:text-left">
              ＃浪漫的幻想家＃
            </h3>
            <p className="text-xl leading-[172%]">
              在这里，梦境碰撞现实，一切皆有可能。
              <br />
              我们点燃灵感的焰火，将天马行空的脑洞付诸笔下，摘星揽月、逐光织梦。
            </p>
            <WechatAritcleLink
              href="https://mp.weixin.qq.com/s/SPhbDiPZIETY8QqiC4rwSw"
              content="世界破破烂烂，小动物缝缝补补"
            />
            <WechatAritcleLink
              href="https://mp.weixin.qq.com/s/HCklNWP5T37ukMYtgPVYpg"
              content="超能力与副作用的化学反应"
            />
          </section>
        </section>
      </article>
    </section>
  );
}
