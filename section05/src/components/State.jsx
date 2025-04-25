import React, { useState } from 'react';

export default function State() {
  const [state, setState] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        {state}
      </button>
    </>
  );
}
