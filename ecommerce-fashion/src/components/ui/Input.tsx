import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
}

export function Input({ label, error, success, className = '', ...props }: InputProps) {
  const borderColor = error 
    ? 'border-red-500 focus:border-red-500' 
    : success
    ? 'border-green-500 focus:border-green-500'
    : 'border-gray-300 dark:border-gray-800 focus:border-black dark:focus:border-white';
  
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-xs uppercase tracking-widest dark:text-white">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border dark:bg-black dark:text-white 
          focus:outline-none transition-colors text-sm
          placeholder:text-gray-400 dark:placeholder:text-gray-600 ${borderColor} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
      {success && (
        <p className="mt-1 text-xs text-green-500">{success}</p>
      )}
    </div>
  );
}
