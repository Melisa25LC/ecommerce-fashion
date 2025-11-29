import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`px-4 mx-auto max-w-md ${className}`}>
      {children}
    </div>
  );
}

export function Section({ children, className = '' }: ContainerProps) {
  return (
    <section className={`py-8 ${className}`}>
      {children}
    </section>
  );
}
