'use client';

import React from 'react';
import feedback from '@/app/lib/feedback';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  haptic?: keyof typeof feedback; // "click" | "strong" | "success"
};

export default function HapticLink({
  haptic = 'click',
  onClick,
  ...props
}: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        feedback[haptic]?.();
        onClick?.(e);
      }}
    />
  );
}
