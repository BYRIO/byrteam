import DesignTitle from '@/assets/images/departments/design/icon-title.svg';
import IconSaturn from '@/assets/images/departments/design/icon-saturn.svg';
import clsx from 'clsx';

export default function NewDesignDescription() {
  return (
    <section
      className={clsx('relative h-full', {
        'text-[#0067D1]': true,
      })}
    >
      <div
        className={clsx(
          'absolute inset-0 -mr-1 flex flex-col justify-center text-right font-poppins-800 italic opacity-20',
          'gap-5 text-6xl',
          'sm:gap-5 sm:text-7xl',
          'md:gap-5 md:text-8xl',
          'lg:justify-between lg:text-9xl'
        )}
      >
        <div>GRAPHIC</div>
        <div>PRODUCT</div>
        <div>INTERACTION</div>
        <div>WHATEVER</div>
      </div>
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
