import SenpaiMale from '@/assets/images/senpai-saying/senpai-male.svg';
import SenpaiFemale from '@/assets/images/senpai-saying/senpai-female.svg';
import Quote from '@/assets/images/senpai-saying/quote.svg';

import { ComponentProps, FC, HTMLProps, ReactNode, SVGProps } from 'react';
import clsx from 'clsx';

enum Sex {
  male = 0,
  female = 1,
}

const info = [
  {
    sex: Sex.male,
    name: '好圆圆圆',
    department: '产品组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
      '编一些什么社会实践经历',
      '三好学生',
      <ChalkSpan key="十余项设计竞赛获奖" content="十余项设计竞赛获奖" />,
    ],
    saying:
      '作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛，建站于2003年9月26日。你只要在浏览器地址栏里输入 bbs.byr.cn 或者搜索“北邮人论坛”，就可以找到它，它是北邮人的温馨家园，支持网页和 App 访问。',
  },
  {
    sex: Sex.female,
    name: '好圆圆圆',
    department: '产品组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
      '编一些什么社会实践经历',
      '三好学生',
      <ChalkSpan key="十余项设计竞赛获奖" content="十余项设计竞赛获奖" />,
    ],
    saying:
      '作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛，建站于2003年9月26日。你只要在浏览器地址栏里输入 bbs.byr.cn 或者搜索“北邮人论坛”，就可以找到它，它是北邮人的温馨家园，支持网页和 App 访问。',
  },
  {
    sex: Sex.female,
    name: '好圆圆圆',
    department: '产品组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
      '编一些什么社会实践经历',
      '三好学生',
      <ChalkSpan key="十余项设计竞赛获奖" content="十余项设计竞赛获奖" />,
    ],
    saying:
      '作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛，建站于2003年9月26日。你只要在浏览器地址栏里输入 bbs.byr.cn 或者搜索“北邮人论坛”，就可以找到它，它是北邮人的温馨家园，支持网页和 App 访问。',
  },
  {
    sex: Sex.male,
    name: '好圆圆圆',
    department: '产品组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
      '编一些什么社会实践经历',
      '三好学生',
      <ChalkSpan key="十余项设计竞赛获奖" content="十余项设计竞赛获奖" />,
    ],
    saying:
      '作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛，建站于2003年9月26日。你只要在浏览器地址栏里输入 bbs.byr.cn 或者搜索“北邮人论坛”，就可以找到它，它是北邮人的温馨家园，支持网页和 App 访问。',
  },
  {
    sex: Sex.female,
    name: '好圆圆圆',
    department: '产品组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
      '编一些什么社会实践经历',
      '三好学生',
      <ChalkSpan key="十余项设计竞赛获奖" content="十余项设计竞赛获奖" />,
    ],
    saying:
      '作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛，建站于2003年9月26日。你只要在浏览器地址栏里输入 bbs.byr.cn 或者搜索“北邮人论坛”，就可以找到它，它是北邮人的温馨家园，支持网页和 App 访问。',
  },
] as Array<ComponentProps<typeof SenpaiCard>>;

function ChalkSpan({ content }: { content: string }) {
  return (
    <div className="relative block w-fit">
      <div
        className={clsx(
          'absolute bottom-0 h-4/5 w-full',
          'bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900]'
        )}
      ></div>
      <h2 className="relative ml-2">{content}</h2>
    </div>
  );
}

function SenpaiCard(
  props: {
    sex: Sex;
    name: string;
    department: string;
    identity: string;
    achievements: ReactNode[];
    saying: ReactNode;
  } & HTMLProps<HTMLDivElement>
) {
  const { sex, name, department, identity, achievements, saying } = props;
  const Avatar: FC<SVGProps<SVGGElement>> =
    sex === Sex.male ? SenpaiMale : SenpaiFemale;
  return (
    <div className="relative min-w-0 flex-[0_0_723px] self-end pl-1">
      <div className="relative flex items-center">
        <div className='scale-75 sm:scale-100'>
          <Avatar width={275} /> 
        </div>
        <div className="flex flex-col gap-5 -mx-10 sm:-mx-0">
          <div className="flex max-sm:flex-col sm:items-end gap-2">
            <span className="font-smiley text-2xl">
              @{name}「{department}」
            </span>
            <span className="inline-block h-fit text-sm text-[#727272]">
              {identity}
            </span>
          </div>
          <div className="text-sm">
            <div className='max-sm:-mt-4'>
              {achievements
                .slice(0, achievements.length / 2)
                .map((item, index) => (
                  <div
                    key={`${name}-achievement-${index}`}
                    className="ml-2 inline-block"
                  >
                    {item}
                  </div>
                ))}
            </div>
            <div className="mt-1">
              {achievements
                .slice(achievements.length / 2)
                .map((item, index) => (
                  <div
                    key={`${name}-achievement-${index * 2 + 1}`}
                    className="ml-2 inline-block"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[72px] mb-8 flex items-end justify-start sm:justify-end max-sm:ml-32">
        <div className={clsx(
          "max-w-[554px] rounded-2xl bg-white px-[50px] py-[45px]",
          "max-sm:max-w-[350px] max-sm:px-[30px] max-sm:py-[25px]"
        )}>
          {saying}
        </div>
        <Quote className="-mb-8 -ml-[46px]" />
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <>
      {info.map((item, index) => (
        <SenpaiCard {...item} key={item.name + '-' + index} />
      ))}
    </>
  );
}
