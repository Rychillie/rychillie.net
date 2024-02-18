'use client';

import { Contact, CustomLink, Heading, Text } from '@/components/elements';
import { AnimateEnter, Separator } from '@/components/layout';

export default function Home() {
  return (
    <>
      <AnimateEnter delay={0.4}>
        <header>
          <Heading>I&apos;m Rychillie</Heading>
          <Text colour="secondary">Software Engineer</Text>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section className="my-6 flex flex-col gap-6">
          <p>
            Creating content and Sharing knowledge over the internet. Design and technology lover
            collaborating with Open Source projects.
          </p>
          <p>
            Read further on{' '}
            <CustomLink href="/now" ariaLabel="now page">
              now
            </CustomLink>{' '}
            page.
          </p>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <nav className="flex gap-2">
          <span>
            <CustomLink href="/craft" ariaLabel="craft page">
              Craft
            </CustomLink>
          </span>
          <span>
            <CustomLink href="/writing" ariaLabel="writing page">
              Writing
            </CustomLink>
          </span>
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