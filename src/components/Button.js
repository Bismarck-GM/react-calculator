import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  min-width: ${props => (props.wide)};
  border: 1px solid #D1D1D1;
  font-size: 30px;
  background-color: ${props => (props.color)}
`;

const Button = props => {
  const {
    name,
    clickHandler,
    color,
    wide,
  } = props;
  const handleClick = () => { clickHandler(name); };
  return (
    <ButtonContainer type="button" onClick={handleClick} color={color} wide={wide}>
      {name}
    </ButtonContainer>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
