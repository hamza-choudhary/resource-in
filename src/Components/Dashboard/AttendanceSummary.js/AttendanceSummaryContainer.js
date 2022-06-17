import React from "react";
import AttendanceSummaryCard from "./AttendanceSummaryCard";

const AttendanceSummaryContainer = () => {
  const absent = 10;
  return (
    <>
      <div className="my-6">
        <div className="flex gap-3 mb-3 items-center">
          <img
            src="assests/images/attendance-icon.png"
            alt=""
            className="h-4 w-4"
          />
          <h2 className="font-semibold text-black/[0.5] text-xs">
            Attendance Summary
          </h2>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="w-[15.3%]">
            <AttendanceSummaryCard
              value={absent}
              text={absent === 0 ? "0" : absent}
              pathColor={absent > 0 ? "#EB5757" : "#4ADEB4"}
              trailColor={
                absent > 0
                  ? "rgba(235, 87, 87, 0.5)"
                  : "rgba(74, 222, 180, 0.5)"
              }
              category="Absents"
            />
          </div>

          <div className="w-[15.3%]">
            <AttendanceSummaryCard
              value={absent}
              text={absent === 0 ? "0" : absent}
              pathColor={absent > 0 ? "#EB5757" : "#4ADEB4"}
              trailColor={
                absent > 0
                  ? "rgba(235, 87, 87, 0.5)"
                  : "rgba(74, 222, 180, 0.5)"
              }
              category="Missing
          Punches"
            />
          </div>

          <div className="w-[15.3%]">
            <AttendanceSummaryCard
              value={absent}
              text={absent === 0 ? "0" : absent}
              pathColor={absent > 0 ? "#EB5757" : "#4ADEB4"}
              trailColor={
                absent > 0
                  ? "rgba(235, 87, 87, 0.5)"
                  : "rgba(74, 222, 180, 0.5)"
              }
              category="Short
          Duration"
            />
          </div>

          <div className="w-[15.3%]">
            <AttendanceSummaryCard
              value={absent}
              text={absent === 0 ? "0" : absent}
              pathColor={absent > 0 ? "#EB5757" : "#4ADEB4"}
              trailColor={
                absent > 0
                  ? "rgba(235, 87, 87, 0.5)"
                  : "rgba(74, 222, 180, 0.5)"
              }
              category="Late
          Arrivals"
            />
          </div>

          <div className="w-[15.3%]">
            <AttendanceSummaryCard
              value={absent}
              text={absent === 0 ? "0" : absent}
              pathColor={absent > 0 ? "#EB5757" : "#4ADEB4"}
              trailColor={
                absent > 0
                  ? "rgba(235, 87, 87, 0.5)"
                  : "rgba(74, 222, 180, 0.5)"
              }
              category="Early Left"
            />
          </div>

          <div className="w-[15.3%]">
            <AttendanceSummaryCard
              value={absent}
              text={absent === 0 ? "0" : absent}
              pathColor={absent > 0 ? "#EB5757" : "#4ADEB4"}
              trailColor={
                absent > 0
                  ? "rgba(235, 87, 87, 0.5)"
                  : "rgba(74, 222, 180, 0.5)"
              }
              category="Relaxations"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceSummaryContainer;
