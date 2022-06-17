import React, { Component } from "react";
import Select from "react-select";

const Experiment = (props) => {
  // const nazamTiming = async () => {
  //   const date = new Date();
  //   console.log(
  //     date.getMonth() + 1 + "  " + date.getFullYear() + date.getDay()
  //   );
  //   const res = await fetch(
  //     `http://api.aladhan.com/v1/hijriCalendar?latitude=30.3753&longitude=69.3451&method=2&month=${date.getMonth()}&year=${date.getFullYear()}`
  //   );

  //   const data = await res.json();
  //   console.log(data);
  // };

  // nazamTiming();
  return (
    <>
      <label htmlFor="">{props.label}</label>
      <Select options={props.options} onChange={props.onChange} />
      <p>hjkashjkfhjkashfjkh</p>
    </>
  );
};

export default Experiment;
