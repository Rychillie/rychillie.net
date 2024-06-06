'use client';

import { CustomLink, Heading, Text } from '@/components/elements';
import { AnimateEnter, Contact, Separator } from '@/components/layout';
import { useTranslations } from 'next-intl';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <>
      <AnimateEnter delay={0.4}>
        <header>
          <Heading dangerouslySetInnerHTML={{ __html: t('hello') }} />
          <Text colour="secondary">{t('carrer')}</Text>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section className="my-6 flex flex-col gap-6">
          <Text>{t('intro')}</Text>
          <Text>
            {t('read')}
            <CustomLink href="/now" locale={locale}>
              {t('now')}
            </CustomLink>
            {t('page')}
          </Text>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <nav className="flex gap-2">
          <CustomLink href="/craft" locale={locale}>
            {t('craft')}
          </CustomLink>
          <CustomLink href="/writing" locale={locale}>
            {t('writing')}
          </CustomLink>
        </nav>
        <Separator className="my-12" />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Contact locale={locale} />
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <CustomLink
          href="/about"
          locale={locale}
          className="mt-24 inline-block cursor-pointer font-mono text-xs text-secondary decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all hover:underline dark:text-secondary-dark dark:decoration-[#505050]"
          hideUnderline
        >
          {t('about')}
        </CustomLink>
      </AnimateEnter>
    </>
  );
}
