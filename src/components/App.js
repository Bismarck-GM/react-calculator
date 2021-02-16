import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: null,
//       next: null,
//       // eslint-disable-next-line react/no-unused-state
//       operation: null,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     const data = this.state;
//     this.setState(calculate(data, buttonName));
//   }

//   render() {
//     const { next, total } = this.state;
//     return (
//       <>
//         <Display result={next || total || '0'} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }

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
