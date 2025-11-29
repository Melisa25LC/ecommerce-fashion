import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`uppercase tracking-wider dark:text-white ${className}`}>
      {children}
    </h1>
  );
}

export function Subheading({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`uppercase tracking-widest text-sm dark:text-white ${className}`}>
      {children}
    </h2>
  );
}

export function Label({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-xs uppercase tracking-widest dark:text-white ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.4em] dark:text-gray-500 ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-xs text-gray-600 dark:text-gray-500 ${className}`}>
      {children}
    </p>
  );
}
