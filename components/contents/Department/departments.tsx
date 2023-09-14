import { ComponentProps, FC, ReactNode, SVGProps } from 'react';
import Image from 'next/image';
import IconArrowTR from '@/assets/images/departments/icon-arrow-tr.svg';
import IconArrowR from '@/assets/images/departments/icon-arrow-r.svg';
import IconTech from '@/assets/images/departments/icon-tech.svg';
import IconMedia from '@/assets/images/departments/icon-media.svg';
import IconProduct from '@/assets/images/departments/icon-product.svg';
import IconDesign from '@/assets/images/departments/icon-design.svg';
import ProductWorkImg from '@/assets/images/departments/product-work.png';
import TechDektImg from '@/assets/images/departments/tech-dekt.jpg';
import TechDektWebImg from '@/assets/images/departments/tech-dekt-web.jpg';

import clsx from 'clsx';

import MediaDescription from './MediaDescription';
import NewDesignDescription from './NewDesignDescription';

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
    return <NewDesignDescription />;
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
    description: (
      <>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Image
              className="object-contain"
              src={TechDektImg}
              alt="第二课堂小程序"
            />
          </div>
          <div className="basis-1/2">
            <Image
              className="object-contain"
              src={TechDektWebImg}
              alt="第二课堂网页端"
            />
          </div>
        </div>
        <p>
          在北邮，有这样一群人，他们专注于高性能、高体验的校内公共服务开发，为校内活动、师生便利提供技术支持。
        </p>
        <p>我们是BYR Team技术组。</p>
        <p>
          快捷方便的研效体系、敏捷健壮的基础架构、随意自在的工作氛围，我们在技术领域不断探索、挑战自我、开拓进取。
        </p>
        <p>心怀热忱，守正创新，技术组期待你的加入。</p>
      </>
    ),
    requirement: [
      '具有分享的热情，有良好沟通能力',
      '对技术实践具有热情，自驱力',
    ],
    optionalRequirement: [
      '了解开源共享精神',
      '熟悉Git使用',
      'Linux使用及其运维',
    ],
    work: [
      {
        title: (
          <RequirementWrapper>
            <>
              <span>BYRIO社区</span>
              <IconArrowTR />
            </>
          </RequirementWrapper>
        ),
        type: 'secondary',
        href: 'https://byrio.org/',
      },
      {
        title: 'Overleaf',
        href: 'https://overleaf.byrio.work/',
      },
      {
        title: '第二课堂小程序',
        href: 'https://dekt.bupt.edu.cn/qr?f=mp',
      },
      {
        title: (
          <RequirementWrapper>
            <>
              <IconArrowR />
              <span>Bitwarden</span>
            </>
          </RequirementWrapper>
        ),
        type: 'secondary',
        href: 'https://bitwarden.byrio.work/',
      },
    ],
    icon: IconTech,
  },
  {
    name: '新媒体组',
    description: (
      <>
        <p>这里汇集了研发、技术、运维、设计等各路大佬，是BYR坚强的技术后盾。</p>
        <p>
          我们负责技术项目研发，对团队现有产品进行维护和更新、保证系统正常运行。为学校活动、师生便利提供技术支持，构建学校内开源共享氛围，是每个技术人员的职责与使命。在保证服务稳定的同时，我们的技术实践激进而富有挑战性，对性能和体验的不断追求是我们每个人的目标。在这里，我们关注的是idea的落地与实施：不耗时间去画饼，一切奔着项目落地前进。在这里，我们关注的是技术的现实意义：不追求fancy的技术名称，只聚焦这个技术能带来多少帮助。在这里，我们有对代码质量的严格要求：重新定义“又不是不能用”。技术之外我们也积极交流进步，维护开源技术社区，乐于探讨一切有趣的技术话题，开源氛围的运营，离不开每个人的努力。
        </p>
      </>
    ),
    requirement: [
      '具有分享的热情，有良好沟通能力',
      '对技术实践具有热情，自驱力',
      '积极投入时间学习技术，在课内时间上有余裕',
      '具备最基础的代码能力（写过代码）或技术社群运营经验',
    ],
    optionalRequirement: [
      '了解开源共享精神',
      '熟悉Git使用',
      'Linux使用及其运维',
      '了解现代前后端技术及其思想',
      '能够运用任意语言进行前后端开发',
      '能够进行任意形式的开发',
    ],
    work: [
      {
        title: (
          <RequirementWrapper>
            <>
              <span>BYRIO社区</span>
              <IconArrowTR />
            </>
          </RequirementWrapper>
        ),
        type: 'secondary',
      },
      {
        title: 'Overleaf',
      },
      {
        title: '第二课堂小程序',
      },
      {
        title: (
          <RequirementWrapper>
            <>
              <IconArrowR />
              <span>Bitwarden</span>
            </>
          </RequirementWrapper>
        ),
      },
    ],
    icon: IconMedia,
  },
  {
    name: '产品运营组',
    description: (
      <div className="flex h-full flex-col justify-around">
        <Image src={ProductWorkImg} alt="第二课堂数据展示平台" />
        <p>
          我们的日常工作就是负责对产品进行定义并进行需求分析，绘制使用流程图，协调技术、设计部门推进项目开发进度。主要包括收集师生需求，整合各类资源，撰写产品需求文档等相关文字材料。欢迎全新的你加入我们，与我们一同构思新的产品，策划新的活动！
        </p>
      </div>
    ),
    requirement: [
      '学习能力强，能快速拓展触类旁通，有一定的文字材料撰写能力和计算机、原型设计基础',
      '有广泛使用各类APP的经验，了解产品开发流程，逻辑思维严谨，能快速领悟要点',
      '有团队精神，善于与人沟通协调',
    ],
    icon: IconProduct,
  },
  {
    name: '设计组',
    description: (
      <>
        <p>这里汇集了研发、技术、运维、设计等各路大佬，是BYR坚强的技术后盾。</p>
        <p>
          我们负责技术项目研发，对团队现有产品进行维护和更新、保证系统正常运行。为学校活动、师生便利提供技术支持，构建学校内开源共享氛围，是每个技术人员的职责与使命。在保证服务稳定的同时，我们的技术实践激进而富有挑战性，对性能和体验的不断追求是我们每个人的目标。在这里，我们关注的是idea的落地与实施：不耗时间去画饼，一切奔着项目落地前进。在这里，我们关注的是技术的现实意义：不追求fancy的技术名称，只聚焦这个技术能带来多少帮助。在这里，我们有对代码质量的严格要求：重新定义“又不是不能用”。技术之外我们也积极交流进步，维护开源技术社区，乐于探讨一切有趣的技术话题，开源氛围的运营，离不开每个人的努力。
        </p>
      </>
    ),
    requirement: [
      '具有分享的热情，有良好沟通能力',
      '对技术实践具有热情，自驱力',
      '积极投入时间学习技术，在课内时间上有余裕',
      '具备最基础的代码能力（写过代码）或技术社群运营经验',
    ],
    optionalRequirement: [
      '了解开源共享精神',
      '熟悉Git使用',
      'Linux使用及其运维',
      '了解现代前后端技术及其思想',
      '能够运用任意语言进行前后端开发',
      '能够进行任意形式的开发',
    ],
    work: [
      {
        title: (
          <RequirementWrapper>
            <>
              <span>BYRIO社区</span>
              <IconArrowTR />
            </>
          </RequirementWrapper>
        ),
        type: 'secondary',
      },
      {
        title: 'Overleaf',
      },
      {
        title: '第二课堂小程序',
      },
      {
        title: (
          <RequirementWrapper>
            <>
              <IconArrowR />
              <span>Bitwarden</span>
            </>
          </RequirementWrapper>
        ),
      },
      {
        title: 'BYRBT',
      },
    ],
    icon: IconDesign,
  },
] as Array<ComponentProps<typeof DepartmentCard>>;
