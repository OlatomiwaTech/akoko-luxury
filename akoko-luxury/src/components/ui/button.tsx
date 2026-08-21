import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
}

const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A04A] disabled:pointer-events-none disabled:opacity-50';

const variantClasses = {
  default: 'bg-[#C7A04A] text-[#0D0D0D] hover:bg-[#D8B866]',
  outline: 'border border-[#C7A04A] text-[#C7A04A] hover:bg-[#C7A04A] hover:text-[#0D0D0D]',
};

const sizeClasses = {
  default: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function Button({
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
