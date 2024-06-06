import { Heading, MDX, Text } from '@/components/elements';
import { AnimateEnter, BackHome } from '@/components/layout';
import { getPages } from '@/lib/content';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Now',
  description: 'Personal + professional updates.'
};

export default function Now({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Now');
  const page = getPages(locale, 'now');

  return (
    <>
      <AnimateEnter>
        <header>
          <Heading>{t('title')}</Heading>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.4}>
        <section className="mb-8 mt-6 flex flex-col gap-6">
          <Suspense fallback={null}>
            <MDX source={page?.content} />
          </Suspense>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <Text colour="secondary" size="small">
          {t('updated')} <time dateTime="2023-12-11">{page?.metadata.updated}</time>
        </Text>
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <div className="mt-12 flex">
          <BackHome locale={locale} />
        </div>
      </AnimateEnter>
    </>
  );
}
