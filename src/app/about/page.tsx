import { BackTo, Contact, Footer, ImageSection } from '@/app/_components';
import MDX from '@/app/_components/MDXComponents';
import { getCarrer, getPages } from '@/lib/content';
import '@/styles/prose.css';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'A little more about who I am.'
};

export default function Page() {
  let page = getPages('en', 'about');
  let allJobs = getCarrer('en').sort((a, b) => {
    const startA = new Date(a.metadata?.start).getFullYear();
    const startB = new Date(b.metadata?.start).getFullYear();
    return startB - startA;
  });

  if (!page && !allJobs) {
    return;
  }

  return (
    <div className="min-h-screen py-16 lg:py-32 px-4 lg:px-0 mx-auto w-full max-w-4xl relative flex flex-col lg:grid lg:grid-cols-[1fr_minmax(640px,_1fr)_1fr] h-full gap-8 lg:gap-0">
      <aside className="relative">
        <div className="sticky top-32 z-">
          <BackTo href="/" name="Index" />
        </div>
      </aside>

      <div className="flex flex-col h-full justify-between gap-12">
        <main className="flex flex-col gap-4 relative">
          <header>
            <h1 className="text-neutral-950 dark:text-neutral-50 text-lg font-bold">About</h1>
            <span className="mb-3 flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
              A little more about who I am.
            </span>
          </header>

          <ImageSection />

          <section className="flex flex-col gap-4 py-6">
            {page && page.content && <MDX source={page.content} hasText />}
          </section>

          <section className="flex flex-col gap-6 py-6">
            <div>
              <h2 className="text-base font-medium text-balance">Career</h2>
              <p className="font-normal text-neutral-600 dark:text-neutral-400 text-base">
                10+ years of professional development experience.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <p>
                Frontend development specialist with experience in startups and large corporations,
                where I developed and led significant technological projects. Currently, I serve as
                a Frontend Developer at Wipro, focused on driving innovative technological
                solutions.
              </p>

              <div className="flex w-full flex-col gap-6">
                {allJobs &&
                  allJobs.map((job, index) => {
                    const start = new Date(job.metadata?.start).getFullYear();
                    const end =
                      job.metadata?.end === 'current'
                        ? 'current'
                        : new Date(job.metadata?.end).getFullYear();
                    const duration = start === end ? start : `${start} - ${end}`;

                    return (
                      <div key={index} className="flex w-full flex-row items-center gap-4">
                        {job.metadata?.image && (
                          <Image
                            src={job.metadata?.image}
                            alt={job.metadata?.company}
                            className="aspect-square rounded-full"
                            height={52}
                            width={52}
                          />
                        )}
                        <div className="flex w-full flex-col">
                          <div className="flex flex-1 flex-row items-center gap-2">
                            <p className="font-medium text-neutral-600 dark:text-neutral-400 text-lg line-clamp-1 w-full flex-1 flex-row">
                              {job.metadata?.job}
                            </p>
                            <p className="font-normal text-neutral-600 dark:text-neutral-400 text-sm">
                              {duration}
                            </p>
                          </div>
                          <p className="font-normal text-neutral-600 dark:text-neutral-400 text-base line-clamp-1">
                            {job.metadata?.company}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-1 mt-3" />

          <Contact />

          <hr className="border-neutral-200 dark:border-neutral-800 mt-6 mb-4" />
        </main>

        <Footer />
      </div>
    </div>
  );
}
