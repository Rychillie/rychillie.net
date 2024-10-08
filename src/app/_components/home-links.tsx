import { Icon } from '@/app/_components';
import Link from 'next/link';

const links = [
  { title: 'Writing', href: '#' },
  { title: 'Projects', href: '#' },
  { title: 'Diary', href: '#' }
];

export default function HomeLinks() {
  return (
    <div className="flex flex-col gap-2 pl-2 lg:pl-0 group">
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="relative text-neutrl-950 dark:text-neutral-50 h-10 font-medium flex items-center justify-between transition-opacity group-hover:hover:opacity-100 group-hover:opacity-60 before:content-[''] before:absolute group before:hover:opacity-100 before:opacity-0 before:w-[calc(100%+8px)] before:h-full before:-ml-2 before:bg-neutral-200/40 dark:before:bg-neutral-800/40 before:rounded-md before:-z-10 before:transition-all"
        >
          {item.title}
          <div className="size-10 flex items-center justify-center">
            <Icon name="chevron-right" className="size-6" />
          </div>
        </Link>
      ))}
    </div>
  );
}