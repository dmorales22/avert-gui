import React, { useState } from "react";

import { Card, Elevation, Radio, RadioGroup } from "@blueprintjs/core";

function VisualizationType({ setType }) {
  const [selectedType, setSelectedType] = useState("pie");

  return (
    <div className="avert-block">
      <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
        <RadioGroup
          label="Visualization Type"
          onChange={(e) => {
            setSelectedType(e.target.value);
            setType(e.target.value);
          }}
          selectedValue={selectedType}
        >
          <Radio label="Pie Chart" value="pie" />
          <Radio label="Bar Graph" value="bar" />
          <Radio label="Timeline" value="timeline" />
        </RadioGroup>
      </Card>
    </div>
  );
}

export default VisualizationType;
