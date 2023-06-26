import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import image from "./wireshark-image.jpeg";
console.log(image);
function ScreenshotArtifact({ artifact }) {
  return (
    <div className="avert-block">
      <Text className="card-title">Screenshot Artifact</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <img
          src={`data:image/png;base64,${artifact.screenshot_file}`}
          alt="Image"
        />
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Timestamp : {artifact.artifact.timestamp}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Still Screenshot Size : {artifact.screenshot_size}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Still Screenshot Format: {artifact.screenshot_format}
        </Card>
      </Card>
    </div>
  );
}

export default ScreenshotArtifact;
