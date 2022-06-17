import React from "react";

const CardHeading = (props) => {
  return (
    <div className={`flex gap-3 mb-3 items-center ${props.className}`}>
      <img src={props.url} alt="" className="h-4 w-4" />
      <h2 className="font-semibold text-black/[0.5] text-xs">
        {props.heading}
      </h2>
    </div>
  );
};

export default CardHeading;
