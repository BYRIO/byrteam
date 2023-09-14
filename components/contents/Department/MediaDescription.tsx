import MediaWechat from '@/assets/images/departments/media-wechat.svg';
import MediaStarLg from '@/assets/images/departments/media-star-lg.svg';
import MediaStarSm from '@/assets/images/departments/media-star-sm.svg';
import IconPencil from '@/assets/images/departments/icon-pencil.svg';

import { motion } from 'framer-motion';
import clsx from 'clsx';

function ChalkSpan({ content }: { content: string }) {
  return (
    <div className="relative block w-fit">
      <div
        className={clsx(
          'absolute bottom-0 box-content h-3/5 w-full pr-8',
          'bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900] opacity-40'
        )}
      ></div>
      <h4 className="relative text-xl leading-[180%]">{content}</h4>
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
    <div className="flex flex-col items-center gap-2">
      <MediaWechat />
      <article className="w-full px-10">
        <h2 className="mb-4 text-center font-smiley text-[28px] leading-[180%]">
          Hi，欢迎来到有趣灵魂聚集地——新媒体组！ 我们是——
        </h2>
        <section className="relative flex justify-between leading-[180%]">
          <div className="absolute inset-0 z-0">
            <MediaStarSm className="absolute" />
            <MediaStarLg className="absolute right-0" />
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
            <div className="flex justify-between">
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
              <div className="flex flex-col gap-[2px]">
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
          <section className="relative flex max-w-[253px] flex-col gap-2">
            <h3 className="text-2xl font-semibold leading-[180%] text-[#333]">
              ＃浪漫的幻想家＃
            </h3>
            <p className="text-xl leading-[172%]">
              在这里，梦境碰撞现实，一切皆有可能。
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
    </div>
  );
}
