import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const dataPointValue = props.dataPoint.map((data) => data.value);
  const totalMaxValue = Math.max(...dataPointValue);
  console.log({ maxvalue: totalMaxValue });
  return (
    <div className="chart">
      {props.dataPoint.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxvalue={totalMaxValue}
          label={data.label}
        />
      ))}
    </div>
  );
};
