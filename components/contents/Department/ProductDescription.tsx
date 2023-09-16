import style from './style.module.scss';
import ProductBg from '@/assets/images/departments/product/product-bg.png';
import Image from 'next/image';

import clsx from 'clsx';
import { HTMLProps } from 'react';

export function BlurSpan({
  content,
  className,
}: { content: string } & HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        'w-fit rounded-lg p-[10px] text-lg tracking-[3.6px] text-[#333] sm:text-2xl',
        style.BlurBG,
        className
      )}
    >
      {content}
    </span>
  );
}

export default function ProductDescription() {
  return (
    <div
      className={clsx(
        'relative flex h-full min-h-[548px] w-full flex-col overflow-hidden',
        style.ProductBG
      )}
    >
      <div className="mt-auto flex flex-col items-end gap-8 px-[25px] py-[50px]">
        <BlurSpan
          content="我们的日常工作就是负责对产品进行定义并进行需求分析绘制使用流程图，
                协调技术、设计部门推进项目开发进度。"
          className="max-w-[528px]"
        />
        <BlurSpan content="收集师生需求&整合各类资源&撰写产品需求文档等相关文字材料" />
        <BlurSpan
          content="欢迎全新的你加入我们，一起构思新的产品，策划新的活动!"
          className="max-w-[458px]"
        />
      </div>
    </div>
  );
}
