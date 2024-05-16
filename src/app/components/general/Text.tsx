import { SizeLimit } from 'next';
import React, { Children, ReactNode } from 'react';

type TextProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontWeight?: 400 | 500 | 700;
  color?: string;
  children: ReactNode;
};

export default function Text({fontWeight=400, size="sm", ...props}: TextProps) {
  return (
    <span
      className={`${
        { 700: 'font-bold', 500: 'font-medium', 400: 'font-light' }[
          fontWeight
        ]
      }
  ${
    {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    }[size]
  }`}
    >
      {props.children}
    </span>
  );
}
