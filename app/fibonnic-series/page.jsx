"use client";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = React.useState();
  const [sumValue, setSumValue] = useState(0);
  let n1 = 0;
  let n2 = 1;
  let next;
  const fibonnic = () => {
    //method 1

    for (let i = 1; i <= inputValue + 1; i++) {
      //console.log(n1);
      next = n1 + n2;
      n1 = n2;
      n2 = next;
    }
    setInputValue(0);

    // method 2

    // program to display fibonacci sequence using recursion
    function fibonacci(num) {
      if (num < 2) {
        return num;
      } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
      }
    }

    // take nth term input from the user
    const nTerms = inputValue

    if (nTerms <= 0) {
      console.log("Enter a positive integer.");
    } else {
      for (let i = 0; i < nTerms; i++) {
        console.log("sf",fibonacci(i));
      }
    }
  };

  return (
    <div>
      <label>Enter the number</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      {sumValue}
      <button onClick={fibonnic}>Submit</button>
    </div>
  );
}
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'stringAnagram' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY dictionary
 *  2. STRING_ARRAY query
 */

