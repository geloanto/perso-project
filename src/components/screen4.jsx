import { useState, useEffect } from 'react';


function ScreenFour () {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [targets, setTargets] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const startGame = () => {
    setScore(0);
    setTime(60);
    setTargets([]);
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      showTarget();
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
    }
  }, [time, intervalId]);

  const showTarget = () => {
    const targetId = Date.now();
    const newTarget = {
      id: targetId,
      top: Math.random() * 500,
      left: Math.random() * 600,
    };
    setTargets((prevTargets) => [...prevTargets, newTarget]);

    setTimeout(() => {
      setTargets((prevTargets) => prevTargets.filter((target) => target.id !== targetId));
    }, 2000);
  };

  const handleTargetClick = (id) => {
    setScore((prevScore) => prevScore + 1);
    setTargets((prevTargets) => prevTargets.filter((target) => target.id !== id));
  };

  return (
    <section id="screen-4">
    <button className="start_btn" onClick={startGame}>Start / Restart</button>
      <div className="container">
      <div className="score">Score: {score}</div>
        <div className="time">Temps: {time}</div>
        {time === 0 ? (
          score >= 55 ? (
            <div className="you-win">You win😎</div>
          ) : (
            <div className="you-lose">You lose😞</div>
          )
        ) : (
        
        targets.map((target) => (
          <img
            key={target.id}
            id="target"
            src="src/Layer 2.png"
            alt="target"
            style={{ position: 'absolute', top: target.top, left: target.left }}
            onClick={() => handleTargetClick(target.id)}
          />
        ))
      )}
    </div>
    </section>
  );
}

export default ScreenFour;


