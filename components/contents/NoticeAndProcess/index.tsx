import ChalkTitle from '@/components/common/ChalkTitle';
import Notice from './Notice';
import Process from './Process';

export default function NoticeAndProcess() {
  return (
    <section className="mx-auto pt-12">
      <div className="mx-auto max-w-[1200px]">
        <ChalkTitle title="招新公告与招新流程" />
        <div className="mt-3 py-9">
          <Notice />
        </div>
      </div>
      <Process />
    </section>
  );
}
