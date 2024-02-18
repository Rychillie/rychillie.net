'use client';

import { Text } from '@/components/elements';

type Props = {
  className?: string;
};

export default function UnderDevelopment({ className }: Props) {
  return <Text className={className}>Under development...</Text>;
}
