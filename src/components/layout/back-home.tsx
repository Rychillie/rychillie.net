'use client';

import { CustomLink } from '@/components/elements';

export default function BackHome() {
  return (
    <CustomLink href="/" ariaLabel="Back to home page" arrowIcon hideUnderline className="p-1">
      Back
    </CustomLink>
  );
}
