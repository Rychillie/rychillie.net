import { getMDXData } from '@/lib/content';
import path from 'path';

export default function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content/writing'));
}
