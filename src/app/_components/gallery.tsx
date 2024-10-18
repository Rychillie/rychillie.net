'use client';

import c from 'clsx';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import localFont from 'next/font/local';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import ipad from '../../../public/assets/ipad.png';
import landscape from '../../../public/assets/landscape.png';
import rychillie from '../../../public/assets/rychillie.png';
import zeno from '../../../public/assets/zeno.png';
import Halo from './halo';

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: 'left' | 'right';
  children?: ReactNode;
};

const ticketingFont = localFont({
  src: '../../../public/fonts/Ticketing.woff2',
  display: 'swap'
});

function Photo({
  src,
  alt,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children
}: PhotoProps) {
  const [isClient, setIsClient] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shared = 'absolute h-full w-full rounded-2xl overflow-hidden';

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    if (prefersReducedMotion) {
      return children;
    }
  } else {
    return null;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]`}
        style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
        initial={{
          width,
          height,
          rotate: (rotate || 0) - 20,
          y: 200 + index * 20,
          x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
          opacity: 0
        }}
        transition={{
          default: {
            type: 'spring',
            bounce: 0.2,
            duration: index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
            delay: index * 0.15
          },
          opacity: {
            duration: 0.7,
            ease: [0.23, 0.64, 0.13, 0.99],
            delay: index * 0.15
          },
          scale: { duration: 0.12 }
        }}
        animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
        drag
        whileTap={{ scale: 1.1, cursor: 'grabbing' }}
        whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
        whileHover="flipped"
      >
        <m.div
          className="relative size-full rounded-2xl shadow-md will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
          transition={{ type: 'spring', duration: 0.4 }}
          variants={{
            flipped: {
              scale: 1.1,
              rotateY: flipDirection === 'right' ? -180 : 180,
              rotateX: 5
            }
          }}
        >
          <div className={shared} style={{ backfaceVisibility: 'hidden' }}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="pointer-events-none absolute inset-0 size-full rounded-2xl bg-neutral-400 object-cover dark:bg-neutral-600"
              priority
            />
            {children}
          </div>
          <div
            className={c(shared, 'flex items-center overflow-hidden rounded-2xl bg-[#FFFAF2]')}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <Halo strength={50} className="flex items-center">
              <span
                style={{ backgroundImage: `url(https://rychillie.net/assets/Photopaper.png)` }}
                className="absolute size-[500px] rotate-[-20deg] bg-[length:280px] bg-repeat"
              />
              <div className="z-[1] px-6">
                <div className="flex flex-col gap-1 font-mono uppercase">
                  <p className={c(ticketingFont.className, 'text-sm text-secondary')}>{alt}</p>
                  {meta && <p className="text-sm text-secondary">{meta}</p>}
                </div>
              </div>
            </Halo>
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

export default function Gallery() {
  return (
    <>
      <div className="relative flex h-[268px] gap-4">
        <Photo
          src={rychillie}
          meta="2022-05-05"
          alt="Just me"
          width={324}
          height={239}
          rotate={-6}
          left={-86}
          index={1}
        />
        <Photo
          src={ipad}
          meta="2022-06-24"
          alt="My old iPad"
          width={230}
          height={250}
          rotate={6.3}
          left={188}
          index={2}
          flipDirection="left"
        />
        <Photo
          src={zeno}
          meta="2022-11-19"
          alt="Me with Zeno Rocha"
          width={280}
          height={235}
          rotate={-5.4}
          left={343}
          index={3}
        />
        <Photo
          src={landscape}
          meta="2019-09-01"
          alt="The street I grew up on"
          width={220}
          height={260}
          rotate={7.6}
          left={557}
          index={4}
          flipDirection="left"
        />
      </div>
    </>
  );
}
