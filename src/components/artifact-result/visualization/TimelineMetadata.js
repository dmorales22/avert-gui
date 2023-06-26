import React from "react";

import {
  Card,
  Elevation,
  Text,
  EditableText,
  Popover,
  Menu,
  MenuItem,
  Position,
  Button,
} from "@blueprintjs/core";

function TimelineMetadata({ setTitle }) {
  return (
    <div className="avert-block">
      <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
        <Text> Timeline Metadata </Text>
        <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
          <EditableText
            className="timelineTitle"
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

export default TimelineMetadata;
