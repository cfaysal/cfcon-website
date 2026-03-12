'use client';
import { GrainGradient } from '@paper-design/shaders-react';

export default function GrainHero() {
  return (
    <GrainGradient
      colorBack="#1A1A1A"
      colors={['#D42027', '#A8181E', '#D4922A', '#E85A5F']}
      softness={0.5}
      intensity={0.4}
      noise={0.3}
      speed={0.8}
      shape="corners"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
