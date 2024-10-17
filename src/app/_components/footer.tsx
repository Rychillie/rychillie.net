import CustomLink from './custom-link';

export default function Footer() {
  return (
    <div className="w-full pt-2 pb-8 lg:pb-0 flex-col lg:flex-row justify-start lg:justify-between text-neutral-600 dark:text-neutral-400 items-center gap-4 flex">
      <div className="text-sm">Copyright 2024 · Made by Rychillie</div>
      <div className="text-xs font-medium">
        <CustomLink
          href="/under-development"
          className="hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          Contact
        </CustomLink>{' '}
        ::{' '}
        <CustomLink
          href="/under-development"
          className="hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          Privacy
        </CustomLink>{' '}
        ::{' '}
        <CustomLink
          href="/under-development"
          className="hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          Terms
        </CustomLink>
      </div>
    </div>
  );
}
