import { useState } from "react";
import DateInputForm from "./DateInputForm";
import Result from "./Result";

function AgeCalculator() {
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  return (
    <div className="container">
      <DateInputForm setAge={setAge} />
      <Result age={age} />
    </div>
  );
}

export default AgeCalculator;
