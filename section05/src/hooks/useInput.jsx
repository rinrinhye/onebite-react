import React, { useState } from 'react';

export default function useInput() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

/* 

사용하는 곳에서 
const [input, onChange] = useInput()

*/
