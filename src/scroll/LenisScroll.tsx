"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React, { ReactNode, FC } from 'react';

interface LenisScrollProps {
  children: ReactNode;
}

const LenisScroll: FC<LenisScrollProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;