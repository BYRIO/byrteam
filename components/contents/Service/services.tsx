import ServiceByrbbs from '@/assets/images/service/service-byrbbs.png';
import ServiceDekt from '@/assets/images/service/service-dekt.png';
import ServiceBitwarden from '@/assets/images/service/service-bitwarden.png';
import ServiceByrio from '@/assets/images/service/service-byrio.png';
import ServiceGitlab from '@/assets/images/service/service-gitlab.png';
import ServiceCodimd from '@/assets/images/service/service-codimd.png';
import ServiceMirrors from '@/assets/images/service/service-mirrors.png';
import ServiceOverleaf from '@/assets/images/service/service-overleaf.png';
import ServiceEfficiency from '@/assets/images/service/service-efficiency.png';

import { ReactNode } from 'react';

const services = [
  {
    name: '北邮人论坛',
    image: ServiceByrbbs.src,
    description: (
      <>
        <p>
          作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛。建站于2003年9月26日，它是北邮人的温馨家园，支持网页和
          App 访问。超过 90% 的同学使用北邮人论坛获取信息。
        </p>
        {/* <p>
          北邮人论坛（bbs.byr.cn）于2003年9月26日建站，论坛内版块全面，信息丰富，能够解答北邮人方方面面的问题，无论你是想咨询选课、发表论文、奖学金、考研保研出国校招的各类攻略，还是想谈天说地、恋爱征友、寻找出游攻略等，北邮人论坛都是最好的打开方式。
        </p>
        <p>
          18年前的九月，北邮人论坛进入了北邮人的世界，从此架起来无数北邮人沟通的桥梁。这里，是新生有问必答的百宝箱，是工作在外的学长学姐心灵的归属，是迷茫的同学微弱的指路光芒。
        </p> */}
      </>
    ),
    slogan: '“北邮人共同的精神原乡 对一代又一代的北邮人而言 既是逗号 也是起点”',
    url: 'https://bbs.byr.cn',
  },
  {
    name: '北邮第二课堂',
    image: ServiceDekt.src,
    description: (
      <>
        <p>
          北邮第二课堂主要通过活动申请、管理、发布、报名、签到、评价等功能记录学生在第一课堂之外的活动，对学生综合素质进行评定，生成用户画像帮助同学们正确了解自身优势、弥补自身不足，并为学校决策提供科学依据。
        </p>
        <p></p>
      </>
    ),
    slogan: <>“我们致力于保障师生参加活动的体验”</>,
    url: 'https://dekt.bupt.edu.cn/qr?f=mp',
  },
  {
    name: 'Bitwarden',
    image: ServiceBitwarden.src,
    description: (
      <>
        <p>
          Bitwarden是一款自由且开源的密码管理服务，用户可在加密的保管库中存储敏感信息。Bitwarden平台提供有多种客户端应用程序，包括网页用户界面、桌面应用，浏览器扩展、移动应用以及命令行界面。Bitwarden提供云端托管服务，并支持自行部署解决方案。
        </p>
      </>
    ),
    slogan: <>“自从用了bitwarden，我再也不需要记密码了！”</>,
    url: 'https://bitwarden.byrio.work',
  },
  {
    name: 'Byrio社区',
    image: ServiceByrio.src,
    description: (
      <>
        <p>
          BYRIOSC是一个围绕互联网技术与开源文化，主题涵盖科技、开发、设计、媒体，由开发者和创意工作者组成的线上交流、线下活动的学生社区。我们力求吸引富有热情和兴趣的开发者、创造者们加入，凝聚北邮各大学生技术组织的力量，建设成为最富有活力和创造力的学生技术社区。
        </p>
      </>
    ),
    slogan: <>“FOR HACKER, GEEK & CREATOR LIKE YOU”</>,
    url: 'https://byrio.org',
  },
  {
    name: 'Gitlab',
    image: ServiceGitlab.src,
    description: (
      <>
        <p>
          GitLab是由GitLab公司开发的、基于Git的集成软件开发平台。另外，GitLab且具有wiki以及在线编辑、issue跟踪功能、CI/CD等功能。
        </p>
      </>
    ),
    slogan: <>“CI/CD真是太好用了.jpg”</>,
    url: 'https://git.byr.moe',
  },
  {
    name: 'Codimd',
    image: ServiceCodimd.src,
    description: (
      <>
        <p>
          CodiMD是一个开源的实时协作markdown笔记本。它可以让你在网页上编辑markdown笔记，并且可以实时预览。你可以邀请其他人来协作编辑笔记，也可以将笔记分享给其他人。
        </p>
      </>
    ),
    slogan: <>“Markdown了解一下！”</>,
    url: 'https://md.byr.moe',
  },
  {
    name: '开源镜像服务',
    image: ServiceMirrors.src,
    description: (
      <>
        <p>
          当你还在为pip install, go add, cargo build, npm
          install发愁的时候，可以使用这个。
          <a className="ml-4 italic underline" href="https://mirrors.byr.ink">
            link
          </a>
        </p>
        <p>
          如果你需要linux相关的镜像源还可以使用这个。
          <a
            className="ml-4 italic underline"
            href="https://mirrors.bupt.edu.cn"
          >
            link
          </a>
        </p>
      </>
    ),
    slogan: <>“一个字：快！”</>,
  },
  {
    name: 'Overleaf',
    image: ServiceOverleaf.src,
    description: (
      <>
        <p>
          Overleaf是一个云端协作式LaTeX编辑器，可用于编写和发布论文。这一编辑器与很多科学杂志出版商有合作关系，不但提供官方期刊的LaTeX模板，还能直接将文件提交至这些出版社。
        </p>
      </>
    ),
    slogan: <>“科研必备”</>,
    url: 'https://overleaf.byrio.work/',
  },
  {
    name: '研效体系',
    image: ServiceEfficiency.src,
    description: (
      <>
        我们拥有比肩大厂的研效体系，blazing
        fast的CI/CD流程，超丝滑的docker部署方案。
      </>
    ),
    slogan: <>“自动化部署什么的真是太酷了！”</>,
  },
] as Array<{
  name: string;
  image: string;
  description: ReactNode;
  slogan: ReactNode;
  url?: string;
}>;

export default services;
