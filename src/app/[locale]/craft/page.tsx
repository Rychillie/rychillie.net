import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, UnderDevelopment } from '@/components/layout';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Craft',
  description: "Projects, experiments and things that I've crafted."
};

export default function Craft({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Craft');

  return (
    <>
      <AnimateEnter>
        <header>
          <Heading className="mb-3">{t('title')}</Heading>
          <Text
            colour="secondary"
            className="mb-10 flex"
            dangerouslySetInnerHTML={{ __html: t('description') }}
          />
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.4}>
        <section className="mb-8 mt-6 flex flex-col">
          <UnderDevelopment locale={locale} />
        </section>
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <span className="mt-12 flex">
          <BackHome locale={locale} />
        </span>
      </AnimateEnter>
    </>
  );
}
