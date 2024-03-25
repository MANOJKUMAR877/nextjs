"use client";
import React from "react";

export default function page() {
  let a = ["a", "ba", "cda", "manoj", "janom", "noajm"];
  let b = ["ab", "dac", "manoj"];

  let r = a.map((c) => c.split("").sort().join(""));
  a = r
  let x = b.map((f) => f.split("").sort().join(""));
  b = [... new Set(x)]

  
console.log(a,x)
//   let arr = [];
//   a.filter((dr) => {
//     b.filter((d) => {
//       if (d == dr) {
//         arr.push(d);
//       }
//     });


//   });

  //console.log(arr)

  return <div>{a}</div>;
}
