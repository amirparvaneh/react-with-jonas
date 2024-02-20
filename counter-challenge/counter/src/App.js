import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  const date = new Date("Feb 18 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>Step : {step}</span>
      </div>
      <div>
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCounter(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{`${date}`}</span>
      </p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>reset</button>
        </div>
      )}
    </div>
  );
};
