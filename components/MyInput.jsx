import React from 'react';

export default function MyInput({ placeholder, value, onKeyPress, onChange, type }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </>
  );
}
