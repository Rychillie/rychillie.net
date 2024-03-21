import { getMDXData } from '@/lib/content';
import { MetadataCarrer } from '@/lib/content/parse-frontmatter';
import path from 'path';

type Jobs = {
  metadata: MetadataCarrer;
  slug: string;
  content: string;
};

export default function getCarrer() {
  return getMDXData(path.join(process.cwd(), 'content/carrer')) as Jobs[];
}
