'use client';

import { useMediaQuery } from '@/lib/hooks';
import Footer from '../footer';

type Props = {
  showDesktop?: boolean;
};

export default function DailyFooter({ showDesktop }: Props) {
  const { isDesktop } = useMediaQuery();

  if (showDesktop) {
    return isDesktop && <Footer />;
  }

  return (
    !isDesktop && (
      <footer className="pb-10">
        <Footer />
      </footer>
    )
  );
}
