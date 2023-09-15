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
import DesignDescription from './NewDesignDescription';

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
  // if (name === '新媒体组') {
  //   return <MediaDescription />;
  // }
  if (name === '设计组') {
    return <DesignDescription />;
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
        <p>“种草坪” “趣味盒” /“论坛速报” “遇荐”/以及../每学期的坛服征集</p>
        <p>
          我们提供一个平台，让你写你所想，让你的文思自由游荡于平平仄仄之中，让你的文段出现在大大小小的显示屏上。为微信公众号、官方微博提供各类文案是我们工作的日常。将一个一个的方块字巧妙组合，再镶在精心设计的背景布上是我们新媒体青年最大的乐趣。与我们共事，你可以感受到思维碰撞的乐趣。快来加入我们，将你的奇思妙想展现在我们的推送中，把你的生活体悟分享在我们的微博上。
        </p>
      </>
    ),
    requirement: [
      '对微信公众号和微博运营感兴趣，有原创能力或创新意识',
      '有一定的文字语言功底与素养，具有一定的审美能力，能探寻优秀的主题与帖子',
      '有团队意识，乐于奉献，有责任感，愿意投入时间和经历开展工作和学习',
    ],
    optionalRequirement: [
      '有创意和脑洞，能构思优秀的主题，或能根据主题原创文案',
      '了解Photoshop等软件，有一定的PS基础',
      '有公众号或微博运营经验',
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
        <p>
          叮咚~北邮人“第一官方”设计与美学博主——设计/美工组在此。我们的作品包括Banner、海报、台历、周边、界面、坛服、毕业衫、新生服……
        </p>
        <p>
          我们每天和设计打交道，平面设计、交互设计、UI设计是我们的工作。交互原型设计、喷绘手册等宣传品、微信推送和H5制作，这些对我们来说都不在话下。只要你热爱设计追逐美学，在这里你会有一个巨大的舞台去燃烧你的小宇宙，你将收获身为一个美工人的骄傲与幸福。
        </p>
      </>
    ),
    requirement: [
      '熟悉Photoshop、Illustrator、XD、Sketch等软件，掌握设计技巧',
      '主动性高，善于沟通、耐心细致，能准确表达设计思路，有较强的创意设计和色彩搭配能力',
      '有一定的项目经验，认真听取修改意见',
    ],
    icon: IconDesign,
  },
] as Array<ComponentProps<typeof DepartmentCard>>;
