import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 700px;
  align-items: center;
  justify-content: center; 
`;

const App = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setData(calculate(data, buttonName));
  };
  return (
    <Container>
      <Display result={data.next || data.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </Container>
  );
};

export default App;
