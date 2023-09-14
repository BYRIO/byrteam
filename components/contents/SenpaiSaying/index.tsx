'use client';

import ChalkTitle from '@/components/common/ChalkTitle';
import Cards from './Cards';
import IconArrow from '@/assets/images/senpai-saying/icon-arrow.svg';
import { motion } from 'framer-motion';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

export default function SenpaiSaying() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'center',
      containScroll: false,
    }
    // [Autoplay({ delay: 2500 })]
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);
  return (
    <motion.section
      className="mx-auto pt-12"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className={clsx('mx-auto max-w-[1280px]', 'px-4', 'sm:px-10')}>
        <ChalkTitle title="学长学姐说" />
      </div>

      <div className="mt-3 py-3 sm:py-9 h-fit">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="ml-32 flex touch-pan-y gap-6 sm:ml-0 sm:gap-12">
              <Cards />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F5F5F5] to-transparent max-sm:hidden"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l  from-[#F5F5F5] to-transparent max-sm:hidden"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-1/2 flex translate-y-1/2 justify-between sm:bottom-2 sm:right-20 sm:translate-y-0 sm:justify-end sm:gap-8 [&>button]:pointer-events-auto">
            <button
              className={clsx('scale-x-[-1] rounded-full p-3 sm:shadow-md', {
                'text-[#83838] sm:bg-white sm:hover:bg-[#175DDC] sm:hover:text-white':
                  !prevBtnDisabled,
                'cursor-not-allowed text-zinc-400 sm:bg-zinc-300':
                  prevBtnDisabled,
              })}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            >
              <IconArrow />
            </button>
            <button
              className={clsx('rounded-full p-3 sm:shadow-md', {
                'text-[#83838] sm:bg-white sm:text-[#838383] sm:hover:bg-[#175DDC] sm:hover:text-white':
                  !nextBtnDisabled,
                'cursor-not-allowed text-zinc-400 sm:bg-zinc-300':
                  nextBtnDisabled,
              })}
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            >
              <IconArrow />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
