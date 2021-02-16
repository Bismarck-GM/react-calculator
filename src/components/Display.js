import PropTypes from 'prop-types';
import styled from 'styled-components';

// 858693

const Container = styled.div`
  box-sizing: border-box;
  background-color: #858693;
  padding: 20px;
  min-width: 100%;
  max-width: 100%;
  max-height: 100px;
`;

const Result = styled.p`
  align-self: center;
  justify-self: center;
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-align: right;
  vertical-align: middle;
  margin: auto;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow : hidden;
`;

const Display = ({ result }) => (
  <Container>
    <Result>{result}</Result>
  </Container>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
