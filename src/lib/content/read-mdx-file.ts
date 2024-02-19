import { parseFrontmatter } from '@/lib/content';
import fs from 'fs';

export default function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}