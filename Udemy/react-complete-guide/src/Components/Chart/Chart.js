import { isExtensible } from "harmony-reflect";
import Reach from "react";

import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(item => item.value);
  const totalMaximium = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((item) => {
        return (<ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximium}
          label={item.label}
        />)
      })}
    </div>
  );
};

export default Chart;
