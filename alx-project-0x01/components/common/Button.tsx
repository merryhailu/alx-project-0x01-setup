import React from 'react';

const Button: React.FC<{ text: string; onClick?: () => void }> = ({ text, onClick }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
    {text}
  </button>
);

export default Button;