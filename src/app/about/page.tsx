import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, Contact, Separator } from '@/components/layout';
import ImageSection from '@/components/layout/image-section';
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
      <ImageSection />
      <AnimateEnter delay={0.6}>
        <section className="flex flex-col gap-4 py-6">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, augue vitae
            ultricies convallis, risus arcu pharetra ipsum, et hendrerit enim urna at libero. Ut
            dapibus nunc eu tincidunt vulputate.
          </Text>
          <Text>
            Maecenas tincidunt nisl tortor, quis molestie mauris faucibus quis. Curabitur tempor nec
            leo eu volutpat. Quisque eu tortor eu nisi facilisis ornare ac nec quam. Aenean ligula
            enim, luctus eget sapien id, euismod volutpat nisi.
          </Text>
          <Text>
            Proin tristique rutrum dolor, in elementum neque tristique quis. Donec eu magna et justo
            laoreet ornare id sed tellus. Morbi sit amet tortor pretium, pulvinar metus cursus,
            euismod massa. Phasellus gravida est a dolor hendrerit, quis interdum lacus congue.
          </Text>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <section className="flex flex-col gap-6 py-6">
          <div>
            <Heading as="h2">Career</Heading>
            <Text colour="secondary">10+ years of professional development experience.</Text>
          </div>
          <div className="flex flex-col gap-6">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, augue vitae
              ultricies convallis, risus arcu pharetra ipsum, et hendrerit enim urna at libero. Ut
              dapibus nunc eu tincidunt vulputate.
            </Text>
          </div>
        </section>
        <Separator className="my-12" />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Contact />
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <span className="mt-24 flex">
          <BackHome />
        </span>
      </AnimateEnter>
    </>
  );
}
