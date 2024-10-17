'use client';

import { useMediaQuery } from '@/lib/hooks';
import Image from 'next/image';
import landscape from '../../../public/assets/landscape.png';
import rychillie from '../../../public/assets/rychillie.png';
import Gallery from './gallery';

export default function ImageSection() {
  const { width } = useMediaQuery();

  return (
    <section className="flex w-full relative py-12 transition-all mdx:pb-6 mdx:pt-12">
      {!width ? null : width <= 920 ? (
        <div className="mb-8 w-full">
          <div className="animate-in" style={{ '--index': 1 } as React.CSSProperties}>
            <Image
              src={rychillie}
              alt="Just me"
              width={324}
              height={139}
              className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-neutral-500 object-cover -left-6 sm:left-[5%] shadow-md transition-all"
              priority
            />
          </div>

          <div className="animate-in" style={{ '--index': 2 } as React.CSSProperties}>
            <Image
              src={landscape}
              alt="The street I grew up on"
              width={220}
              height={260}
              className="pointer-events-none absolute inset-0 left-[55%] w-48 rotate-6 rounded-2xl bg-neutral-500 object-cover shadow-md transition-all top-32 md:top-16 sm:left-[60%] md:w-64"
              priority
            />
          </div>
        </div>
      ) : (
        <div className="block w-full">
          <Gallery />
        </div>
      )}
    </section>
  );
}
