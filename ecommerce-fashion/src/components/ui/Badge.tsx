import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'dark';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-white text-black',
    outline: 'bg-transparent border border-black dark:border-white text-black dark:text-white',
    dark: 'bg-black text-white'
  };
  
  return (
    <span className={`inline-block px-2 py-1 text-[9px] uppercase tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
