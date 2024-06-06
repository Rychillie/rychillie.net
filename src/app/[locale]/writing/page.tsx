/* eslint-disable prefer-const */
import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, List, UnderDevelopment } from '@/components/layout';
import { getBlogPosts } from '@/lib/content';
import { useTranslations } from 'next-intl';

export function generateMetadata() {
  return {
    title: 'Writing',
    description: 'Writing amazing things about code.'
  };
}

export default function Writing({ params: { locale } }: { params: { locale: string } }) {
  let allWritings = getBlogPosts(locale);
  const t = useTranslations('Writing');

  return (
    <>
      <AnimateEnter>
        <header>
          <Heading className="mb-3">{t('title')}</Heading>
          <Text className="mb-10 flex" colour="secondary">
            {t('description')}
          </Text>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.4}>
        {allWritings.length > 0 ? (
          <List locale={locale} items={allWritings} route="writing" />
        ) : (
          <UnderDevelopment locale={locale} />
        )}
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <span className="mt-12 flex">
          <BackHome locale={locale} />
        </span>
      </AnimateEnter>
    </>
  );
}
