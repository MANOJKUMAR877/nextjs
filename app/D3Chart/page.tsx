"use client";
// import React, { useRef, useEffect } from "react";
// import { select } from "d3-selection";

// export default function MyPage() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   useEffect(() => {
//    // console.log(select(svgRef.current));
//     select(svgRef.current)
//       .append("rect")
//       .attr("width", 100)
//       .attr("height", 100)
//       .attr("fill", "red");
//   });
//   return (
//     <div>
//       <svg ref={svgRef}>
      
//       </svg>
//     </div>
//   );
// }

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  x: number;
  y: number;
}

interface LineChartProps {
  data: DataPoint[];
  width: number;
  height: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(data, d => d.x) || 0])
                    .range([0, width]);

    const yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, d => d.y) || 0])
                    .range([height, 0]);

    const line = d3.line<DataPoint>()
                   .x(d => xScale(d.x))
                   .y(d => yScale(d.y))
                   .curve(d3.curveLinear);

    svg.selectAll('*').remove(); // Clear existing elements

    svg.append('path')
       .datum(data)
       .attr('fill', 'none')
       .attr('stroke', 'steelblue')
       .attr('stroke-width', 2)
       .attr('d', line);

    svg.selectAll('circle')
       .data(data)
       .enter()
       .append('circle')
       .attr('cx', d => xScale(d.x))
       .attr('cy', d => yScale(d.y))
       .attr('r', 4)
       .attr('fill', 'steelblue');

    // Add X axis
    svg.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

    // Add Y axis
    svg.append('g')
       .call(d3.axisLeft(yScale));

  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default LineChart;
