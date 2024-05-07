import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, UnderDevelopment } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Craft',
  description: "Projects, experiments and things that I've crafted."
};

export default function Craft() {
  return (
    <>
      <AnimateEnter>
        <header>
          <Heading className="mb-3">Craft</Heading>
          <Text className="mb-10 flex" colour="secondary">
            Projects, experiments and things that I&apos;ve crafted.
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
