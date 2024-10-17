import Link from 'next/link';
import Icon from './icon';

type Props = {
  href: string;
  name: string;
};

export default function BackTo({ href, name }: Props) {
  return (
    <Link
      href={href}
      className="flex gap-2 items-center justify-center h-7 w-full text-neutral-600 dark:text-neutral-400 text-base font-medium hover:text-neutral-800 dark:hover:text-neutral-200 group transition-all"
    >
      <Icon name="chevron-left" className="size-5 z-10" />
      <span className="lg:-translate-x-2 flex-1 lg:opacity-0 lg:group-hover:m-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition-all">
        {name}
      </span>
    </Link>
  );
}