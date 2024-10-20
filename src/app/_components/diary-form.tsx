'use client';

import { useMediaQuery } from '@/lib/hooks';
import BackTo from './back-to';
import Footer from './footer';

export default function DiaryForm() {
  const { isDesktop } = useMediaQuery();

  return (
    <div className="lg:z-[99999] pt-12 lg:pt-0 max-w-md w-full lg:fixed lg:inset-y-32 right-[calc(50vw+96px)] flex flex-col justify-between lg:before:content-[''] lg:before:fixed lg:before:inset-y-0 lg:before:left-0 lg:before:w-[calc(50vw-32px)] lg:before:h-screen lg:before:-z-10 lg:before:bg-neutral-100 dark:lg:before:bg-neutral-900">
      <div className="lg:-mt-10 lg:-ml-1">
        <BackTo href="/" name="Index" fixed />
        <h1 className="text-2xl font-bold pt-2 lg:ml-1">Rychillie's Diary</h1>
      </div>

      {isDesktop && <Footer />}
    </div>
  );
}