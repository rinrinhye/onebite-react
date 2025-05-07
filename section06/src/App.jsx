import { useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (e) => {
    const { value } = e.target;

    setCount((prev) => {
      return prev + Number(value);
    });
  };
  return (
    <>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </>
  );
}

export default App;
