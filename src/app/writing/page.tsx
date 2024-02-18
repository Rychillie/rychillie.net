import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, UnderDevelopment } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing amazing things about code.'
};

export default function Writing() {
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
        <section className="mb-8 mt-6 flex flex-col">
          <UnderDevelopment />
        </section>
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <span className="mt-12 flex">
          <BackHome />
        </span>
      </AnimateEnter>
    </>
  );
}
