import React from "react";
import Clock from "./Clock";
import LeaveSummary from "./LeaveSummary";

const LeaveSummaryClockMain = () => {
  return (
    <>
      <div className="flex gap-5 mt-7">
        <LeaveSummary className="w-[50%] flex flex-col" />
        <Clock className="w-[50%] flex flex-col" />
      </div>
    </>
  );
};

export default LeaveSummaryClockMain;
