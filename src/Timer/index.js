import React, { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    const total_seconds = Math.floor(milliseconds / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);

    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    return `${days}d: ${hours}h: ${minutes}m: ${seconds}s`;
  };

  return (
    <div className="timer-container">
      <div className="timer-display">
        {time > 0 ? getFormattedTime(time) : "Time's up!"}
      </div>
    </div>
  );
};

export default Timer;