"use client";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = React.useState();
  const [sumValue, setSumValue] = useState(0);
  let sum=0
  const fibonnic = () => {
    for (let i = 1; i < inputValue + 1; i++) {
       sum = sum + i;
      setSumValue(sum);
    }
    setInputValue(0)
  };

  return (
    <div>
      <label>Enter the number</label>
      <input value ={inputValue}onChange={(e) => setInputValue(Number(e.target.value))} />
      {sumValue}
      <button onClick={fibonnic}>Submit</button>
    </div>
  );
}
