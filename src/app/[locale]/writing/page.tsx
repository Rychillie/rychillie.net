/* eslint-disable prefer-const */
import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, List, UnderDevelopment } from '@/components/layout';
import { getBlogPosts } from '@/lib/content';

export function generateMetadata() {
  return {
    title: 'Writing',
    description: 'Writing amazing things about code.'
  };
}

export default function Writing({ params: { locale } }: { params: { locale: string } }) {
  let allWritings = getBlogPosts();

  return (
    <>
      <AnimateEnter>
        <header>
          <Heading className="mb-3">Writing</Heading>
          <Text className="mb-10 flex" colour="secondary">
            Infrequent thoughts on technology, design and things in between.
          </Text>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.4}>
        {allWritings.length > 0 ? (
          <List locale={locale} items={allWritings} route="writing" />
        ) : (
          <UnderDevelopment />
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
