interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ className = '', orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div className={`w-px bg-gray-200 dark:bg-gray-900 ${className}`} />
    );
  }
  
  return (
    <div className={`h-px bg-gray-200 dark:bg-gray-900 ${className}`} />
  );
}
