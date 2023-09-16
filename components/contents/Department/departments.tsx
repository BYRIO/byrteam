import { FC, ReactNode, SVGProps } from 'react';
import IconArrowTR from '@/assets/images/departments/icon-arrow-tr.svg';
import IconArrowR from '@/assets/images/departments/icon-arrow-r.svg';
import IconTech from '@/assets/images/departments/icon-tech.svg';
import IconMedia from '@/assets/images/departments/icon-media.svg';
import IconProduct from '@/assets/images/departments/icon-product.svg';
import IconDesign from '@/assets/images/departments/icon-design.svg';

import clsx from 'clsx';

import MediaDescription from './MediaDescription';
import DesignDescription from './DesignDescription';
import TechDescription from './TechDescription';
import ProductDescription from './ProductDescription';

export function ChalkSpan({ content }: { content: string }) {
  return (
    <div className="relative block w-fit max-sm:-ml-3 max-sm:scale-75">
      <div
        className={clsx(
          'absolute bottom-0 h-3/5 w-full',
          'bg-gradient-to-r from-[#81e06acc] to-[#D9D9D900]'
        )}
      ></div>
      <h2 className="relative ml-2 text-[22px] font-semibold leading-tight">
        {content}
      </h2>
    </div>
  );
}

function RequirementGroup({
  title,
  requirement,
}: {
  title: string;
  requirement: Array<string>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-base font-medium leading-none text-black sm:text-lg">
        {title}
      </div>
      <div className="leading-[180%]">
        {requirement.map((item, index) => (
          <div
            key={`${title}-requirement-${index}`}
            className="text-sm sm:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function RequirementWrapper({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>;
}

/**
 * @deprecated
 */
export function DepartmentCard({
  name,
  description,
  requirement,
  optionalRequirement,
  work,
  icon: Icon,
}: {
  name: string;
  description: ReactNode;
  requirement: string[];
  optionalRequirement: string[];
  work: Array<{
    title: ReactNode;
    href: string;
    type?: 'primary' | 'secondary';
  }>;
  icon: FC<SVGProps<SVGGElement>>;
}) {
  if (name === '新媒体组') {
    return <MediaDescription />;
  }
  if (name === '设计组') {
    return <DesignDescription />;
  }
  if (name === '技术组') {
    return <TechDescription />;
  }
  if (name === '产品运营组') {
    return <ProductDescription />;
  }
  return (
    <div className="flex h-full flex-col gap-1 text-[#333] sm:flex-row sm:gap-0">
      <div className="basis-3/5 px-3 text-base leading-[180%] max-sm:mt-2 sm:text-xl [&>p]:indent-8">
        {description}
      </div>
      <hr className="mb-2 mt-2 sm:hidden"></hr>
      <div className="w-px self-stretch bg-black/20"></div>
      <div className="flex basis-2/5 flex-row px-3 max-sm:space-x-6 sm:flex-col sm:gap-6">
        <div className="min-w-[50%] space-y-4">
          <div className="whitespace-nowrap">
            <ChalkSpan content="岗位要求" />
          </div>
          {requirement && (
            <RequirementGroup title="基础要求：" requirement={requirement} />
          )}
          {optionalRequirement && (
            <RequirementGroup
              title="可选要求："
              requirement={optionalRequirement}
            />
          )}
        </div>

        {work && (
          <div className="sm:space-y-4">
            <ChalkSpan content="过往作品" />
            <div className="flex flex-wrap items-center max-sm:-ml-5 max-sm:-mt-5 max-sm:scale-75 [&>a]:shrink-0">
              {work.map(({ href = '', type = 'primary', title }, index) => (
                <a
                  key={href + index}
                  className={clsx(
                    'mb-[10px] mr-[10px] inline-block cursor-pointer rounded-full border-2 border-solid border-[#338EEC] px-4 py-[2px] text-lg',
                    {
                      'bg-white text-[#338EEC]': type === 'secondary',
                      'bg-[#338EEC] text-white': type === 'primary',
                    }
                  )}
                  href={href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const departments = [
  {
    name: '技术组',
    icon: IconTech,
    content: <TechDescription />,
  },
  {
    name: '新媒体组',
    icon: IconMedia,
    content: <MediaDescription />,
  },
  {
    name: '产品运营组',
    icon: IconProduct,
    content: <ProductDescription />,
  },
  {
    name: '设计组',
    icon: IconDesign,
    content: <DesignDescription />,
  },
] as Array<{
  name: string;
  icon: FC<SVGProps<SVGGElement>>;
  content: ReactNode;
}>;
