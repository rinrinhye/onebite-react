import React from 'react';

export default function Viewer({ count }) {
  return (
    <div>
      <p>현재 카운트 : </p>
      <h2>{count}</h2>
    </div>
  );
}
