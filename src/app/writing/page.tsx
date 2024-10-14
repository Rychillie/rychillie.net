import { BackTo, Footer } from '@/app/_components';
import { getBlogPosts } from '@/lib/content';
import c from 'clsx';
import Link from 'next/link';

export default function Paget() {
  let allWritings = getBlogPosts('en');

  console.log(
    allWritings.map((writing) => {
      return {
        title: writing.metadata.title,
        slug: writing.slug,
        publishedAt: writing.metadata.publishedAt
      };
    })
  );

  return (
    <div className="py-16 lg:py-32 p-4 lg:p-0 mx-auto w-full max-w-4xl relative flex flex-col lg:grid lg:grid-cols-[1fr_minmax(640px,_1fr)_1fr] h-full gap-8 lg:gap-0">
      <aside>
        <BackTo href="/" name="Index" />
      </aside>

      <div className="flex flex-col h-full justify-between gap-12">
        <main className="flex flex-col gap-10">
          <h1 className="text-neutral-950 dark:text-neutral-50 text-lg font-bold">Writing</h1>

          <div className="group/container transition-all">
            {Object.entries(
              allWritings.reduce((acc: { [year: number]: any[] }, writing) => {
                const year = new Date(writing.metadata.publishedAt).getFullYear();
                if (!acc[year]) {
                  acc[year] = [];
                }
                acc[year].push(writing);
                return acc;
              }, {})
            )
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .map(([year, writings]) => (
                <div
                  key={year}
                  className="flex flex-col justify-start sm:flex-row w-full sm:justify-between border-t border-neutral-200 dark:border-neutral-800 sm:gap-20 group/list text-neutral-600 dark:text-neutral-400 transition-all"
                >
                  <h2 className="h-12 w-fit flex items-center justify-center text-sm">{year}</h2>
                  <div className="lg:max-w-lg w-full flex flex-col gap-1 last:pb-1">
                    {writings
                      .sort(
                        (a, b) =>
                          new Date(b.metadata.publishedAt).getTime() -
                          new Date(a.metadata.publishedAt).getTime()
                      )
                      .map((writing) => (
                        <Link
                          key={writing.slug}
                          href={`/writing/${writing.slug}`}
                          className={c(
                            'flex flex-row items-center justify-between py-3 border-t border-neutral-200 dark:border-neutral-800 first:border-t-0 group-last/list:border-b group/item transition-all gap-2'
                          )}
                        >
                          <span className="text-neutral-950 dark:text-neutral-50 group-hover/container:text-neutral-600 dark:group-hover/container:text-neutral-400 group-hover/container:group-hover/item:text-neutral-950 dark:group-hover/container:group-hover/item:text-neutral-50 transition-all w-full line-clamp-1">
                            {writing.metadata.title}
                          </span>
                          <span className="text-sm">
                            {new Date(writing.metadata.publishedAt).toLocaleDateString('pt-BR', {
                              month: '2-digit',
                              day: '2-digit'
                            })}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
