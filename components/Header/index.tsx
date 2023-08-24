'use client';

import Logo from '@/assets/images/demo-logo.svg';

import { useEffect, useState } from 'react';

function NavigationMenu() {
  return (
    <nav className="flex gap-16 text-base text-white">
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
      setIsBlurBg(scrollTop > window.innerHeight);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="fixed top-0 z-30 w-full">
      <div></div>
      <div className="px-12 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}
