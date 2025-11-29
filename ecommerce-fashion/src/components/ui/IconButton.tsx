import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'light' | 'dark';
  className?: string;
  ariaLabel?: string;
}

export function IconButton({ 
  children, 
  onClick, 
  variant = 'default',
  className = '',
  ariaLabel 
}: IconButtonProps) {
  const variants = {
    default: 'active:bg-gray-50 dark:active:bg-gray-900',
    light: 'bg-white/90 active:bg-white',
    dark: 'bg-black/90 active:bg-black text-white'
  };
  
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`p-2 transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
