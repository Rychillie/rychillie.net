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
      href: 'mailto:rychillie@rychillie.net',
      ariaLabel: 'email address'
    }
  ];

  return (
    <section
      id="contact"
      className="border-neutral-200 dark:border-neutral-800 my-3 pt-8 pb-10 border-y before:content[''] before:block before:h-96 before:-mb-96 before:invisible"
    >
      <h2 id="contact" className="text-base mb-6 font-medium text-balance">
        Contact
      </h2>
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
    </section>
  );
}
