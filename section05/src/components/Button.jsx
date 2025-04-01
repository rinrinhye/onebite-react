import React from 'react';

export default function Button({ children, text, color = 'gray' }) {
  const handleButton = () => console.log(text);

  return (
    <button onClick={handleButton} style={{ color }}>
      {text}
      {children}
    </button>
  );
}
