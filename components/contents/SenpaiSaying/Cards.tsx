import Quote from '@/assets/images/senpai-saying/quote.svg';

import { ComponentProps, FC, HTMLProps, ReactNode, SVGProps } from 'react';
import clsx from 'clsx';

import {
  SenpaiMale,
  SenpaiFemale,
  SenpaiFemale2,
  SenpaiFemale3,
  SenpaiFemale4,
} from './Senpais';

enum Sex {
  male = 0,
  female = 1,
}

const info = [
  {
    avatar: SenpaiMale,
    sex: Sex.male,
    name: 'Makiras',
    department: '技术组',
    identity: '18级-计算机学院',
    achievements: [
      '前技术组划水负责人',
      <ChalkSpan key="国奖获得者" content="中科院在读博士" />,
      <ChalkSpan key="十余项设计竞赛获奖" content="初创&大厂实习" />,
      '人工SMT&BGA平台',
    ],
    saying:
      '在这里可以接触各路神仙，挑战各种问题，发展各式能力，探索各类可能。一个自驱的团队可以帮你能力与乐趣两开花，解决现实问题的同时丰富你的履历。如果你觉得 [这里忘了] 就去建设它，那这里就是最适合的地方，改变北邮的机会正触手可及！It’s now or never !',
  },
  {
    avatar: SenpaiMale,
    sex: Sex.male,
    name: 'zekin',
    department: '技术组',
    identity: '22级-计算机学院',
    achievements: [
      <ChalkSpan key="后端" content="北邮摸鱼硕士" />,
      '大厂实习',
      '救火队长',
      <ChalkSpan key="架构" content="各类竞赛奖项" />,
    ],
    saying:
      '从构建处理器的第一个门电路开始……到串联起每一个北邮人的计算机网络……再到服务北邮人的各种服务，在这里你可以体验计算机的方方面面。现在，开启你最伟大的探索吧：从计算机体系结构到计算机网络技术实践。',
  },
  {
    avatar: SenpaiFemale3,
    sex: Sex.female,
    name: '+1',
    department: '新媒体组',
    identity: '17级-数字媒体设计学院',
    achievements: [
      <ChalkSpan
        key="北邮人产品设计新媒体前负责人"
        content="北邮人产品设计新媒体前负责人"
      />,
      '活力研究生',
      <ChalkSpan
        key="退休老干部(除了技术啥都干)"
        content="退休老干部(除了技术啥都干)"
      />,
    ],
    saying: (
      <p>
        BYR Team在北邮是一个响当当的名号，在这里确实认识了很多
        <b>技术巨巨、设计大佬、运营鬼才</b>
        。重要的是大家都有<b>有趣而自由的灵魂</b>
        ，团队也有供大家自由创作和发挥才能的空间。可能有些组织退出了就不再联系，但加入BYR
        Team，就会一直都是BYR Team的一员。我们有自己的传承，我们拥抱新人。
      </p>
    ),
  },
  {
    avatar: SenpaiFemale4,
    sex: Sex.female,
    name: 'momo',
    department: '新媒体组',
    identity: '21级-网络空间安全学院',
    achievements: [
      <ChalkSpan key="永远年轻的大三学姐^^" content="永远年轻的大三学姐^^" />,
      '可进可退可盐可甜',
      '除了工科摄影遛狗插花啥都干',
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
    ],
    saying: (
      <p>
        年级（纪）越大，BYR
        Team越成为我的快乐老家，可可爱爱的学妹，温温柔柔的学弟，酷酷飒飒的老板老板娘以及一些可爱的小碎嘴子。
        <b>成年人的生活太需要这样的轻松和志趣</b>
        ，我们是线上的好友和伙伴，也是线下的小姐妹、好朋友。如果一定要用一个词来形容我们，那便是
        <b>松弛与理想并存</b>吧。
      </p>
    ),
  },
  {
    avatar: SenpaiMale,
    sex: Sex.male,
    name: '好圆圆圆',
    department: '产品组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      <ChalkSpan key="国奖获得者" content="国奖获得者" />,
      '支教团美术老师一枚',
      '德艺双馨',
      <ChalkSpan key="十余项设计竞赛获奖" content="十余项设计竞赛获奖" />,
    ],
    saying:
      '在北邮人团队，你会收获亲自设计的项目上线服务全体北邮人的机会，你会收获为同一目标努力工作的好友，欢迎你加入北邮人团队大家庭，收获属于自己的未来！',
  },
  {
    avatar: SenpaiFemale2,
    sex: Sex.female,
    name: 'Sprr',
    department: '设计组',
    identity: '20级-数字媒体设计学院',
    achievements: [
      '三好学生',
      <ChalkSpan key="国奖获得者" content="智育top1" />,
      <ChalkSpan key="国奖获得者" content="没有滑板的铲屎官不是好设计师" />,
      '',
    ],
    saying:
      '这里有最自由和包容的土壤，有最可爱和有趣的灵魂。发现问题、设计构思、解决问题。在北邮人，让设计真正的落地，服务更多的人。',
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
            'flex flex-auto flex-col items-center justify-center',
            'm-2 min-h-[300px] max-w-[554px] rounded-2xl bg-white p-4 px-[50px] py-[45px] sm:min-h-[230px]',
            'max-sm:max-w-[320px] max-sm:px-[30px] max-sm:py-[25px]'
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
