import clsx from 'clsx';

export default function Banner() {
  return (
    <div
      className={clsx(
        'flex h-14 items-center justify-center',
        'bg-gradient-[266deg] from-[#0e97ed] from-0% via-[#03d2fd] via-100% to-[#0485c6] to-[150%]',
        ' transition-all duration-200',
        'bg-[length:150%_150%] hover:bg-[50%] active:bg-[100%]',
        'select-none font-smiley font-semibold text-white'
      )}
    >
      内容正在上架中，每次点击都有新发现哦~
    </div>
  );
}
