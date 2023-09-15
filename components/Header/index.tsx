'use client';

import Logo from '@/assets/images/demo-logo.svg';
import clsx from 'clsx';

import { motion, useCycle } from 'framer-motion';

import { useEffect, useState } from 'react';
import style from './style.module.scss';
import MenuToggle from './MenuToggle';
import { links } from './link';
import AnimatedMenu from './AnimatedMenu';

function NavigationMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div>
      <nav className="hidden gap-16 text-base sm:flex">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <motion.nav
        className="relative block sm:hidden"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <AnimatedMenu />
        <MenuToggle
          className="rounded-full p-2"
          onBlur={() => {
            toggleOpen(0);
          }}
          toggle={() => toggleOpen()}
        />
      </motion.nav>
    </div>
  );
}

export default function Header() {
  const [isBlurBg, setIsBlurBg] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsBlurBg(scrollTop > window.innerHeight - 120);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="sticky top-0 z-30 -mb-[64px] w-full">
      <div
        className={clsx(
          'absolute top-0 z-[-1] h-full w-full transition-colors duration-500',
          {
            [style.BlurBG]: isBlurBg,
          }
        )}
      ></div>
      <div className="px-12 py-3">
        <div
          className={clsx(
            'flex items-center justify-between transition duration-500',
            {
              'text-white': !isBlurBg,
              'text-[#333]': isBlurBg,
            }
          )}
        >
          <Logo className={clsx('h-7', 'sm:h-10 sm:w-[150px]')} />
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}
