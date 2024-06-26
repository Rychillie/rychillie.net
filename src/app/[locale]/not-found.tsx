'use client';

import { BackHome } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
  description: 'Not found.',
  openGraph: {
    title: '404',
    description: 'Not found.'
  },
  twitter: {
    title: '404',
    site: '@rychillie',
    card: 'summary',
    description: 'Not found.'
  }
};

export default function NotFound({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <h1 className="mb-6 text-lg font-medium">404 &mdash; Not Found</h1>
      <section>
        <p className="mb-6">
          Been looking high and low, far and wide but couldn&apos;t find the page you&apos;re
          looking for. Maybe it&apos;s on vacation, or maybe it&apos;s just shy.
        </p>
        <p>Either way, apologies for the inconvenience.</p>
      </section>
      <span className="mt-6">
        <BackHome locale={locale} />
      </span>
    </>
  );
}
