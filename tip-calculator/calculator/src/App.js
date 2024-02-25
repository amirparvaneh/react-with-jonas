import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, stePercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * ((percentage1 + percentage2) / 2)) / 100;

  const handleReset = () => {
    setBill("");
    stePercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={stePercentage1}>
        How much did you like the service ?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How much your friend like the service?
      </SelectPercentage>
      <OutPut tip={tip} onHandle={handleReset} />
      <Reset />
    </div>
  );
};

const BillInput = () => {
  return (
    <div>
      <label>How much was the bill? </label>
      <input type="text" placeholder="Bill value" />
    </div>
  );
};

const SelectPercentage = ({ percentage, onSelect, children }) => {
  return (
    <div value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
      <label>{children}</label>
      <select>
        <option value="0">Disatisfied 0%</option>
        <option value="5">It was okay 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">Absoloutly okay 20%</option>
      </select>
    </div>
  );
};

const OutPut = ({ bill, tip }) => {
  return (
    <h3>
      you pay ${bill + tip} (${bill} + ${tip})
    </h3>
  );
};

const Reset = ({ onHandle }) => {
  return (
    <div onClick={onHandle}>
      <button>Reset</button>
    </div>
  );
};

export default App;
