import React from "react";

const SuhoorIftarTiming = () => {
  const namazTimings = () => {
    const date = new Date();
    const onSuccess = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const url = `http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&month=${
        date.getMonth() + 1
      }&year=${date.getFullYear}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      console.log("okay");
    };
    const onError = (err) => {
      console.log("err");
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };
  // namazTimings();

  const logoutHandler = () => {};

  return <button onClick={logoutHandler}>Logou</button>;
};

export default SuhoorIftarTiming;
