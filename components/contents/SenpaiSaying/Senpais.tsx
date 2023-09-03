import SenpaiMaleIcon from '@/assets/images/senpai-saying/senpai-male.svg';
import SenpaiFemaleIcon from '@/assets/images/senpai-saying/senpai-female.svg';
import SenpaiFemale2Icon from '@/assets/images/senpai-saying/senpai-female-2.svg';

export function SenpaiMale() {
  return (
    <div>
      <SenpaiMaleIcon width={275} />
    </div>
  );
}
export function SenpaiFemale() {
  return (
    <div>
      <SenpaiFemaleIcon width={275} />
    </div>
  );
}
export function SenpaiFemale2() {
  return (
    <div className="my-8">
      <SenpaiFemale2Icon width={275} />
    </div>
  );
}
