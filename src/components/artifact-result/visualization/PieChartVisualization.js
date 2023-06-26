import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import PieChartMetadata from "./PieChartMetadata";

import { Cell, Pie, PieChart, Legend } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF80a2",
  "#53C4eF",
];

function PieChartVisualization({ data, title }) {
  return (
    <div className="avert-block">
      <Card
        elevation={Elevation.ZERO}
        style={{ padding: 8, marginTop: 4 }}
        id="visualizationdivboxdiv"
      >
        {data["a"] === -1 ? (
          <Text>Click generate graph to generate a pie graph!</Text>
        ) : (
          <div>
            <Text>Pie Chart title: {title}</Text>
            <PieChart width={730} height={300}>
              <Pie
                data={Object.entries(data).map((a) => ({
                  name: a[0],
                  value: a[1],
                }))}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {Object.entries(data)
                  .map((a) => ({
                    name: a[0],
                    value: a[1],
                  }))
                  .map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
              </Pie>
              <Legend />
            </PieChart>
          </div>
        )}
      </Card>
    </div>
  );
}

export default PieChartVisualization;
