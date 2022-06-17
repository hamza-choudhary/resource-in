import React from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";
import format from "date-fns/format";
import "./MarkClockIn.css";

const MarkClockIn = () => {
  const date = new Date();
  return (
    <>
      <CardHeading
        url="assests/images/icons/clockin-icon.png"
        heading="Mark Clock In/Clock Out"
      />
      <Card className="px-2 py-5">
        <div>
          <div className="flex justify-between clock-in-border ">
            <div className="">
              <img
                src="assests/images/clockin.png"
                alt=""
                className="w-12 h-12 ml-5"
              />
            </div>
            <div className="">
              <p className="text-xs font-semibold text-right text-black/[0.5]">
                {format(date, "LLLL dd, yyyy")}
              </p>
              <p className="text-[40px] mt-7 text-black/[0.5]">00:00:00</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <p className="text-[12px] text-black/[0.5]">Expected</p>
              <p className="text-[12px] text-black/[0.5]">07:00 PM</p>
              <p className="text-[12px] text-black/[0.5]">02:30 PM</p>
            </div>
            <div className="my-3">
              <p className="font-semibold text-[12px] text-black/[0.5]">
                Punched
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default MarkClockIn;
