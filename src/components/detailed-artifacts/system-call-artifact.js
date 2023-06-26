import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
function SystemCallArtifact({artifact}) {
  return (
    <div className="avert-block">
      <Text className="card-title">System Call Artifact</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Timestamp : {artifact.artifact.timestamp}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          System Call Name : {artifact.systemcall_name}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          System Call Argument : {artifact.systemcall_args}
        </Card>
      </Card>
    </div>
  );
}

export default SystemCallArtifact;
