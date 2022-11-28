import React, { useState } from "react";
import { useEffect } from "react";

const Lovedays = () => {
  const [timerDay, settimerDay] = useState("000");
  const [timerHour, settimerHour] = useState("00");
  const [timerMinute, settimerMinute] = useState("00");
  const [timerSecond, settimerSecond] = useState("00");

  function count(date) {
    let days, hours, minutes, seconds;
    const nowDate = new Date();

    const startDay = nowDate.getTime();

    const endDay = new Date(date).getTime();

    let timeRemaining = parseInt((startDay - endDay) / 1000);

    days = parseInt(timeRemaining / 86400);

    timeRemaining = timeRemaining % 86400;

    hours = parseInt(timeRemaining / 3600);

    timeRemaining = timeRemaining % 3600;

    minutes = parseInt(timeRemaining / 60);

    timeRemaining = timeRemaining % 60;

    seconds = parseInt(timeRemaining);

    settimerDay(days);
    settimerHour(hours);
    settimerMinute(minutes);
    settimerSecond(seconds);
  }

  setInterval(function () {
    count("Sat Jan 29 2022 19:25:00 GMT+0700 (Giờ Đông Dương)");
  }, 1000);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <span className="text-pink-500 text-2xl">
          CHÚNG MÌNH YÊU NHAU ĐƯỢC :
        </span>
      </div>
      <div className=" flex w-full h-full justify-center rounded-xl mt-20 ">
        <div className="bg-pink-300 w-32 h-32 text-center py-8 items-center mb-8 rounded-full mx-10">
          <span className="days text-2xl my-0">{timerDay}</span> <br />
          <span className="text-2xl">Days</span>
        </div>

        <div className=" bg-pink-300 w-32 h-32 text-center py-8 items-center mb-8 rounded-full mx-10">
          <span className="hours text-2xl my-0">{timerHour}</span> <br />
          <span className="text-2xl">Hours</span>
        </div>

        <div className=" bg-pink-300 w-32 h-32 text-center py-8 items-center mb-8 rounded-full mx-10">
          <span className="minutes text-2xl my-0">{timerMinute}</span> <br />
          <span className="text-2xl">Minutes</span>
        </div>

        <div className=" bg-pink-300 w-32 h-32 text-center py-8 items-center mb-8 rounded-full mx-10">
          <span className="seconds text-2xl my-0">{timerSecond}</span> <br />
          <span className="text-2xl">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Lovedays;
