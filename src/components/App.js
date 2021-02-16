import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setData(calculate(data, buttonName));
  };
  return (
    <>
      <Display result={data.next || data.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
