import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, "0");
    const day = String(currentTime.getDate()).padStart(2, "0");
    const hour = String(currentTime.getHours()).padStart(2, "0");
    const minute = String(currentTime.getMinutes()).padStart(2, "0");
    const second = String(currentTime.getSeconds()).padStart(2, "0");
    const weekday = weekdays[currentTime.getDay()];

    return `${year}/${month}/${day} (${weekday}) ${hour}:${minute}:${second}`;
  };

  return (
    <div>
      {formatTime()}
    </div>
  );
};

export default TimeDisplay;
