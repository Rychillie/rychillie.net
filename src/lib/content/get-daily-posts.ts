import { getMDXData } from '@/lib/content';
import { MetadataWriting } from '@/lib/content/parse-frontmatter';
import path from 'path';

export type Daily = {
  metadata: MetadataWriting;
  slug: string;
  content: string;
};

export default function getDailyPosts(locale: string) {
  const lang = locale === 'pt-BR' ? 'pt-BR' : 'en';
  return getMDXData(path.join(process.cwd(), `content/${lang}/daily`)) as Daily[];
}
