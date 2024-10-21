'use client';

import { useMediaQuery } from '@/lib/hooks';
import Footer from './footer';

export default function DiaryFooter() {
  const { isDesktop } = useMediaQuery();

  return (
    !isDesktop && (
      <footer className="pb-10">
        <Footer />
      </footer>
    )
  );
}
