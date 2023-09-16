import HackerSVG from '@/assets/images/departments/tech/hacker.svg';

import styles from './style.module.scss';
import { HTMLProps, ReactNode } from 'react';
import clsx from 'clsx';

const binaryStrings = [
  '110011100001001 1000111111011001 1101',
  '111111110100100 100111010111010 1111111100001100',
  '111011010000100 111100000010100 110010101001000',
  '110011000101111 101001100010111 100100001010',
  '101001111010110 11000000000010 11011110',
  '1010 101111111000011 110000000000000 111000011',
  '101111111110001 1111111100001100 10110111000',
  '111011010000100 101001010100000 101000101100101',
  '110011100011111 101111110000101 10011110110',
  '111110100100010 11000000000001 10000001',
  '110001000011000 1000000111101010 11000100001',
  '101001111010110 11000000000010 11010000',
  '101111100000000 110001011010011 100011111101',
  '11000000000001 110001100010001 110001000011000',
  ' 101110111100101 100111101011100 110110000',
  '101001010100000 101000101100101 1100000000',
  '100111011101100 101011100101000 11000101',
  '110011110110110 110011110000100 11000000000',
  '1010 110001000010001 100111011101100',
  '110001100000001 11000000000010 11011110',
  '110010110111001 100111110111111 101011',
  '111111011000100 11000000000010 1101 1010 101111',
  '1110100010 111110100100010 110101110 1100',
  '0000000010 1101 1010 101111111000011 0101',
  '101011100101000 101001100010111 10010000101',
  '101110001000 110101101100011 101000001000',
  '110110000011011 101011011110100 111111110000',
  '110001100000001 11000000000010 1101 1010 1100',
  '110011100001001 1000111111011001 1101',
  '111111110100100 100111010111010 1111111100001100',
  '111011010000100 111100000010100 110010101001000',
  '110011000101111 101001100010111 100100001010',
  '101001111010110 11000000000010 11011110',
  '1010 101111111000011 110000000000000 111000011',
  '101111111110001 1111111100001100 10110111000',
];

function ChalkTitle({
  content,
  className,
}: { content: ReactNode } & HTMLProps<HTMLDivElement>) {
  return (
    <div className={className}>
      <div className={clsx('relative w-fit px-3')}>
        <div className="absolute inset-0 -skew-x-6 bg-[#0067D1]"></div>
        <span className="relative font-smiley text-lg leading-[134.5%] tracking-[0.18px] text-white">
          {content}
        </span>
      </div>
    </div>
  );
}

function BorderParagrahph({
  content,
  className,
}: { content: ReactNode } & HTMLProps<HTMLDivElement>) {
  return (
    <div className={className}>
      <p className="border border-[#0067D1] bg-white/40 text-xl font-semibold leading-[154%] tracking-[0.2px] text-[#0067D1]">
        {content}
      </p>
    </div>
  );
}

export default function TechDescription() {
  return (
    <section className="relative h-full">
      <div className="relative">
        <div className={styles.TechBG}>
          {binaryStrings.map((binaryString, index) => (
            <p key={index}>{binaryString}</p>
          ))}
        </div>
        <div className="absolute bottom-0">
          <HackerSVG />
          <ChalkTitle
            content={'下一个可能就是你。'}
            className="absolute bottom-24 left-0 hidden md:block"
          />
        </div>
      </div>
      <article className="absolute right-0 top-1/2 flex max-w-[600px] -translate-y-1/2 flex-col gap-12">
        <BorderParagrahph
          content={
            '在北邮，有这样一群人，他们专注于高性能、高体验的校内公共服务开发，为校内活动、师生便利提供技术支持'
          }
        />
        <ChalkTitle content={'我们是北邮人团队技术组'} />
        <BorderParagrahph
          content={
            '快捷方便的研效体系、敏捷健壮的基础架构、随意自在的工作氛围，我们在技术领域不断探索、挑战自我、开拓进取。心怀热忱，守正创新，技术组期待你的加入'
          }
        />
        <ChalkTitle
          content={'下一个可能就是你。'}
          className="absolute -bottom-12 block md:hidden"
        />
      </article>
    </section>
  );
}
