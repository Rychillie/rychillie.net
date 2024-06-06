import { getMDXData } from '@/lib/content';
import { MetadataPage } from '@/lib/content/parse-frontmatter';
import path from 'path';

type Pages = {
  metadata: MetadataPage;
  slug: string;
  content: string;
};

export default function getPages(locale: string, slug: string) {
  const lang = locale === 'pt-BR' ? 'pt-BR' : 'en';
  const pages = getMDXData(path.join(process.cwd(), `content/${lang}/pages`)) as Pages[];
  return pages.find((page) => page.slug === slug);
}
