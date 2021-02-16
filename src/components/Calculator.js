import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;
`;

const CalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  min-width: 700px;
  align-items: center;
  justify-content: center; 
`;

const Calculator = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setData(calculate(data, buttonName));
  };
  return (
    <Container>
      <h1>Let&apos;s do some Math!</h1>
      <CalcContainer>
        <Display result={data.next || data.total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </CalcContainer>
    </Container>
  );
};

export default Calculator;
