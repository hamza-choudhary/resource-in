import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Topbar from "./Topbar";
import "./Navbar.css";
import Experiment from "../experiment/Experiment";

const Layout = (props) => {
  return (
    <>
      <Topbar />
      <div className="flex flex-wrap">
        <div className="w-[19%] shrink grow basis-auto">
          <Navbar className="" />
        </div>
        <div className="w-[81%] shrink grow basis-auto px-8">
          <Search />
          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
