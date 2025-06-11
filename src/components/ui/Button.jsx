// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  icon: IconComponent,
  iconPosition = 'left',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {IconComponent && iconPosition === 'left' && (
        <IconComponent size={20} className="mr-2" />
      )}
      {children}
      {IconComponent && iconPosition === 'right' && (
        <IconComponent size={20} className="ml-2" />
      )}
    </button>
  );
};

export default Button;