import PropTypes from 'prop-types';
import styled from 'styled-components';

// 858693

const Container = styled.div`
  background-color: #858693;
  color: white;
  font-size: 80px;
  font-weight: bold;
  padding: 10px;
  min-width: 100%;
  height: 100px;
  text-align: right;
`;

const Display = ({ result }) => (
  <Container>
    {result}
  </Container>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
