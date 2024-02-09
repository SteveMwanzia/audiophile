/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Button.css';

const Button = ({ backgroundColor, hoverColor, color, hoverTextColor, border, content, onClick }) => {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hoverColor : backgroundColor,
    color: isHovered ? hoverTextColor : color,
    border: border
  };

  return (
    <button
      className="button"
      style={buttonStyle}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;


