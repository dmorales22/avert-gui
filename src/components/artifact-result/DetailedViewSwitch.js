import React, { useState, useEffect } from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";

import AnnotationArea from "./detailed-artifact-components/AnnotationArea";
import TagArea from "./detailed-artifact-components/TagArea";
import UserProfileArea from "./detailed-artifact-components/UserProfileArea";
import MouseActionArtifact from "../detailed-artifacts/mouse-action-artifact";
import NetworkActivityArtifact from "../detailed-artifacts/network-activity-artifact";
import NetworkPacketArftifact from "../detailed-artifacts/network-packet-artifact";
import ProcessArtifact from "../detailed-artifacts/process-artifact";
import ScreenshotArtifact from "../detailed-artifacts/screenshot-artifact";
import SystemCallArtifact from "../detailed-artifacts/system-call-artifact";
import VideoArtifact from "../detailed-artifacts/video-artifact";
import WindowHistoryArtifact from "../detailed-artifacts/window-history-artifact";
import KeystrokeArtifact from "../detailed-artifacts/keystroke-artifact";

import { DataGrid } from "@mui/x-data-grid";

const axios = require("axios").default;

function DetailedViewSwitch({ selectedArtifacts }) {
  let detailedArtifact = <p>No artifact selected!</p>;

  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    console.log("Selected artifacts: ");
    if (selectedArtifacts.length == 0) {
      setArtifact(null);
    } else {
      axios
        .post("http://localhost:5000/artifact", {
          id: selectedArtifacts[0],
        })
        .then(({ data }) => {
          setArtifact(data);
        });
    }
  }, [selectedArtifacts]);

  if (artifact) {
    switch (artifact.type) {
      case "mouse_action":
        detailedArtifact = (
          <MouseActionArtifact artifact={artifact}></MouseActionArtifact>
        );
        break;
      case "network_activity":
        console.log("GOT HERE!!!!");
        detailedArtifact = (
          <NetworkActivityArtifact
            artifact={artifact}
          ></NetworkActivityArtifact>
        );
        break;
      case 2:
        detailedArtifact = <NetworkPacketArftifact></NetworkPacketArftifact>;
        break;
      case "process":
        detailedArtifact = (
          <ProcessArtifact artifact={artifact}></ProcessArtifact>
        );
        break;
      case "screenshot":
        detailedArtifact = (
          <ScreenshotArtifact artifact={artifact}></ScreenshotArtifact>
        );
        break;
      case "system_call":
        detailedArtifact = (
          <SystemCallArtifact artifact={artifact}></SystemCallArtifact>
        );
        break;
      case "window_history":
        detailedArtifact = (
          <WindowHistoryArtifact artifact={artifact}></WindowHistoryArtifact>
        );
        break;
      case "video":
        detailedArtifact = (
        <VideoArtifact  artifact={artifact}></VideoArtifact>
        );
        break;
      case "keystroke":
        detailedArtifact = (
          <KeystrokeArtifact artifact={artifact}></KeystrokeArtifact>
        );
        break;
    }
  }

  return (
    <div>
      <div style={{ marginTop: 8 }}>
        <Text>Detailed view</Text>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          {detailedArtifact}
        </Card>
      </div>

      <AnnotationArea artifact={artifact} />
      <TagArea artifact={artifact} />
      <Card
        className="avert-row"
        elevation={Elevation.ZERO}
        style={{ padding: 8, marginTop: 8 }}
      >
        <UserProfileArea artifact={artifact} />
      </Card>
    </div>
  );
}

export default DetailedViewSwitch;
