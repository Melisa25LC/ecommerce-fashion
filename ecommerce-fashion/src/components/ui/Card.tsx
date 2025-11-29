import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white dark:bg-black border border-gray-100 dark:border-gray-900 
        transition-colors ${onClick ? 'cursor-pointer active:opacity-80' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative aspect-[3/4] overflow-hidden bg-gray-100 ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`text-xs uppercase tracking-wide dark:text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardPrice({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs dark:text-gray-500 ${className}`}>
      {children}
    </p>
  );
}
