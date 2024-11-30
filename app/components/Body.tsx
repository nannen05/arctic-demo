import PropTypes from 'prop-types';
import React from 'react';

export default function Body(props) {
  const { variant, element, className, children } = props;

  const Element = element || 'p';

  const variants = {
    large:
      'text-[1rem] leading-[1.4rem] lg:text-[1.25rem] lg:leading-[1.75rem]',
    medium:
      'text-[0.875rem] leading-[1.225rem] lg:text-[1.125rem] lg:leading-[1.406rem]',
    small:
      'text-[0.75rem] leading-[1.05rem] lg:text-[1rem] lg:leading-[1.4rem]',
    xs: 'text-[0.625rem] leading-[0.938rem] lg:text-[0.875rem] lg:leading-[1.313rem]',
  };

  return (
    <Element
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </Element>
  );
}