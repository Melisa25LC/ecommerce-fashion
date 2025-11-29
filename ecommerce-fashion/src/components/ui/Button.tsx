import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'uppercase tracking-[0.2em] transition-colors active:opacity-80';
  
  const variants = {
    primary: 'bg-black dark:bg-white text-white dark:text-black',
    secondary: 'bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-700',
    outline: 'bg-transparent border border-black dark:border-white text-black dark:text-white',
    ghost: 'bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-10 py-4 text-sm'
  };
  
  const width = fullWidth ? 'w-full' : '';
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
    >
      {children}
    </button>
  );
}
