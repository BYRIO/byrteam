'use client';

import AboutTeam from '@/components/contents/AboutTeam';
import Hero from '@/components/contents/Hero';
import Service from '@/components/contents/Service';
import Department from '@/components/contents/Department';
import JoinAndReason from '@/components/contents/JoinAndReason';
import SenpaiSaying from '@/components/contents/SenpaiSaying';
import NoticeAndProcess from '@/components/contents/NoticeAndProcess';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <AboutTeam />
      <Service />
      <Department />
      <JoinAndReason />
      <SenpaiSaying />
      <NoticeAndProcess />
    </>
  );
}
