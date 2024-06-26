'use client';

import { Gallery } from '@/components/layout';
import { useMediaQuery } from '@/lib/hooks';
import Image from 'next/image';
import landscape from '../../../public/assets/landscape.png';
import rychillie from '../../../public/assets/rychillie.png';

export default function ImageSection({ locale }: { locale: string }) {
  const { width } = useMediaQuery();

  return (
    <section className="flex w-full py-12 transition-all mdx:pb-6 mdx:pt-12">
      {!width ? null : width <= 920 ? (
        <div className="mb-8 w-full">
          <div className="animate-in" style={{ '--index': 1 } as React.CSSProperties}>
            <Image
              src={rychillie}
              alt={locale === 'pt-BR' ? 'Apenas eu' : 'Just me'}
              width={324}
              height={139}
              className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-neutral-500 object-cover shadow-md transition-all"
              priority
            />
          </div>

          <div className="animate-in" style={{ '--index': 2 } as React.CSSProperties}>
            <Image
              src={landscape}
              alt={locale === 'pt-BR' ? 'A rua onde cresci' : 'The street I grew up on'}
              width={220}
              height={260}
              className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-2xl bg-neutral-500 object-cover shadow-md transition-all sm:left-[60%] md:w-56"
              priority
            />
          </div>
        </div>
      ) : (
        <div className="block w-full">
          <Gallery locale={locale} />
        </div>
      )}
    </section>
  );
}
