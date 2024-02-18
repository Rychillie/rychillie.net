import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'Personal + professional updates.'
};

export default function Now() {
  return (
    <>
      <AnimateEnter>
        <header>
          <Heading>Now</Heading>
        </header>
      </AnimateEnter>
      <AnimateEnter delay={0.4}>
        <section className="mb-8 mt-6 flex flex-col gap-6">
          <Text>
            Dedicated to improving skills by creating websites that stand out for their performance,
            accessibility and incredible designs.
          </Text>
          <Text>
            I study the Swift language and also develop hybrid applications using React-Native and
            Expo. I constantly seek to expand my knowledge, exploring new technological and creative
            possibilities to offer innovative solutions to my projects.
          </Text>
          <Text>
            Furthermore, I find pleasure in combining functionality and aesthetics, providing
            exceptional user experiences. I&apos;m always looking for the perfect balance between
            performance, affordability and visual beauty.
          </Text>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <Text colour="secondary" size="small">
          Last updated <time dateTime="2023-12-11">December 11, 2023</time>
        </Text>
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <div className="mt-12 flex">
          <BackHome />
        </div>
      </AnimateEnter>
    </>
  );
}
