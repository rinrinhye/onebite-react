import React from 'react';

export default function Controller({ onClickButton }) {
  return (
    <div>
      <button type="button" value={-1} onClick={onClickButton}>
        -1
      </button>
      <button type="button" value={-10} onClick={onClickButton}>
        -10
      </button>
      <button type="button" value={-100} onClick={onClickButton}>
        -100
      </button>
      <button type="button" value={+100} onClick={onClickButton}>
        +100
      </button>
      <button type="button" value={+10} onClick={onClickButton}>
        +10
      </button>
      <button type="button" value={+1} onClick={onClickButton}>
        +1
      </button>
    </div>
  );
}
