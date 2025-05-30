import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral' | 'artistic';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-accent-100 text-accent-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    neutral: 'bg-neutral-100 text-neutral-700',
    artistic: 'bg-gradient-to-r from-primary-100 via-accent-100 to-secondary-100 text-primary-700 animate-paint bg-[length:200%_200%]',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };
  
  return (
    <span 
      className={`
        inline-flex items-center font-medium
        rounded-artistic shadow-sm transition-all duration-300
        hover:shadow-md hover:-translate-y-0.5 transform
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;