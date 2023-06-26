import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
function KeystrokeArtifact({ artifact }) {
  return (
    <div className="avert-block">
      <Text className="card-title">Keystroke Artifact</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Timestamp : {artifact.artifact.timestamp}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Keypress : {artifact.key_press}
        </Card>
      </Card>
    </div>
  );
}

export default KeystrokeArtifact;
