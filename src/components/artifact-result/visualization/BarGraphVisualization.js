import React, { useEffect } from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import BarGraphMetadata from "./BarGraphMetadata";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function BarGraphVisualization({ data, title, xaxis, yaxis }) {
  const data2 = [
    {
      name: "Page A",
      count: 4000,
    },
    {
      name: "Page B",
      count: 3000,
    },
    {
      name: "Page C",
      count: 2000,
    },
    {
      name: "Page D",
      count: 2780,
    },
    {
      name: "Page E",
      count: 1890,
    },
    {
      name: "Page F",
      count: 2390,
    },
    {
      name: "Page G",
      count: 3490,
    },
  ];

  useEffect(() => {
    console.log("bar chart data changed!");

    console.log(data);
  }, [data]);

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
            <Text>Bar graph title: {title}</Text>
            <Text>X Axis Title: {xaxis}</Text>
            <Text>Y Axis Title: {yaxis}</Text>
            <BarChart
              width={730}
              height={250}
              data={Object.entries(data).map((a) => ({
                name: a[0],
                count: a[1],
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>
        )}
      </Card>
    </div>
  );
}

export default BarGraphVisualization;
