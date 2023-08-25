import ChalkTitle from '@/components/common/ChalkTitle';
import Notice from './Notice';
import Process from './Process';

export default function NoticeAndProcess() {
  return (
    <section className="mx-auto max-w-[1200px] pt-12">
      <ChalkTitle title="招新公告与招新流程" />
      <div className="mt-3 py-9">
        <Notice />
        <Process />
      </div>
    </section>
  );
}
