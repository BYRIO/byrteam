'use client';

import ChalkTitle from '@/components/common/ChalkTitle';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { departments } from './departments';
import clsx from 'clsx';

export default function Department() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto max-w-[1200px] pt-12">
      <ChalkTitle title="部门介绍" />
      <div className="mt-3 py-9">
        <div className="flex gap-3 rounded-2xl bg-white p-6">
          <nav className="rounded-xl bg-[#F5F5F5] p-6">
            <ul className="flex flex-col gap-6">
              {departments.map((item, index) => (
                <li
                  key={`${item.name}-index`}
                  className={clsx(
                    'relative flex cursor-pointer items-center justify-center px-3 py-14',
                    {
                      'font-extrabold text-[#0067D1]': index === selected,
                      'text-[#A8A8A8] hover:text-zinc-500': index !== selected,
                    }
                  )}
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  {index === selected && (
                    <motion.div
                      layoutId="selectBG"
                      className="absolute inset-0 rounded-xl bg-white"
                    ></motion.div>
                  )}
                  <span
                    className={clsx(
                      'relative text-2xl tracking-[3.6px] transition duration-500'
                    )}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <main className="grow">
            <AnimatePresence mode="wait">
              <motion.div
                className="h-full"
                key={departments[selected].name}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex h-full items-center justify-center">
                  动态效果示例{['🍅', '🥬', '🧀', '🥕'][selected]}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
}
