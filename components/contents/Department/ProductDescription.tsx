import style from './style.module.scss';
import ProductBg from '@/assets/images/departments/product/product-bg.png';
import Image from 'next/image';

import clsx from 'clsx';

export function BlurSpan({ content }: { content: string }){
    return(
        <span className={clsx(
            'mt-5 text-[15px]',
            {
              [style.BlurBG]:true,
            }
        )}>
            {content}
        </span>
    )
}

export default function ProductDescription() {
  return (
    <div className='overflow-hidden flex flex-col relative w-[335px] h-[340px]'>
        
        <div className='absolute inset-0 flex items-center justify-center scale-150 z-0 '> 
            <Image
                className="scale-150 z-0"
                src={ProductBg}
                alt=""
            />
        </div>
        <div className='flex flex-col z-20 absolute -top-10 p-10'>
            <BlurSpan content="我们的日常工作就是负责对产品进行定义并进行需求分析绘制使用流程图，
                协调技术、设计部门推进项目开发进度。" />
            
            <BlurSpan content="收集师生需求&整合各类资源&撰写产品需求文档等相关文字材料" />
            
            <BlurSpan content="欢迎全新的你加入我们，一起构思新的产品，策划新的活动!" />
            
        </div>
        
        
    </div>

  );
}
