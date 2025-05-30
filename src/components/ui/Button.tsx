import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'artistic';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    artistic: 'bg-artistic-gradient from-primary-500 via-accent-500 to-secondary-500 text-white hover:from-primary-600 hover:via-accent-600 hover:to-secondary-600 rounded-artistic animate-paint bg-[length:200%_200%] shadow-artistic transform hover:-translate-y-0.5 hover:shadow-xl',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'text-base px-6 py-3 rounded-xl',
    lg: 'text-lg px-8 py-4 rounded-2xl',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const loadingStyles = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  return (
    <button
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyle}
        ${loadingStyles}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="mr-2 transform transition-transform group-hover:scale-110">{icon}</span>
      )}
      
      <span className="transform transition-transform group-hover:scale-105">
        {children}
      </span>
      
      {icon && iconPosition === 'right' && !isLoading && (
        <span className="ml-2 transform transition-transform group-hover:scale-110">{icon}</span>
      )}
    </button>
  );
};

export default Button;