import ChalkTitle from '@/components/common/ChalkTitle';
import ServiceGroup from './ServiceGroup';

export default function Service() {
  return (
    <section className="mx-auto max-w-[1200px] pt-12">
      <ChalkTitle title="我们的产品" />
      <div className="mt-3 px-6 py-9">
        <ServiceGroup />
      </div>
    </section>
  );
}
