import React, { useState, useEffect, useRef } from "react";

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };
  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };
  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on component unmount
  }, []);
  return (
    <div>
      <h2>Timer: {time} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
export default TimerApp;
