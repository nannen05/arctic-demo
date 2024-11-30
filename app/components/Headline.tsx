import PropTypes from 'prop-types';
import React from 'react';

export default function Headline(props) {
  const { variant, element, className, children, onClick } = props;

  const Element = element || variant;

  const variants = {
    h1: 'text-[2.625rem] leading-[2.625rem] lg:text-[70px] lg:leading-[84px] font-semibold',
    h2: 'text-[40px] leading-[50px] lg:text-[50px] lg:leading-[60px]',
    h3: 'text-[1.625rem] leading-[2.113rem] lg:text-[40px] lg:leading-[47px]',
    h4: 'text-[24px] leading-[28px]',
    h5: 'text-[18px] leading-[21px] font-semibold',
    h6: 'text-[18px] leading-[1.5rem] lg:text-[1.25rem] lg:leading-[1.75rem]',
  };

  return (
    <Element
      onClick={onClick}
      className={`tracking-[-0.02em] ${variants[variant]} ${className}`}
    >
      {children}
    </Element>
  );
}

// Headline.propTypes = {
//   className: PropTypes.string,
//   variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
//   element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
//   children: PropTypes.node.isRequired,
// };