import DesignBg from '@/assets/images/departments/design-bg.svg';
import AnimatedDesignBg from './AnimatedDesignBg';
import { ChalkSpan } from './departments';

export default function DesignDescription() {
  return (
    <div className="relative flex min-h-full flex-col sm:flex-row sm:gap-6 ">
      <AnimatedDesignBg className="absolute bottom-0 h-fit w-full" />
      <div className="relative basis-8/12"></div>
      <div className="relative basis-4/12 self-end">
        <div className="flex min-w-[50%] flex-col space-y-4 pb-20 sm:pb-0">
          <div className="whitespace-nowrap">
            <ChalkSpan content="部门简介" />
          </div>
          <span>
            叮咚~北邮人“第一官方”设计与美学博主——设计组在此。我们每天和设计打交道，平面设计、交互设计、UI设计是我们的工作。交互原型设计、喷绘手册等宣传品、微信推送和H5制作，这些对我们来说都不在话下。只要你热爱设计追逐美学，在这里你会有一个巨大的舞台去燃烧你的小宇宙，你将收获身为一个设计人的骄傲与幸福。
          </span>
        </div>
      </div>
    </div>
  );
}
