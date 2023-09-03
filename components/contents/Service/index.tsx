'use client';

import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

import ChalkTitle from '@/components/common/ChalkTitle';
import AnimatedCircle from './AnimatedCircle';
import services from './services';

import Underline from '@/assets/images/service/underline.svg';
import IconArrowTR from '@/assets/images/departments/icon-arrow-tr.svg';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { flushSync } from 'react-dom';

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
const TWEEN_FACTOR = 3;

type ButtonGroup = {
  selected: number;
  className: string;
  onSelect: (index: number) => void;
};

// ref: https://www.embla-carousel.com/examples/predefined/#scale
function MobileButtonGroup({
  selected,
  onSelect: onButtonSelect,
  className,
}: ButtonGroup) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: false,
  });
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    onButtonSelect(emblaApi.selectedScrollSnap());
  }, []);
  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);
  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div className={clsx('relative', className)}>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4">
          {services.map((service, index) => (
            <div
              key={`service-${service.name}-${index}`}
              className="relative flex min-w-0 flex-[0_0_20%] items-center justify-center py-4 pt-3"
            >
              <div
                className="relative h-fit w-fit cursor-pointer"
                role="button"
                onClick={() => {
                  onButtonSelect(index);
                  emblaApi?.scrollTo(index);
                }}
                title={service.name}
                style={{
                  ...(tweenValues.length && {
                    transform: `scale(${tweenValues[index]})`,
                  }),
                }}
              >
                <img src={service.image} width={80} alt={service.name} />
                {index === selected && <AnimatedCircle />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopButtonGroup({ selected, onSelect, className }: ButtonGroup) {
  return (
    <div className={clsx('flex items-center justify-around', className)}>
      {services.map((service, index) => (
        <div
          key={`service-${service.name}-${index}`}
          className="relative cursor-pointer"
          role="button"
          onClick={() => {
            onSelect(index);
          }}
          title={service.name}
        >
          <motion.img
            src={service.image}
            layout
            width={index === selected ? 100 : 54}
            alt={service.name}
          />
          {index === selected && <AnimatedCircle />}
        </div>
      ))}
    </div>
  );
}

export default function Service() {
  const [selected, setSelected] = useState(0);
  return (
    <motion.section
      className={clsx('mx-auto max-w-[1280px] pt-12', 'px-4', 'sm:px-10')}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <ChalkTitle title="我们的产品" />
      <div className="mt-3">
        <div className="flex flex-col gap-6">
          <DesktopButtonGroup
            selected={selected}
            onSelect={setSelected}
            className="hidden lg:flex"
          />
          <MobileButtonGroup
            selected={selected}
            onSelect={setSelected}
            className="flex items-center lg:hidden"
          />
          <div className="rounded-[18px] bg-white px-6 py-4">
            <AnimatePresence>
              <motion.div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <motion.h3 className="inline-flex w-fit flex-col items-center text-2xl">
                    {services[selected].name}
                    <Underline />
                  </motion.h3>
                  {services[selected].url && (
                    <a
                      className="cursor-pointer p-2 text-[#0067D1]"
                      href={services[selected].url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconArrowTR />
                    </a>
                  )}
                </div>
                <motion.div className="text-[#0067D1] opacity-80">
                  {services[selected].slogan}
                </motion.div>
                <motion.article className="text-lg leading-[180%] [&>p]:indent-8">
                  {services[selected].description}
                </motion.article>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
