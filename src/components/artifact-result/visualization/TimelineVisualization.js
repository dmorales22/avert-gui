import React from "react";

import { Button, Card, Elevation, Text } from "@blueprintjs/core";
import TimelineMetadata from "./TimelineMetadata";

import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

import { CanvasJSChart } from "canvasjs-react-charts";

const COLORS = [
  "#087E8B",
  "#BBE1C3",
  "#724E91",
  "#E54F6D",
  "#F8C630",
  "#A8F9FF",
  "#81A094",
  "#BDC667",
  "#9AE5E6",
  "#77966D",
];

function TimelineVisualization({ data, title }) {
  function apiDataToVisualizationData(data) {
    return Object.entries(data).map((e) => ({
      type: "scatter",
      name: e[0],
      showInLegend: true,
      xValueType: "dateTime",
      toolTipContent:
        '<span style="color:#087E8B ">{name}</span><br>{x}<br>{tooltip}',
      dataPoints: e[1],
    }));
  }

  let options = {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: title,
    },
    axisX: {
      title: "Time",
    },
    axisY: {
      title: "Type",
      labelFormatter: () => "",
    },
    legend: {
      cursor: "pointer",
    },
    data: apiDataToVisualizationData(data),
  };

  return (
    <div className="avert-block">
      <Card
        elevation={Elevation.ZERO}
        style={{ padding: 8, marginTop: 4 }}
        id="visualizationdivboxdiv"
      >
        {data["a"] === -1 ? (
          <Text>Click generate graph to generate a bar graph!</Text>
        ) : (
          <div>
            <div style={{ width: 1200, height: 350 }}>
              <CanvasJSChart options={options} />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

export default TimelineVisualization;
