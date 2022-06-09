import React from 'react';

export const Button = ({ children, onClick, btnClass }) => {
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
