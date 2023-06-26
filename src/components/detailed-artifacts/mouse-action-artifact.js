import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

function MouseActionArtifact({ artifact }) {
  return (
    <div className="avert-block">
      <Text className="card-title">Mouse Action Artifact</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Timestamp : {artifact.artifact.timestamp}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Button : {artifact.button}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Mouse Action: {artifact.mouse_action}
        </Card>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Mouse Action Value : {artifact.mouse_action_value}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Active Window : {artifact.active_window}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Window Focus: {artifact.window_focus}
        </Card>
      </Card>
    </div>
  );
}

export default MouseActionArtifact;
