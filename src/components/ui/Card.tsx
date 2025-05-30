import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  artistic?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  bordered = true,
  artistic = false,
}) => {
  const hoverStyles = hoverable ? 'transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl' : '';
  const borderStyles = bordered ? 'border border-neutral-200' : '';
  const artisticStyles = artistic ? 'rounded-artistic bg-gradient-to-br from-white via-neutral-50 to-neutral-100' : 'rounded-xl';
  
  return (
    <div 
      className={`
        bg-white shadow-artistic overflow-hidden
        ${artisticStyles}
        ${borderStyles}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  artistic?: boolean;
}

const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  artistic = false,
}) => {
  const aspectRatioStyles = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: '',
  };
  
  const artisticStyles = artistic ? 'rounded-artistic transform transition-transform duration-300 hover:scale-105' : '';
  
  return (
    <div className={`${aspectRatioStyles[aspectRatio]} overflow-hidden ${artisticStyles} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
      />
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-6 animate-reveal ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
}) => {
  return (
    <h3 className={`text-xl font-artistic font-semibold text-neutral-900 ${className}`}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
}) => {
  return (
    <p className={`mt-2 text-neutral-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`px-6 py-4 bg-neutral-50 border-t border-neutral-200 ${className}`}>
      {children}
    </div>
  );
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export default Card;