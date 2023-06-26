import React, { useState } from "react";

import {
  Button,
  Card,
  Collapse,
  Elevation,
  Icon,
  Text,
  Tree,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

import { CopyBlock } from "react-code-blocks";

function PacketCollapser({ packet, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={id + "packetcollapser"}>
      <Card
        onClick={() => setOpen(!open)}
        elevation={Elevation.TWO}
        style={{ marginTop: 4, padding: 8, cursor: "pointer" }}
      >
        <Icon icon={open ? "chevron-down" : "chevron-right"} />
        {packet["summary"]}
      </Card>
      <Collapse isOpen={open}>
        <CopyBlock
          text={packet["content"]}
          language={"yaml"}
          showLineNumbers={false}
          startingLineNumber={false}
          theme={"googlecode"}
        />
      </Collapse>
    </div>
  );
}

function NetworkActivityArtifact({ artifact }) {
  return (
    <div className="avert-block">
      <Text className="card-title">Network Activity Artifact</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          Start Time : {artifact["start_time"]}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          End Time : {artifact["end_time"]}
        </Card>
        <div>Packets:</div>
        {artifact["packets"].map((packet, index) => (
          <PacketCollapser packet={packet} id={index} />
        ))}
      </Card>
    </div>
  );
}

export default NetworkActivityArtifact;
