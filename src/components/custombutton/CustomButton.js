import React from 'react';
import './CustomButton.css';

const CustomButton = ({ onClick, text, addClass }) => {
  return (
    <button className={`customButton ${addClass}`} onClick={onClick}>{text}</button>
  );
};

export default CustomButton;
