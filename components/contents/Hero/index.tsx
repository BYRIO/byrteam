'use client';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { HTMLProps, ReactNode, useCallback, useEffect, useState } from 'react';

import HeroBG1 from '@/assets/images/demo-hero-bg.png';
import Image from 'next/image';

function EmblaCarouselItemWrapper(props: { children: ReactNode }) {
  const { children } = props;
  return <div className="flex-[0_0_100%]">{children}</div>;
}

function HeroBG() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ delay: 5000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className="absolute inset-x-0">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          <EmblaCarouselItemWrapper>
            <Image
              className="h-screen select-none object-cover"
              src={HeroBG1}
              alt=""
            />
          </EmblaCarouselItemWrapper>
          {[
            'bg-red-200',
            'bg-orange-300',
            'bg-amber-200',
            'bg-lime-200',
            'bg-emerald-200',
          ].map((bg, index) => (
            <EmblaCarouselItemWrapper key={bg + '-' + index}>
              <div
                className={clsx(bg, 'h-screen object-cover sm:min-h-[700px]')}
              ></div>
            </EmblaCarouselItemWrapper>
          ))}
        </div>
      </div>
      {/* indicator */}
      <div></div>
    </div>
  );
}

export default function Hero() {
  return (
    <motion.section className={clsx('relative')}>
      <HeroBG />
      <div className={clsx(
        "pointer-events-none relative box-border flex",
        "h-screen w-fit items-center bg-gradient-to-r from-black/40  to-transparent",
        "pl-8 pr-10 pt-[70px]",
        "sm:pl-20 sm:pr-40  sm:pt-[84px] sm:min-h-[700px]",
        )}>
        <div className="max-w-[564px] flex-col gap-14 text-white space-y-4">
          <div className="font-smiley text-[50px] leading-normal sm:text-[64px]">
            <p>We want you:</p>
            <p>我们在这里，等风也等你</p>
          </div>
          <div className="front-medium space-y-4">
            <p>
              北邮人团队成立于 2000 年初，现设技术、美工、产品运营和新媒体工作室
              4 个大组，成员是北邮各学院各年级的在校生。
            </p>
            <p>
              一代代团队成员，用青春抒写着北邮人的辉煌历程。无论你是技术控，还是段子手，是爱热闹，还是享受奋斗，北邮人团队总有适合你的地方，加入我们，一起成长！少年，We
              Want You！
            </p>
            <p className="mt-3">
              点击加入群聊
              <a
                className="pointer-events-auto underline underline-offset-4"
                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=d5L-wJPXBmx8KUFgl9bdcVeOcg5rBPQF&authKey=UCJz3szW5XT%2BYeraU7QAgzXW2kKU9Z5ZsRavw%2FXiThBPTnI06kx4OGMNZQX%2BA9NF&noverify=0&group_code=259579529"
                rel="noreferrer noopener"
              >
                【BYR Team 2023年招新咨询群】
              </a>
              了解更多吧
            </p>
          </div>
          <div className='front-medium flex justify-center'>
              <a
                className={clsx(
                  "text pointer-events-auto mb-4 inline-block w-fit rounded-full bg-white/40 ",
                  "px-10 py-5 sm:px-8 sm:py-4",
                  "mr-0 sm:mr-auto ",
                  )}
                href="/"
              >
              加入我们
              </a>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}
