'use client';

import { RefObject, useEffect, useState } from 'react';

type MousePosition = {
  x: number;
  y: number;
};

export default function useMousePosition(ref: RefObject<any>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: ev.clientX - ref.current.getBoundingClientRect().left,
        y: ev.clientY - ref.current.getBoundingClientRect().top
      });
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
}
