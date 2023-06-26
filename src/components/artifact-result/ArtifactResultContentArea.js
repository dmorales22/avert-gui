import React, { useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Elevation,
  Icon,
  Text,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import DetailedViewSwitch from "./DetailedViewSwitch";
import ArtifactResultTable from "./ArtifactResultTable";
import VisualizationAccordion from "./VisualizationAccordion";
import ScriptAccordion from "../script/ScriptAccordion";
import HistoryAccordion from "../history/HistoryAccordion";
import LogAccordion from "../log/LogAccordion";

const FileSaver = require("file-saver");
const axios = require("axios").default;

function getFilename(artifact) {
  return (
    artifact.artifact.user_profile.ip_address +
    "_" +
    artifact.id.substring(0, 6) +
    "_" +
    artifact.artifact.timestamp
  );
}

function ArtifactResultContentArea({
  artifactResults,
  selectedArtifacts,
  setSelectedArtifacts,
  query,
}) {
  const [detailedViewOpen, setDetailedViewOpen] = useState(false);
  const [visualizationOpen, setVisualizationOpen] = useState(false);
  const [scriptOpen, setScriptOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [logContentOpen, setLogContentOpen] = useState(false);

  function createCanvas(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  let editButtons = (
    <div style={{ marginTop: 8, marginBottom: 8 }} className={"avert-row"}>
      <Button
        icon="export"
        intent="primary"
        className={"avert-block"}
        onClick={() => {
          if (selectedArtifacts.length !== 0) {
            console.log("Export artifact!");

            for (let i = 0; i < selectedArtifacts.length; i++) {
              const needed_artifact_id = selectedArtifacts[i];
              axios
                .post("http://localhost:5000/artifact", {
                  id: needed_artifact_id,
                })
                .then(({ data }) => {
                  if (data["type"] === "screenshot") {
                    let [width, height] = data["screenshot_size"]
                      .slice(1, data["screenshot_size"].length - 1)
                      .split(",")
                      .map((x) => parseInt(x));

                    let canvas = createCanvas(width, height);
                    let context = canvas.getContext("2d");

                    let base_image = new Image();
                    base_image.src =
                      "data:image/png;base64," + data["screenshot_file"];

                    context.drawImage(base_image, 0, 0);

                    console.log(data);

                    canvas.toBlob((blob) => {
                      FileSaver.saveAs(blob, getFilename(data) + ".png");
                    }, "image/png");

                    return;
                  } else if (data["type"] === "network_activity") {
                    axios
                      .post("http://localhost:5000/get_pcap", {
                        id: needed_artifact_id,
                      })
                      .then((response) => {
                        console.log("Received pcap:");
                        console.log(response);
                        let bytes = base64ToArrayBuffer(
                          response["data"]["content"]
                        );

                        let blob = new Blob([bytes]);

                        console.log(data);

                        FileSaver.saveAs(blob, getFilename(data) + ".pcap");
                      });
                    return;
                  }

                  console.log(data);

                  let txt = JSON.stringify(data);

                  let blob = new Blob([txt], {
                    type: "text/plain;charset=utf-8",
                  });

                  FileSaver.saveAs(blob, getFilename(data) + ".json");
                });
            }
          }
        }}
      >
        Export artifact
      </Button>
      <Button
        icon="export"
        intent="primary"
        className={"avert-block"}
        onClick={() => {
          console.log("Exporting through csv!");

          for (let i = 0; i < selectedArtifacts.length; i++) {
            const needed_artifact_id = selectedArtifacts[i];
            axios
              .post("http://localhost:5000/artifact", {
                id: needed_artifact_id,
              })
              .then(({ data }) => {
                let title_row = [];
                let value_row = [];

                for (const [key, value] of Object.entries(data)) {
                  title_row.push(key);
                  value_row.push(JSON.stringify(value));
                }

                let txt =
                  title_row.join(",") + "\n" + value_row.join(",") + "\n";

                let blob = new Blob([txt], {
                  type: "text/plain;charset=utf-8",
                });

                FileSaver.saveAs(blob, getFilename(data) + ".csv");
              });
          }
        }}
      >
        Export artifact as csv
      </Button>
      <Button
        icon="trash"
        intent="danger"
        className={"avert-block"}
        onClick={() => {
          console.log("Requesting deletion!", selectedArtifacts);

          axios
            .post("http://localhost:5000/delete_ids", {
              ids: selectedArtifacts,
            })
            .then(({ data }) => {
              console.log("Ids deleted!", data);
            })
            .catch((e) => {
              console.log("Error while deleting ids!" + e);
            });
        }}
      >
        Delete Artifact
      </Button>
      <Button icon="code" intent="primary" className={"avert-block"}>
        Add Selected Artifact(s) to Script Creation
      </Button>
    </div>
  );

  function createAccordion(title, open, setOpen, element, iconName) {
    return (
      <div key={title}>
        <Card
          elevation={Elevation.ONE}
          style={{ padding: 8, marginTop: 4, cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          <Text className="avert-row">
            <Button intent={open ? "warning" : "success"}>
              <Icon className="avert-block" icon={iconName} />
            </Button>
            <b style={{ marginTop: 5, marginLeft: 8 }} className="avert-block">
              {title}
            </b>
          </Text>
        </Card>

        <Collapse isOpen={open}>{element}</Collapse>
      </div>
    );
  }

  let accordions = [
    createAccordion(
      "Detailed View of Selected Artifact",
      detailedViewOpen,
      setDetailedViewOpen,
      <DetailedViewSwitch selectedArtifacts={selectedArtifacts} />,
      "eye-open"
    ),
    createAccordion(
      "Visualization",
      visualizationOpen,
      setVisualizationOpen,
      <VisualizationAccordion query={query} />,
      "chart"
    ),
  ];

  return (
    <div>
      <Text>Artifact Results</Text>
      <Card elevation={Elevation.ONE} style={{ padding: 8, marginTop: 4 }}>
        <ArtifactResultTable
          setSelectedArtifacts={setSelectedArtifacts}
          artifactResults={artifactResults}
        />
        {editButtons}
        {accordions}
      </Card>
    </div>
  );
}

export default ArtifactResultContentArea;
