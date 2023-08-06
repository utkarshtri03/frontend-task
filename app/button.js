import React from "react";

const Button = ({ name, handleClick, className }) => {
  return (
    <div>
      <button className={className} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
