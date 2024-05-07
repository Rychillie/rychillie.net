'use client';

import { CustomLink, Heading, Text } from '@/components/elements';
import { AnimateEnter, Contact, Separator } from '@/components/layout';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <AnimateEnter delay={0.4}>
        <header>
          <Heading dangerouslySetInnerHTML={{ __html: t('title') }} />
          <Text colour="secondary">{t('intro')}</Text>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section className="my-6 flex flex-col gap-6">
          <Text>
            Creating content and Sharing knowledge over the internet. Design and technology lover
            collaborating with Open Source projects.
          </Text>
          <Text>
            Read further on <CustomLink href="/now">now</CustomLink> page.
          </Text>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <nav className="flex gap-2">
          <CustomLink href="/craft">Craft</CustomLink>
          <CustomLink href="/writing">Writing</CustomLink>
        </nav>
        <Separator className="my-12" />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Contact />
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <CustomLink
          href="/about"
          className="mt-24 inline-block cursor-pointer font-mono text-xs text-secondary decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all hover:underline dark:text-secondary-dark dark:decoration-[#505050]"
          hideUnderline
        >
          About
        </CustomLink>
      </AnimateEnter>
    </>
  );
}
