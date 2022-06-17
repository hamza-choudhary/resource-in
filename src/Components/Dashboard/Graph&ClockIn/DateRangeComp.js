import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import { useState } from "react";

const DateRangeComp = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={`${format(range[0].startDate, "LLL dd, yyyy")} to ${format(
              range[0].endDate,
              "LLL dd, yyyy"
            )}`}
            onClick={() => setOpen((open) => !open)}
            className="outline-none bg-transparent text-xs text-black/[0.5] font-semibold"
          />
          <img
            src="assests/images/dropdown-icon.png"
            alt=""
            className="w-2 h-1"
          />
        </div>

        {open && (
          <DateRange
            ranges={range}
            onChange={(item) => setRange([item.selection])}
            months={2}
            className="absolute left-0  top-[30px]"
          />
        )}
      </div>
    </>
  );
};

export default DateRangeComp;
