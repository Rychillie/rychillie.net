/* eslint-disable prefer-const */
import { Heading, Text } from '@/components/elements';
import { AnimateEnter, BackHome, Contact, Separator } from '@/components/layout';
import ImageSection from '@/components/layout/image-section';
import { getCarrer } from '@/lib/content';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Come get to know me a little more'
};

export default function About({ params: { locale } }: { params: { locale: string } }) {
  let allJobs = getCarrer().sort((a, b) => {
    const startA = new Date(a.metadata?.start).getFullYear();
    const startB = new Date(b.metadata?.start).getFullYear();
    return startB - startA;
  });

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

            <div className="flex w-full flex-col gap-5">
              {allJobs &&
                allJobs.map((job, index) => {
                  const start = new Date(job.metadata?.start).getFullYear();
                  const end =
                    job.metadata?.end === 'current'
                      ? 'Current'
                      : new Date(job.metadata?.end).getFullYear();
                  const duration = start === end ? start : `${start} - ${end}`;

                  return (
                    <div key={index} className="flex w-full flex-row items-center gap-4">
                      {job.metadata?.image && (
                        <Image
                          src={job.metadata?.image}
                          alt={job.metadata?.company}
                          className="aspect-square rounded-full"
                          height={52}
                          width={52}
                        />
                      )}
                      <div className="flex w-full flex-col">
                        <div className="flex flex-1 flex-row items-center gap-2">
                          <Text
                            size="large"
                            weight="medium"
                            className="line-clamp-1 w-full flex-1 flex-row"
                          >
                            {job.metadata?.job}
                          </Text>
                          <Text size="small" colour="secondary">
                            {duration}
                          </Text>
                        </div>
                        <Text colour="secondary" className="line-clamp-1">
                          {job.metadata?.company}
                        </Text>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <Separator className="my-12" />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Contact />
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <span className="mt-24 flex">
          <BackHome locale={locale} />
        </span>
      </AnimateEnter>
    </>
  );
}
