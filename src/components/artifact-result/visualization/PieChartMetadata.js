import React from "react";

import { Card, Elevation, Text, EditableText } from "@blueprintjs/core";

function PieChartMetadata({ setTitle }) {
  return (
    <div className="avert-block">
      <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
        <Text> Piechart Metadata </Text>
        <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
          <EditableText
            className="Title"
            placeholder="Title"
            minWidth={300}
            onChange={(x) => setTitle(x)}
          >
            {" "}
          </EditableText>
        </Card>
      </Card>
    </div>
  );
}

export default PieChartMetadata;
