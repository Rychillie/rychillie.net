'use client';

import { CustomLink } from '@/components/elements';

export default function BackHome({ locale }: { locale: string }) {
  return (
    <CustomLink
      href="/"
      locale={locale}
      ariaLabel="Back to home page"
      arrowIcon
      hideUnderline
      className="p-1"
    >
      {locale === 'pt-BR' ? 'Voltar' : 'Back'}
    </CustomLink>
  );
}
