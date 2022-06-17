import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="bg-white flex sticky top-0 z-10">
      <div className="w-[19%]"></div>
      <div className="w-[81%] flex justify-between px-8 py-1">
        <div className="flex gap-16 item-center">
          <div>
            <button>
              <img src="assests/images/topbar-icon.png" alt="" />
            </button>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                src="assests/images/topbar-home.png"
                alt=""
                className="h-[13.33px] w-3 mr-2"
              />{" "}
              <span className="text-xs text-light-blue font-semibold">
                Home
              </span>
            </div>
            {/* <span className="ml-2">Home</span> */}
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faGreaterThan}
                size="2xs"
                className="text-black/[0.5] mx-3 font-normal"
              />
              <span className="text-black/[0.5] text-xs font-semibold">
                Dashboard
              </span>
            </div>
          </div>
        </div>
        {/* Div For Language changing */}
        <div className="">
          <button className="flex gap-2 items-center">
            <img src="assests/images/lang-flag.png" alt="" />
            <span className="font-semibold text-xs">en</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
