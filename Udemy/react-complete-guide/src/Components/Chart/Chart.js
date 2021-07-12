import { isExtensible } from "harmony-reflect";
import Reach from "react";

import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.items.map((item) => {
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={null}
          label={item.label}
        />;
      })}
    </div>
  );
};

export default Chart;
