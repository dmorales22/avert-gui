import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import { Tree, Classes } from "@blueprintjs/core";
function NetworkPacketArtifact() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Sample Tree Data
  const sampleData = [
    {
      id: 5,
      label: "Human Readable Packet",
      isExpanded: isOpen,
      childNodes: [
        {
          id: 0,
          icon: "folder-close",
          label: "Data1",
        },
        {
          id: 1,
          icon: "folder-close",
          label: "Data2",
        },
        {
          id: 2,
          icon: "folder-close",
          label: "Data3",
        },
      ],
    },
  ];
  return (
    <div className="avert-block">
      <Text className="card-title">Detailed Network Packet</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          Timestamp : "2011-08-12T20:17:46:384Z"
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          RawHexByte : 0xAA
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          File Stream : "falcon\nhawk\nforest\ncloud\nsky"
        </Card>
        <Tree
          style={{ marginTop: 8, padding: 8 }}
          contents={sampleData}
          className={Classes.ELEVATION_0}
          onNodeClick={() => setIsOpen(true)}
        />
      </Card>
    </div>
  );
}

export default NetworkPacketArtifact;
