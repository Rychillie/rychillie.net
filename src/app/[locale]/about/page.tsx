/* eslint-disable prefer-const */
import { Heading, MDX, Text } from '@/components/elements';
import { AnimateEnter, BackHome, Contact, Separator } from '@/components/layout';
import ImageSection from '@/components/layout/image-section';
import { getCarrer, getPages } from '@/lib/content';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Come get to know me a little more'
};

export default function About({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('About');
  const page = getPages(locale, 'about');

  let allJobs = getCarrer(locale).sort((a, b) => {
    const startA = new Date(a.metadata?.start).getFullYear();
    const startB = new Date(b.metadata?.start).getFullYear();
    return startB - startA;
  });

  return (
    <>
      <AnimateEnter>
        <header>
          <Heading>{t('title')}</Heading>
          <Text colour="secondary">{t('description')}</Text>
        </header>
      </AnimateEnter>
      <ImageSection locale={locale} />
      <AnimateEnter delay={0.6}>
        <section className="flex flex-col gap-4 py-6">
          <Suspense fallback={null}>
            <MDX source={page?.content} />
          </Suspense>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <section className="flex flex-col gap-6 py-6">
          <div>
            <Heading as="h2">{t('career')}</Heading>
            <Text colour="secondary">{t('intro')}</Text>
          </div>
          <div className="flex flex-col gap-8">
            <Text>{t('about')}</Text>

            <div className="flex w-full flex-col gap-6">
              {allJobs &&
                allJobs.map((job, index) => {
                  const start = new Date(job.metadata?.start).getFullYear();
                  const end =
                    job.metadata?.end === 'current'
                      ? t('current')
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
                          <Text
                            size="large"
                            weight="medium"
                            className="line-clamp-1 w-full flex-1 flex-row"
                          >
                            {job.metadata?.job}
                          </Text>
                          <Text size="small" colour="secondary">
                            {duration}
                          </Text>
                        </div>
                        <Text colour="secondary" className="line-clamp-1">
                          {job.metadata?.company}
                        </Text>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <Separator className="my-12" />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Contact locale={locale} />
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <span className="mt-24 flex">
          <BackHome locale={locale} />
        </span>
      </AnimateEnter>
    </>
  );
}
