import { BackTo, Footer, Listing } from '@/app/_components';
import { getBlogPosts } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Infrequent thoughts on technology, design and things in between.'
};

export default function Blog() {
  let allWritings = getBlogPosts('en');

  return (
    <div className="min-h-screen py-16 lg:py-32 p-4 lg:p-0 mx-auto w-full max-w-4xl relative flex flex-col lg:grid lg:grid-cols-[1fr_minmax(640px,_1fr)_1fr] h-full gap-8 lg:gap-0">
      <aside className="relative">
        <div className="sticky top-32">
          <BackTo href="/" name="Index" />
        </div>
      </aside>

      <div className="flex flex-col h-full justify-between gap-12">
        <main className="flex flex-col gap-10">
          <h1 className="text-neutral-950 dark:text-neutral-50 text-lg font-bold">Writing</h1>

          <div className="group/container transition-all">
            <Listing items={allWritings} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
