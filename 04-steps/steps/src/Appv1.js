import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePervious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button>
              <Button bgColor="#7950f2" color="#fff" onClick={handlePervious}>
                pervious <span>👈</span>
              </Button>
            </button>
            <button>
              <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
                next <span>👉</span>
              </Button>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Button = ({ bgColor, onClick, color, children }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, color: color }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
