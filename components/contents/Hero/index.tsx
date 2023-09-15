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
    <div
      className="absolute inset-x-0"
      onPointerEnter={() => {
        emblaApi?.plugins?.().autoplay?.stop();
      }}
      onPointerLeave={() => {
        emblaApi?.plugins?.().autoplay?.play();
      }}
    >
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          <EmblaCarouselItemWrapper>
            <Image
              className="h-screen select-none  object-cover sm:min-h-[700px]"
              src={HeroBG1}
              alt=""
            />
          </EmblaCarouselItemWrapper>
          {/* {[
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
          ))} */}
        </div>
      </div>
      {/* indicator */}
      {/* <div
        className={clsx(
          'absolute bottom-[55px] hidden gap-1 p-[10px] sm:flex',
          'right-1/2 translate-x-1/2',
          'lg:right-[135px] lg:translate-x-0'
        )}
      >
        {scrollSnaps.map((snap, index) => (
          <button
            onClick={() => {
              scrollTo(index);
            }}
            onPointerEnter={() => {
              scrollTo(index);
            }}
            className="py-1"
            key={index}
          >
            <div
              className={clsx('h-[3px] w-8 rounded-full', {
                'bg-white': index === selectedIndex,
                'bg-white/40': index !== selectedIndex,
              })}
            ></div>
          </button>
        ))}
      </div> */}
    </div>
  );
}

export default function Hero() {
  return (
    <motion.section className={clsx('relative')}>
      <HeroBG />
      <div
        className={clsx(
          'pointer-events-none relative box-border flex',
          'h-screen w-fit items-center bg-gradient-to-r from-black/40  to-transparent',
          'pl-8 pr-10 pt-[70px]',
          'sm:min-h-[700px] sm:pl-20  sm:pr-40 sm:pt-[84px]'
        )}
      >
        <div className="max-w-[564px] flex-col gap-14 space-y-4 text-white">
          <div className="font-smiley text-[50px] leading-normal sm:text-[64px]">
            <p>We want you:</p>
            <p className="flex flex-wrap [&>span]:shrink-0">
              <span>我们在这里，</span>
              <span>等风也等你</span>
            </p>
          </div>
          <div className="front-medium space-y-4">
            <p>
              成立于2000年初，北邮人团队已经陪伴了北邮师生20年有余。我们一直致力于服务北邮人，为北邮师生提供更加便利的服务，一代代北邮人薪火传承北邮人的服务实干精神，用青春书写北邮人的辉煌历程。而现在，无论你是新生还是老司机，只要你怀揣梦想，热爱探索，我们都欢迎你的加入！北邮人总有适合你的地方，让我们一起书写精彩的青春篇章！We
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
          <div className="front-medium flex justify-center">
            <a
              className={clsx(
                'text pointer-events-auto mb-4 inline-block w-fit rounded-full bg-white/40 ',
                'px-10 py-5 sm:px-8 sm:py-4',
                'mr-0 sm:mr-auto '
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
