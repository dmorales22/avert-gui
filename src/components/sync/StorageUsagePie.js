import React from "react";
import { Card, Elevation, Divider, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

import { Cell, Pie, PieChart, Legend } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF80a2",
  "#53C4eF",
];

/*
 Author: Team 3
 Purpose: Creates the pie chart containing storage usage
 @requires AVERT needs to be running.
 @ensures \result Pie chart containing the used and unused storage usage
 */
function StorageUsagePie({ syncStatus }) {
  let data = [
    {
      name: "Free Storage",
      value: syncStatus["total_storage"] - syncStatus["used_storage"],
    },
    {
      name: "Used Storage",
      value: syncStatus["used_storage"],
    },
  ];

  return (
    <div>
      <Card elevation={Elevation.THREE}>
        <Row>
          <Col className="text-center">
            <h2>Storage Usage</h2>
          </Col>
        </Row>

        <Divider className="mb-4" />

        <Text>Used storage: {syncStatus["used_storage"]}GB</Text>
        <Text>
          Free storage:{" "}
          {syncStatus["total_storage"] - syncStatus["used_storage"]}GB
        </Text>
        <Text>Total storage: {syncStatus["total_storage"]}GB</Text>
        <Row>
          <Col>
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default StorageUsagePie;
