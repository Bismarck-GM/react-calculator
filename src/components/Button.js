import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <button type="button">
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: 'Calc Button',
};

Button.propTypes = {
  name: PropTypes.string,
};
export default Button;
