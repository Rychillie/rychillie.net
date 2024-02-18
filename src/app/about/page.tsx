import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, UnderDevelopment } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Come get to know me a little more'
};

export default function About() {
  return (
    <>
      <AnimateEnter>
        <header>
          <Heading>About me</Heading>
          <Text colour="secondary">A little more about who I am.</Text>
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
