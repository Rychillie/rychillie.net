import { getMDXData } from '@/lib/content';
import { MetadataWriting } from '@/lib/content/parse-frontmatter';
import path from 'path';

export type Posts = {
  metadata: MetadataWriting;
  slug: string;
  content: string;
};

export default function getBlogPosts(locale: string) {
  const lang = locale === 'pt-BR' ? 'pt-BR' : 'en';
  return getMDXData(path.join(process.cwd(), `content/${lang}/writing`)) as Posts[];
}
