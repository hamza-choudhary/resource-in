import React from "react";

const Search = (props) => {
  return (
    <div className="flex justify-between py-6">
      <div className="flex-none relative">
        <input
          type="text"
          className="bg-white rounded-lg h-12 w-80 pl-3 text-sm  focus:outline-none "
          placeholder="Search here...."
        />
        <button className="absolute top-1.5 right-1.5">
          <img src="assests/images/search-btn.png" alt="" className="h-9" />
        </button>
      </div>

      <div className="flex-none flex gap-x-5 items-center">
        <div className="flex-none">
          <button className="p-4 rounded-lg bg-white">
            <img
              src="assests/images/ring-bell.png"
              alt=""
              className="h-5 w-4 "
            />
          </button>
        </div>
        <div className="flex-none">
          <button className="flex bg-white p-2 rounded-lg items-center gap-3">
            <div className="flex items-center">
              <img
                src="assests/images/arrow-down.png"
                alt=""
                className="h-1 mr-2"
              />
              <span className="text-black/[0.5] text-xs font-semibold">
                UserName
              </span>
            </div>
            <div>
              <img
                src="assests/images/user-emoji.png"
                alt=""
                className="bg-light-blue p-1 rounded-lg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
