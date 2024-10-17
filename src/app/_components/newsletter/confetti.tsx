'use client';

import ConfettiExplosion from 'react-confetti-explosion';

type Props = {
  onClomplete?: () => void;
  width: number;
};

export default function Confetti({ onClomplete, width }: Props) {
  const size = width > 768 ? 10 : width > 640 ? 8 : width > 480 ? 6 : width > 320 ? 5 : 4;

  return (
    <ConfettiExplosion
      onComplete={onClomplete}
      zIndex={9999}
      force={1}
      particleSize={size}
      duration={3000}
      particleCount={250}
      style={{ position: 'fixed', top: '50%', left: '50%' }}
      width={width}
    />
  );
}
