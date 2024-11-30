/* eslint-disable no-shadow */
import PropTypes from 'prop-types';
import React, { forwardRef, useMemo } from 'react';
import { Link } from '../Link';

const ArrowButton = forwardRef(
  ({ onClick, type, href, arrowDirection, ...props }, ref) => {
    const Wrapper = useMemo(
      () =>
        href
          ? function LinkWrapper({ children }) {
              return children;
            }
          : function ButtonWrapper({ children }) {
              return children;
            },
      [href]
    );

    return (
      <Wrapper>
        <button
          ref={ref}
          onClick={onClick}
          {...props}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border border-[#1b1f231a] p-[2px] text-center text-base text-[#202635] transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
        >
          <div className="inner-content flex h-full w-full items-center justify-center">
            {arrowDirection === 'right' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M7.09821 0.182292L11.8125 4.55729C11.9375 4.67882 12 4.82639 12 5C12 5.17361 11.9375 5.32118 11.8125 5.44271L7.09821 9.81771C6.77679 10.0608 6.47321 10.0608 6.1875 9.81771C5.9375 9.50521 5.9375 9.21007 6.1875 8.93229L9.75 5.625H0.642857C0.25 5.59028 0.0357143 5.38194 0 5C0.0357143 4.61806 0.25 4.40972 0.642857 4.375H9.75L6.1875 1.06771C5.9375 0.789931 5.9375 0.494792 6.1875 0.182292C6.47321 -0.0607639 6.77679 -0.0607639 7.09821 0.182292Z" fill="#1B1F23"/>
              </svg>
            
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M4.90179 0.182292L0.1875 4.55729C0.0625 4.67882 0 4.82639 0 5C0 5.17361 0.0625 5.32118 0.1875 5.44271L4.90179 9.81771C5.22321 10.0608 5.52679 10.0608 5.8125 9.81771C6.0625 9.50521 6.0625 9.21007 5.8125 8.93229L2.25 5.625H11.3571C11.75 5.59028 11.9643 5.38194 12 5C11.9643 4.61806 11.75 4.40972 11.3571 4.375H2.25L5.8125 1.06771C6.0625 0.789931 6.0625 0.494792 5.8125 0.182292C5.52679 -0.0607639 5.22321 -0.0607639 4.90179 0.182292Z" fill="#1B1F23"/>
                </svg>
            )}
          </div>
        </button>
      </Wrapper>
    );
  }
);

ArrowButton.propTypes = {
  arrowDirection: PropTypes.oneOf(['left', 'right']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default ArrowButton;
