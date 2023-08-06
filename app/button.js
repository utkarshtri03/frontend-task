import React from "react";

const Button = ({ name, handleClick }) => {
  return (
    <div>
      <button
        className="bg-orange-600 w-36 rounded-md h-10"
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
