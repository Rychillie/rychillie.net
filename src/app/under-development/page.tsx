import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '../_components';

export const metadata: Metadata = {
  title: 'Sorry, this page is under development',
  description: 'Sorry, this page is under development'
};

export default function UnderDevelopment() {
  return (
    <main className="min-h-screen py-16 lg:py-32 p-4 lg:p-0 mx-auto w-full max-w-5xl relative flex items-center justify-center h-full flex-col gap-8">
      <h1 className="text-neutral-950 dark:text-neutral-50 text-2xl font-bold">
        Under Development
      </h1>

      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          This page is under development. Please come back later.
        </p>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 underline hover:underline-offset-4 decoration-neutral-500 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all underline-offset-2"
        >
          <Icon name="arrow-left" className="size-5 text-neutral-800 dark:text-neutral-200" /> Go
          back to home
        </Link>
      </div>
    </main>
  );
}
