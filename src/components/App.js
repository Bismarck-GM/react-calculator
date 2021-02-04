import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
