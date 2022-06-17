import React from "react";

const Button = (props) => {
  return (
    <button
      className={`py-2 px-6 text-white text-lighter rounded-[8px] text-[14px] ${props.className}`}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default Button;
