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
      <div className="mx-auto max-w-[1200px]">
        <ChalkTitle title="学长学姐说" />
      </div>

      <div className="mt-3 py-9">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-12 ">
              <Cards />
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F5F5F5] to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/3  bg-gradient-to-l from-[#F5F5F5] to-transparent"></div>
          
          <div className="flex bottom-2 gap-[10rem] max-sm:justify-center sm:absolute sm:right-20 sm:gap-8">
            <button
              className={clsx('scale-x-[-1] rounded-full p-3 shadow-md', {
                'bg-white text-[#838383] hover:bg-[#175DDC] hover:text-white': !prevBtnDisabled,
                'cursor-not-allowed bg-zinc-300 text-zinc-400': prevBtnDisabled,
              })}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            >
              <IconArrow />
            </button>
            <button
              className={clsx('rounded-full p-3 shadow-md', {
                'bg-white text-[#838383] hover:bg-[#175DDC] hover:text-white': !nextBtnDisabled,
                'cursor-not-allowed bg-zinc-300 text-zinc-400': nextBtnDisabled,
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
