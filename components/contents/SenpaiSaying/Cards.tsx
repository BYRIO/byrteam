import Quote from '@/assets/images/senpai-saying/quote.svg';

import { ComponentProps, FC, HTMLProps, ReactNode, SVGProps } from 'react';
import clsx from 'clsx';

import { SenpaiMale, SenpaiFemale, SenpaiFemale2 } from './Senpais';

enum Sex {
  male = 0,
  female = 1,
}

const info = [
  {
    avatar: SenpaiMale,
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
    avatar: SenpaiFemale,
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
    avatar: SenpaiFemale2,
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
    avatar: SenpaiMale,
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
    avatar: SenpaiFemale,
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
    avatar: FC<HTMLProps<HTMLDivElement>>;
    sex: Sex;
    name: string;
    department: string;
    identity: string;
    achievements: ReactNode[];
    saying: ReactNode;
  } & HTMLProps<HTMLDivElement>
) {
  const {
    avatar: Avatar,
    name,
    department,
    identity,
    achievements,
    saying,
  } = props;
  return (
    <div className="relative min-w-0 flex-[0_0_723px] self-end pl-1">
      <div className="relative flex items-center">
        <div className="mx-10 scale-75 max-sm:-mt-7 sm:scale-100 ">
          <Avatar />
        </div>
        <div className="-mx-[100px] -mt-5 flex flex-col gap-5 sm:-mx-0 sm:mt-0">
          <div className="flex gap-2 max-sm:flex-col sm:items-end">
            <span className="font-smiley text-2xl">
              @{name}「{department}」
            </span>
            <span className="inline-block h-fit text-sm text-[#727272]">
              {identity}
            </span>
          </div>
          <div className="text-sm max-sm:text-xs">
            <div className="max-sm:-mx-[12px] max-sm:-mt-4">
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
            <div className="max-sm:-mx-[8px] sm:mt-2">
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
      <div className="-mt-[72px] mb-8 flex items-end justify-start max-sm:ml-32 max-sm:px-2 sm:justify-end">
        <div
          className={clsx(
            'max-w-[554px] rounded-2xl bg-white px-[50px] py-[45px]',
            'max-sm:max-w-[320px] max-sm:px-[30px] max-sm:py-[25px] '
          )}
        >
          {saying}
        </div>
        <Quote className="-mb-8 -ml-[46px] max-sm:-ml-[60px] max-sm:scale-50" />
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
