import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CardHeading from "../../UI/CardHeading";
import DateRangeComp from "./DateRangeComp";
import Card from "../../UI/Card";

const Graph = () => {
  const pdata = [
    { name: "9 feb", time: 0 },
    { name: "13 feb", time: -20 },
    { name: "17 feb", time: 10 },
    { name: "19 feb", time: 40 },
    { name: "21 feb", time: -50 },
    { name: "23 feb", time: 10 },
    { name: "25 feb", time: 20 },

    { name: "26 feb", time: 20 },

    { name: "27 feb", time: 20 },

    { name: "28 feb", time: 20 },

    { name: "29 feb", time: 20 },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...pdata.map((i) => i.time));
    const dataMin = Math.min(...pdata.map((i) => i.time));

    if (dataMax <= 0) {
      return 0;
    } else if (dataMin >= 0) {
      return 1;
    } else {
      return dataMax / (dataMax - dataMin);
    }
  };
  const off = gradientOffset();
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <CardHeading
            url="assests/images/graph-icon.png"
            heading="My Check In Trends"
            className="mb-0"
          />
        </div>
        <div className="flex gap-4 items-center">
          <DateRangeComp />
          <div className="p-[7px] bg-white rounded-[8px]">
            <input
              type="image"
              src="assests/images/settings-icon.png"
              className="flex items-center"
            />
          </div>
        </div>
      </div>
      <Card className="py-5 mt-2">
        <div>
          <ResponsiveContainer width="100%" height="100%" aspect={1.7}>
            <LineChart
              width={730}
              height={350}
              data={pdata}
              margin={{ top: 10, right: 40, left: 0, bottom: 5 }}
            >
              <CartesianGrid horizontal="" vertical="" />
              <XAxis
                dataKey="name"
                strokeWidth={0}
                tickCount={5}
                interval={0}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                strokeWidth={0}
                tickCount={9}
                interval={0}
                tick={{ fontSize: 12 }}
              />
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={off} stopColor="#4ADEB4" stopOpacity={1} />
                  <stop offset={off} stopColor="#EB5757" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Line
                type="monotone"
                dataKey="time"
                stroke="url(#splitColor)"
                strokeWidth={5}
                dot={false}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
};

export default Graph;
