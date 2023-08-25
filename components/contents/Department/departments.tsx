import { ComponentProps, ReactNode } from 'react';
import IconArrowTR from '@/assets/images/departments/icon-arrow-tr.svg';
import IconArrowR from '@/assets/images/departments/icon-arrow-r.svg';
import clsx from 'clsx';

function ChalkSpan({ content }: { content: string }) {
  return (
    <div className="relative block w-fit">
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

function RequirementWrapper({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>;
}

export function DepartmentCard({
  name,
  description,
  requirement,
  optionalRequirement,
  work,
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
}) {
  return (
    <div className="flex text-[#333]">
      <div className="basis-1/2 px-6 text-xl leading-[180%] [&>p]:indent-8">
        {description}
      </div>
      <div className="h-full w-px bg-black/20"></div>
      <div className="flex basis-1/2 flex-col gap-6 px-6">
        <ChalkSpan content="岗位要求" />
        <div className="flex flex-col gap-1">
          <div className="text-lg font-medium leading-none text-black">
            基础要求：
          </div>
          <div className="leading-[180%]">
            {requirement.map((item, index) => (
              <div key={`${name}-requirement-${index}`}>{item}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-lg font-medium leading-none text-black">
            可选要求：
          </div>
          <div className="leading-[180%]">
            {optionalRequirement.map((item, index) => (
              <div key={`${name}-optional-requirement-${index}`}>{item}</div>
            ))}
          </div>
        </div>
        <ChalkSpan content="过往作品" />
        <div className="flex flex-wrap items-center [&>a]:shrink-0">
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
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const departments = [
  {
    name: '技术组',
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
        type: 'secondary',
      },
      {
        title: 'BYRBT',
        type: 'secondary',
      },
    ],
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
      {
        title: 'BYRBT',
      },
    ],
  },
  {
    name: '产品运营组',
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
  },
] as Array<ComponentProps<typeof DepartmentCard>>;
