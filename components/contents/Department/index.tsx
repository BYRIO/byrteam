'use client';

import ChalkTitle from '@/components/common/ChalkTitle';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DepartmentCard, departments } from './departments';
import clsx from 'clsx';
import AnimatedSilk from './AnimatedSilk';

export default function Department() {
  const [selected, setSelected] = useState(0);

  return (
    <motion.section
      className="mx-auto max-w-[1200px] pt-12"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
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
                      'relative whitespace-nowrap text-2xl tracking-[3.6px] transition duration-500'
                    )}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <main className="relative grow">
            <AnimatePresence mode="wait">
              <motion.div
                className="h-full"
                key={departments[selected].name}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DepartmentCard {...departments[selected]} />
              </motion.div>
            </AnimatePresence>
            <div
              key={departments[selected].name + '-silk'}
              className="absolute bottom-0 right-0 translate-x-20 translate-y-16"
            >
              <AnimatedSilk />
            </div>
          </main>
        </div>
      </div>
    </motion.section>
  );
}
