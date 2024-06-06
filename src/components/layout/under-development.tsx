'use client';

import { Text } from '@/components/elements';

type Props = {
  className?: string;
  locale?: string;
};

export default function UnderDevelopment({ className, locale }: Props) {
  return (
    <Text className={className}>
      {locale === 'pt-BR' ? 'Em desenvolvimento...' : 'Under development...'}
    </Text>
  );
}
