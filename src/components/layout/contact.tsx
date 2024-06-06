'use client';

import { CustomLink, Heading } from '@/components/elements';
import c from 'clsx';

export default function Contact({ locale }: { locale: string }) {
  const contactLinks = [
    {
      label: '@rychillie',
      href: 'https://x.com/rychillie',
      ariaLabel: 'twitter profile'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/rychillie',
      ariaLabel: 'gitHub profile'
    },
    {
      label: 'Email',
      href: 'rychillie@rychillie.net',
      ariaLabel: 'email address'
    }
  ];

  return (
    <>
      <Heading as="h2" className="mb-6">
        {locale === 'pt-BR' ? 'Conecte-se' : 'Connect'}
      </Heading>
      <ul className="flex">
        {contactLinks.map(({ label, href, ariaLabel }, index) => (
          <li key={label}>
            <CustomLink href={href} ariaLabel={ariaLabel}>
              {label}
            </CustomLink>
            <span
              className={c(
                'mx-1 dark:text-secondary-dark text-secondary',
                index === contactLinks.length - 1 && 'hidden'
              )}
              aria-hidden="true"
            >
              &middot;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
