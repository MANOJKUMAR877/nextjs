"use client";
import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";

export default function page() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
   // console.log(select(svgRef.current));
    select(svgRef.current)
      .append("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("fill", "red");
  });
  return (
    <div>
      <svg ref={svgRef}>
      
      </svg>
    </div>
  );
}
