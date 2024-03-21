import { getMDXData } from '@/lib/content';
import { MetadataWriting } from '@/lib/content/parse-frontmatter';
import path from 'path';

type Posts = {
  metadata: MetadataWriting;
  slug: string;
  content: string;
};

export default function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content/writing')) as Posts[];
}
