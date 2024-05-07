'use client';

import en from '@/messages/en.json';
import ptBR from '@/messages/pt-BR.json';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

type Props = {
  locale: string;
  timeZone: string;
  now: Date;
  children: ReactNode;
};

export default function NextIntl({ locale, timeZone, now, children }: Props) {
  return (
    <NextIntlClientProvider
      messages={locale === 'pt-BR' ? ptBR : en}
      // Define non-serializable props here
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>
      }}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
    >
      {children}
    </NextIntlClientProvider>
  );
}
