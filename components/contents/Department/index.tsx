'use client';

import ChalkTitle from '@/components/common/ChalkTitle';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { departments } from './departments';
import clsx from 'clsx';
import AnimatedSilk from './AnimatedSilk';
import { shuffle } from 'lodash';
import dynamic from 'next/dynamic';

function Department() {
  const [selected, setSelected] = useState(0);
  const shuffledDepartments = useMemo(() => shuffle(departments), []);
  return (
    <motion.section
      className={clsx('mx-auto max-w-[1280px] pt-12', 'px-4', 'sm:px-10')}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <ChalkTitle title="部门介绍" />
      <div className="mt-3 overflow-hidden py-3 sm:py-9">
        <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 sm:p-6 lg:flex-row">
          <nav className="rounded-xl bg-[#F5F5F5] p-3 sm:p-3 lg:p-6">
            <ul className="flex h-full justify-between sm:gap-4 lg:flex-col lg:gap-6">
              {shuffledDepartments.map(({ name, icon: Icon }, index) => (
                <li
                  key={`${name}-index`}
                  className={clsx(
                    'flex basis-1/4 cursor-pointer flex-col items-center justify-center sm:flex-row',
                    'gap-1',
                    'sm:gap-0',
                    {
                      'font-extrabold text-[#0067D1]': index === selected,
                      'text-[#A8A8A8] hover:text-zinc-500': index !== selected,
                    }
                  )}
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  <Icon className="block sm:hidden" width={24} height={24} />
                  <div
                    className={clsx(
                      'relative flex w-full items-center justify-center self-stretch text-center',
                      'sm:px-2 sm:py-6',
                      'lg:px-3 lg:py-10'
                    )}
                  >
                    {index === selected && (
                      <motion.div
                        layoutId="selectBG"
                        className={clsx(
                          'absolute inset-0 flex items-center justify-center rounded-xl bg-white'
                        )}
                      >
                        <Icon
                          className={clsx(
                            'hidden',
                            'sm:block sm:h-[64px]',
                            'lg:h-[78px]',
                            {
                              'text-[#0067D] opacity-20': index === selected,
                            }
                          )}
                        />
                      </motion.div>
                    )}
                    <span
                      className={clsx(
                        'relative whitespace-nowrap text-sm transition duration-500 sm:text-xl sm:tracking-[3.6px] lg:text-2xl'
                      )}
                    >
                      {name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <main className="relative min-w-0 grow">
            <AnimatePresence mode="wait">
              <motion.div
                className="h-full"
                key={shuffledDepartments[selected].name}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {shuffledDepartments[selected].content}
              </motion.div>
            </AnimatePresence>
            {/* {selected !== 3 && (
              <div
                key={departments[selected].name + '-silk'}
                className={clsx(
                  'pointer-events-none absolute',
                  'bottom-0 right-0 translate-x-20 translate-y-16 scale-100'
                )}
              >
                <AnimatedSilk />
              </div>
            )} */}
          </main>
        </div>
      </div>
    </motion.section>
  );
}

export default dynamic(() => Promise.resolve(Department), {
  ssr: false,
});
