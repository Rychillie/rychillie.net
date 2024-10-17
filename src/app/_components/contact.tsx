'use client';

import c from 'clsx';
import CustomLink from './custom-link';

export default function Contact() {
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
      <h2 className="text-base mb-6 font-medium text-balance">Connect</h2>
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
