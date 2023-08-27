'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

import ChalkTitle from '@/components/common/ChalkTitle';
import AnimatedCircle from './AnimatedCircle';
import services from './services';

import Underline from '@/assets/images/service/underline.svg';

import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
export default function Service() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'center',
      dragFree: true,
    }
    // [Autoplay({ delay: 2500 })]
  );
  
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
        <div className="flex flex-col gap-0 sm:gap-8">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-x gap-3  sm:ml-0 sm:gap-12 min-w-[1000px] -ml-[100px]">
              {services.map((service, index) => (
                <div
                  key={`service-${service.name}-${index}`}
                  className="relative cursor-pointer"
                  role="button"
                  onClick={() => {
                    setSelected(index);
                  }}
                  title={service.name}
                >
                  <div className='max-sm:hidden'>
                    <motion.img
                      src={service.image}
                      layout
                      width={index === selected ? 100 : 54}
                      alt={service.name}
                    />
                  </div>
                  <div className='sm:hidden'>
                    <motion.img
                      src={service.image}
                      layout
                      width={index === selected ? 75 : 54}
                      alt={service.name}
                    />
                  </div>
                  {index === selected && <AnimatedCircle />}
                </div>
              ))}
          
            </div>
          </div>
        </div>

          
          <div className="rounded-[18px] bg-white px-6 py-4">
            <AnimatePresence>
              <motion.div className="flex flex-col gap-2 self-stretch">
                <div className="flex items-center justify-between">
                  <motion.h3 className="inline-flex flex-col items-center text-2xl tracking-[2.88px]">
                    {services[selected].name}
                    <Underline />
                  </motion.h3>
                  <motion.span className="inline-block text-[#0067D1] opacity-80">
                    {services[selected].slogan}
                  </motion.span>
                </div>
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
