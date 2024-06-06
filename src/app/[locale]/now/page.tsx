import { Heading, MDX, Text } from '@/components/elements';
import { AnimateEnter, BackHome } from '@/components/layout';
import { getPages } from '@/lib/content';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Now' });

  return {
    title: t('title'),
    description: t('description')
  };
}

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
          <Suspense>
            <MDX source={page?.content} hasText />
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
