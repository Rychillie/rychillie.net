import { getMDXFiles, readMDXFile } from '@/lib/content';
import path from 'path';

export default function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content
    };
  });
}
