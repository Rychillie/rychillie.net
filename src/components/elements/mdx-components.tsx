/* eslint-disable prefer-const */
'use client';

import { CustomLink } from '@/components/elements';
import c from 'clsx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { highlight } from 'sugar-high';

function Table({ data }: any) {
  let headers = data.headers.map(({ header, index }: any) => <th key={index}>{header}</th>);
  let rows = data.rows.map(({ row, index }: any) => (
    <tr key={index}>
      {row.map(({ cell, cellIndex }: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
  return (
    <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  code: Code,
  Table
};

export default function MDX(props: any) {
  return (
    <article
      className={c(
        'prose prose-sm not-pre md:prose-base prose-headings:font-medium prose-headings:text-primary prose-h2:text-base dark:prose-headings:text-primary-dark'
      )}
    >
      <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
    </article>
  );
}
