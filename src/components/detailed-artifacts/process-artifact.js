import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
function ProcessArtifact({artifact}) {
  return (
    <div className="avert-block">
      <Text className="card-title">Process Artifact Component</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Timestamp : {artifact.artifact.timestamp}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          User Name : {artifact.user_name}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Process Name : {artifact.process_name}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Process ID : {artifact.process_id}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Parent Process ID : {artifact.parent_process_id}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Start Time : {artifact.start_time}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Command: {artifact.command}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Terminal : {artifact.terminal}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Status : {artifact.status}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Memory Usage : {artifact.memory_usage}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Number of Threads : {artifact.no_of_threads}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          CPU Percentage : {artifact.cpu_percentage}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Process Privileges : {artifact.process_privileges}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Process Priority : {artifact.process_priority}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Process Type : {artifact.process_type}
        </Card>
      </Card>
    </div>
  );
}

export default ProcessArtifact;
