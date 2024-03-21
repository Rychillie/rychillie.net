import { getMDXData } from '@/lib/content';
import path from 'path';

export default function getCarrer() {
  return getMDXData(path.join(process.cwd(), 'content/carrer'));
}
