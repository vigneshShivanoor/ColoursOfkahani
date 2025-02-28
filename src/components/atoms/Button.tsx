import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  children,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'rounded-full font-medium transition-colors duration-300';
  
  const variants = {
    primary: 'bg-[#ff6b35] text-white hover:bg-[#ff8255]',
    secondary: 'bg-[#1a472a] text-white hover:bg-[#1a472a]/90',
    outline: 'border-2 border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;