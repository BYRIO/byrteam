import DesignTitle from '@/assets/images/departments/design/icon-title.svg';
import IconSaturn from '@/assets/images/departments/design/icon-saturn.svg';
import clsx from 'clsx';

import { useRef } from 'react';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

import TextGraphic from '@/assets/images/departments/design/text-graphic.svg';
import TextProduct from '@/assets/images/departments/design/text-product.svg';
import TextInteraction from '@/assets/images/departments/design/text-interaction.svg';
import TextWhatever from '@/assets/images/departments/design/text-whatever.svg';

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div
      className={clsx(
        'flex flex-nowrap overflow-hidden whitespace-nowrap tracking-[-2px]',
        'text-6xl',
        'sm:text-7xl',
        'md:text-8xl',
        'lg:text-9xl'
      )}
    >
      <motion.div style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function NewDesignDescription() {
  return (
    <section
      className={clsx('relative h-full overflow-hidden', {
        'text-[#0067D1]': true,
      })}
    >
      <div
        className={clsx(
          'absolute inset-0 -mr-1 flex flex-col justify-center text-right font-poppins-800 italic opacity-20',
          'gap-12 text-6xl',
          'sm:gap-8 sm:text-7xl',
          'md:gap-5 md:text-8xl',
          'lg:justify-between lg:text-9xl'
        )}
      >
        <ParallaxText baseVelocity={-5}>GRAPHIC</ParallaxText>
        <ParallaxText baseVelocity={5}>PRODUCT</ParallaxText>
        <ParallaxText baseVelocity={-5}>INTERACTION</ParallaxText>
        <ParallaxText baseVelocity={5}>WHATEVER</ParallaxText>
      </div>
      {/* <div
        className={clsx(
          'absolute inset-0 -mr-1 flex flex-col flex-wrap justify-center text-right opacity-20',
          '[&>svg]:self-end',
          'gap-12 [&>svg]:max-h-12',
          'sm:gap-10 sm:[&>svg]:max-h-16',
          'md:gap-12 md:[&>svg]:max-h-20',
          'lg:justify-between lg:[&>svg]:max-h-24'
        )}
      >
        <TextGraphic />
        <TextProduct />
        <TextInteraction />
        <TextWhatever />
      </div> */}
      <article
        className={clsx(
          'relative h-full',
          'flex flex-col justify-between',
          'gap-8',
          'sm:gap-11',
          'md:gap-16'
        )}
      >
        <section>
          <div
            className={clsx(
              'flex flex-wrap items-center gap-1 border-[2px] border-[#0067D1] bg-white/40 p-[10px] md:gap-[10px]',
              'w-[250px] justify-center',
              'sm:w-fit'
            )}
          >
            <DesignTitle />
            <div className="flex flex-col items-center gap-[10px] px-[10px]">
              <IconSaturn />
              <span
                className={clsx(
                  'font-dfphei',
                  'text-xl tracking-[3.25px]',
                  'sm:text-4xl sm:tracking-[5.4px]'
                )}
              >
                design=__
              </span>
            </div>
          </div>
          <div className="w-fit p-[10px] font-dfphei text-5xl tracking-[7.2px]">
            *找一些新的人做新的__*
          </div>
          <div className="border-[2px] border-[#0067D1] bg-white/40 px-2 text-2xl leading-none tracking-[3px]">
            “把一种设想通过合理的规划、周密的计划、通过
            <span className="underline">各种方式</span>
            表达出来的过程”
          </div>
        </section>
        <section className={clsx('self-end', 'sm:mr-24')}>
          <div className="w-fit border-[2px] border-[#0067D1] bg-white/40 px-[9px] text-right text-[32px] leading-[125.5%] tracking-[4px]">
            <p>#坛服</p>
            <p>#文创</p>
            <p>#第二课堂</p>
          </div>
        </section>
        <section className="w-fit border-[2px] border-[#0067D1]">
          <div className="bg-white/40 text-base leading-[111%] tracking-[2.4px]">
            只要你喜欢__想了解__，你都可以来定义byrTeam的__
          </div>
          <div className="bg-white/40 text-base leading-[111%] tracking-[2.4px]">
            用你的作品和想法打动我们
          </div>
        </section>
      </article>
    </section>
  );
}
