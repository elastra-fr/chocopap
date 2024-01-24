import React from 'react';
import './CustomButton.css';

const CustomButton = ({ onClick, text }) => {
  return (
    <button className="customButton" onClick={onClick}>{text}</button>
  );
};

export default CustomButton;
