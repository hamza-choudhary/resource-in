import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Card from "../../UI/Card";

const AttendanceSummaryCard = ({
  value,
  text,
  pathColor,
  trailColor,
  category,
}) => {
  return (
    <Card className="px-3 py-3">
      <div className="flex items-center">
        <div className="w-[50%]">
          <CircularProgressbar
            value={value}
            text={text}
            maxValue={30}
            minValue={0}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: pathColor,
              trailColor: trailColor,
            })}
          ></CircularProgressbar>
        </div>
        <div className="w-[50%] pl-3">
          <p className="text-xs font-semibold">
            Total <span className="text-light-blue">{category}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AttendanceSummaryCard;
