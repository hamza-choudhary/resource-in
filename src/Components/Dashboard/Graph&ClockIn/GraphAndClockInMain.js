import React from "react";
import Accolades from "./Accolades";
import Graph from "./Graph";
import MarkClockIn from "./MarkClockIn";

const GraphAndClockInMain = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-[49%]">
          <Graph />
        </div>
        <div className="w-[49%] pt-3">
          <MarkClockIn />
          <Accolades className="pt-5" />
        </div>
      </div>
    </>
  );
};

export default GraphAndClockInMain;
