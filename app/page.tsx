'use client';

import AboutTeam from '@/components/contents/AboutTeam';
import Hero from '@/components/contents/Hero';
import Service from '@/components/contents/Service';
import { ThirdScreen } from '@/components/contents/ThirdScreen';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeam />
      <Service />
      <ThirdScreen />
    </>
  );
}
