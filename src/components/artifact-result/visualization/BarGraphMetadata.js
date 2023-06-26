import React from "react";

import { Text, Card, Elevation, EditableText } from "@blueprintjs/core";

function BarGraphMetadata({ setTitle, setYaxis, setXaxis }) {
  return (
    <div className="avert-block">
      <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
        <Text> Bargraph Metadata </Text>
        <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
          <EditableText
            className="barTitle"
            placeholder="Title"
            minWidth={300}
            onChange={(x) => {
              setTitle(x);
            }}
          >
            {" "}
          </EditableText>
        </Card>
        <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
          <EditableText
            className="xAxis"
            placeholder="X Axis"
            minWidth={300}
            onChange={(x) => setXaxis(x)}
          >
            {" "}
          </EditableText>
        </Card>
        <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
          <EditableText
            className="yAxis"
            placeholder="Y Axis"
            minWidth={300}
            onChange={(x) => setYaxis(x)}
          >
            {" "}
          </EditableText>
        </Card>
      </Card>
    </div>
  );
}

export default BarGraphMetadata;
