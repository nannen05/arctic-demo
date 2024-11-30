import PropTypes from 'prop-types';

export default function AltText(props) {
  const { Element = 'p', children, className } = props;

  return (
    <Element
      className={`text-[16px] font-normal leading-[18.96px] ${className}`}
    >
      {children}
    </Element>
  );
}

AltText.propTypes = {
  className: PropTypes.string,
  Element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p']),
  children: PropTypes.node.isRequired,
};
