import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Row = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
`;

function ButtonPanel(props) {
  const { clickHandler } = props;
  const handleClick = buttonName => clickHandler(buttonName);
  return (
    <>
      <Row>
        <Button name="AC" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="+/-" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="%" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="÷" clickHandler={handleClick} wide="25%" color="#F5913E" />
      </Row>
      <Row>
        <Button name="7" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="8" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="9" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="x" clickHandler={handleClick} wide="25%" color="#F5913E" />
      </Row>
      <Row>
        <Button name="4" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="5" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="6" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="-" clickHandler={handleClick} wide="25%" color="#F5913E" />
      </Row>
      <Row>
        <Button name="1" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="2" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="3" clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="+" clickHandler={handleClick} wide="25%" color="#F5913E" />
      </Row>
      <Row>
        <Button name="0" clickHandler={handleClick} wide="50%" color="#EFEFEF" />
        <Button name="." clickHandler={handleClick} wide="25%" color="#EFEFEF" />
        <Button name="=" clickHandler={handleClick} wide="25%" color="#F5913E" />
      </Row>
    </>
  );
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
