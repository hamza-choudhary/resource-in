import React, { useEffect, useState } from "react";
import CardHeading from "../../UI/CardHeading";

const Clock = (props) => {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState();

  //For Getting the Time
  useEffect(() => {
    const getTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      //Main Time calculation
      const currTime = `${hours % 12} : ${
        minutes <= 9 ? `0${minutes}` : minutes
      } ${hours > 12 ? "PM" : "AM"}`;
      setTime(currTime);
    };
    const timer = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //For getting the date

  const getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    setDay(date.getDate());
    const monthName = months[date.getMonth()];
    setMonth(monthName);
    setYear(date.getFullYear());
  };
  useEffect(() => {
    getDate();
  }, []);

  const getTimeZone = () => {
    const date = new Date();
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  return (
    <>
      <div className={props.className}>
        <CardHeading url="" heading="Clock" className="w-[49%]" />
        <div className="bg-light-blue flex rounded-[12px] py-10 h-[100%]">
          <div className="clock w-[50%] flex-col items-center flex justify-center text-white/[0.5]">
            <p className="mb-5">{getTimeZone()}</p>
            <img
              src="assests/images/clock.png"
              alt=""
              className="h-[75px] w-[75px]"
            />
            <p className="mt-5">{time}</p>
          </div>
          <div className="date w-[50%] flex-col items-center flex justify-center text-white/[0.75] border-l-2 border-white/[0.5]">
            <h2 className="text-[80px] font-light">{day}</h2>
            <p className="text-[30px] font-semibold">{`${month} , ${year}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
