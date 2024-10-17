import Link from 'next/link';
import Icon from './icon';

const links = [
  { title: 'Writing', href: '/blog' },
  { title: 'Projects', href: '/under-development' },
  { title: 'Diary', href: '/under-development' }
];

export default function HomeLinks() {
  return (
    <div className="flex flex-col gap-2 pl-2 lg:pl-0 group">
      {links
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative text-neutral-950 dark:text-neutral-50 h-10 font-medium flex items-center justify-between transition-opacity group-hover:hover:opacity-100 group-hover:opacity-60 before:content-[''] before:absolute group before:hover:opacity-100 before:opacity-0 before:w-[calc(100%+8px)] before:h-full before:-ml-2 before:bg-neutral-200/40 dark:before:bg-neutral-800/40 before:rounded-md before:-z-10 before:transition-all"
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
