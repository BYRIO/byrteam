import clsx from 'clsx';

export default function ChalkTitle({ title }: { title: string }) {
  return (
    <div className="relative block w-fit">
      <div
        className={clsx(
          'absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12',
          'bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]'
        )}
      ></div>
      <h2 className="font-smiley relative text-3xl italic">{title}</h2>
    </div>
  );
}
