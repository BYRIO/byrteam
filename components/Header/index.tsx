'use client';

import Logo from '@/assets/images/demo-logo.svg';
import clsx from 'clsx';

import { useEffect, useState } from 'react';

function NavigationMenu() {
  return (
    <nav className="flex gap-16 text-base">
      <a href="https://bbs.byr.cn/">北邮人论坛</a>
      <a href="https://byr.pt/">北邮人BT</a>
      <a href="https://byrio.org/">BYRIO技术社区</a>
    </nav>
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
    <header className="fixed top-0 z-30 w-full">
      <div
        className={clsx(
          'absolute top-0 z-[-1] h-full w-full transition duration-500',
          {
            'border-b bg-[#F5F5F5]/50 backdrop-blur-sm': isBlurBg,
          }
        )}
      ></div>
      <div className="px-12 py-3">
        <div
          className={clsx(
            'flex items-center justify-between transition duration-500',
            {
              'text-white': !isBlurBg,
              'text-black': isBlurBg,
            }
          )}
        >
          <Logo />
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}
