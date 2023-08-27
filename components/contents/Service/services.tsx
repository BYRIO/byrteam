import ServiceByrbbs from '@/assets/images/service/service-byrbbs.png';
import ServiceDekt from '@/assets/images/service/service-dekt.png';
import ServiceBitwarden from '@/assets/images/service/service-bitwarden.png';
import ServiceByrio from '@/assets/images/service/service-byrio.png';
import ServiceGitlab from '@/assets/images/service/service-gitlab.png';
import ServiceCodimd from '@/assets/images/service/service-codimd.png';
import ServiceMirrors from '@/assets/images/service/service-mirrors.png';
import ServiceOverleaf from '@/assets/images/service/service-overleaf.png';

import { ReactNode } from 'react';

const services = [
  {
    name: '北邮人论坛',
    image: ServiceByrbbs.src,
    description: (
      <>
        <p>
          作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛，建站于2003年9月26日。它是北邮人的温馨家园，支持网页和
          App 访问。超过 90% 的同学使用北邮人论坛获取信息。
        </p>
        <p>
          北邮人论坛（bbs.byr.cn）于2003年9月26日建站，论坛内版块全面，信息丰富，能够解答北邮人方方面面的问题，无论你是想咨询选课、发表论文、奖学金、考研保研出国校招的各类攻略，还是想谈天说地、恋爱征友、寻找出游攻略等，北邮人论坛都是最好的打开方式。
        </p>
        <p>
          18年前的九月，北邮人论坛进入了北邮人的世界，从此架起来无数北邮人沟通的桥梁。这里，是新生有问必答的百宝箱，是工作在外的学长学姐心灵的归属，是迷茫的同学微弱的指路光芒。
        </p>
      </>
    ),
    slogan: '“北邮人共同的精神原乡 对一代又一代的北邮人而言 既是逗号 也是起点”',
  },
  {
    name: '北邮第二课堂',
    image: ServiceDekt.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: 'Bitwarden',
    image: ServiceBitwarden.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: 'Byrio社区',
    image: ServiceByrio.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: 'Gitlab',
    image: ServiceGitlab.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: 'Codimd',
    image: ServiceCodimd.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: '北邮镜像源',
    image: ServiceMirrors.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: 'Overleaf',
    image: ServiceOverleaf.src,
    description: <></>,
    slogan: <></>,
  },
  {
    name: '研效体系',
    image: ServiceOverleaf.src,
    description: <></>,
    slogan: <></>,
  },
] as Array<{
  name: string;
  image: string;
  description: ReactNode;
  slogan: ReactNode;
}>;

export default services;
