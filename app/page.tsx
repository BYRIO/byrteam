'use client';

import AboutTeam from '@/components/contents/AboutTeam';
import Hero from '@/components/contents/Hero';
import Service from '@/components/contents/Service';
import Department from '@/components/contents/Department';
import JoinAndReason from '@/components/contents/JoinAndReason';
import SenpaiSaying from '@/components/contents/SenpaiSaying';
import NoticeAndProcess from '@/components/contents/NoticeAndProcess';

export default function Home() {
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
