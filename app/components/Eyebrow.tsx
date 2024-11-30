import PropTypes from 'prop-types';

export default function Eyebrow(props) {
  const { Element = 'p', className, children } = props;

  return (
    <Element
      className={`text-[0.813rem] font-normal leading-[1.113rem] tracking-[4%] lg:text-[16px] lg:leading-[19px] ${className}`}
    >
      {children}
    </Element>
  );
}

Eyebrow.propTypes = {
  Element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p']),
  children: PropTypes.node.isRequired,
};
