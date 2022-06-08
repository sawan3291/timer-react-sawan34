import React, { useState, useEffect } from 'react';
import './style.css';

export default function Timer() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);

  const Timer = () => {
    const t = setInterval((counter) => {
      setCounter((c) => c + 1);
    }, 200);
    setTimer(t);
  };

  useEffect(() => {
    Timer();
    return () => clearInterval(timer);
  }, []);

  const stopTimer = () => {
    console.log(timer);
    setTimerStatus(true);
    clearInterval(timer);
  };

  const startTimer = () => {
    setTimerStatus(false);

    Timer();
  };
  return (
    <div>
      <p>counter : {counter} </p>
      <button disabled={timerStatus} onClick={stopTimer}>
        {' '}
        Stop Timer
      </button>
      <br />
      <br />

      <button disabled={!timerStatus} onClick={startTimer}>
        {' '}
        Start Timer
      </button>
    </div>
  );
}
