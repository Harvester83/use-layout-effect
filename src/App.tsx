import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Таймер</h2>
      <p>Прошло времени: {seconds} секунд</p>
    </div>
  );
};

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState(true);

  const toggleTimer = () => {
    setShowTimer(prevShowTimer => !prevShowTimer);
  };

  return (
    <div>
      <button onClick={toggleTimer}>
        {showTimer ? 'Скрыть таймер' : 'Показать таймер'}
      </button>

      {showTimer && <Timer initialSeconds={0} />}
    </div>
  );
};

export default App;
