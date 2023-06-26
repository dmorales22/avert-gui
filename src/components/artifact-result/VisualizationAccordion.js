import React, { useState } from "react";
import {
  Button,
  Card,
  Elevation,
  Toaster,
  Toast,
  Intent,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

//import AnnotationContentArea from "./visualization/AnnotationContentArea";
import BarGraphMetadata from "./visualization/BarGraphMetadata";
import PieChartMetadata from "./visualization/PieChartMetadata";
import TimelineMetadata from "./visualization/TimelineMetadata";
import VisualizationResult from "./visualization/VisualizationResult";
import BarGraphVisualization from "./visualization/BarGraphVisualization";
import PieChartVisualization from "./visualization/PieChartVisualization";
import TimelineVisualization from "./visualization/TimelineVisualization";
import VisualizationType from "./visualization/VisualizationType";
import AnnotationArea from "./detailed-artifact-components/AnnotationArea";

import * as htmlToImage from "html-to-image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const FileSaver = require("file-saver");
const axios = require("axios").default;

const toaster = Toaster.create({});

//Work on spacing/ placing in areas -SRS18
function VisualizationAccordion({ query }) {
  const [currentlySelectedType, setCurrentlySelectedType] = useState("pie");
  const [proportionalInformation, setProportionalInformation] = useState({
    a: -1,
  });
  const [timelineInformation, setTimelineInformation] = useState({ a: -1 });

  const [barTitle, setBarTitle] = useState("");
  const [xaxis, setXaxis] = useState("");
  const [yaxis, setYaxis] = useState("");
  const [pieTitle, setPieTitle] = useState("");

  const [timelineTitle, setTimelineTitle] = useState("Untitled Timeline");
  let metadataElement = <PieChartMetadata />;
  let visualDataElement = <PieChartVisualization />;

  function generateVisualization() {
    function requestProportional() {
      axios
        .post("http://localhost:5000/proportional_visualization", query)
        .then(({ data }) => {
          console.log("Received proportional visualization:");
          console.log(data);

          if (data["a"] === -1) {
            console.log("Attempting to send toast");
            toaster.show({
              message: "Please select some types to generate visualization!",
              intent: Intent.WARNING,
            });
            return;
          }

          setProportionalInformation(data);
        });
    }

    function requestTimeline() {
      axios
        .post("http://localhost:5000/timeline_visualization", query)
        .then(({ data }) => {
          console.log("Received timeline visualization:");
          console.log(data);

          if (data["a"] === -1) {
            console.log("Attempting to send toast");
            toaster.show({
              message: "Please select some types to generate visualization!",
              intent: Intent.WARNING,
            });
            return;
          }

          setTimelineInformation(data);
        });
    }

    switch (currentlySelectedType) {
      case "pie":
        requestProportional();
        break;

      case "bar":
        requestProportional();
        break;

      case "timeline":
        requestTimeline();
        break;

      default:
        break;
    }
  }

  switch (currentlySelectedType) {
    case "pie":
      metadataElement = <PieChartMetadata setTitle={setPieTitle} />;
      visualDataElement = (
        <PieChartVisualization
          data={proportionalInformation}
          title={pieTitle}
        />
      );
      break;

    case "bar":
      metadataElement = (
        <BarGraphMetadata
          setTitle={setBarTitle}
          setYaxis={setYaxis}
          setXaxis={setXaxis}
        />
      );
      visualDataElement = (
        <BarGraphVisualization
          data={proportionalInformation}
          title={barTitle}
          xaxis={xaxis}
          yaxis={yaxis}
        />
      );
      break;

    case "timeline":
      metadataElement = <TimelineMetadata setTitle={setTimelineTitle} />;
      visualDataElement = (
        <TimelineVisualization
          data={timelineInformation}
          title={timelineTitle}
        />
      );
      break;

    default:
      break;
  }

  const onCapture = (file) => {
    htmlToImage
      .toPng(document.getElementById("visualizationdivboxdiv"))
      .then(function (dataUrl) {
        FileSaver.saveAs(dataUrl, file);
      });
  };
  return (
    <div>
      <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
        <div className="avert-row" style={{ padding: 4 }}>
          <VisualizationType setType={setCurrentlySelectedType} />
          {metadataElement}
        </div>
        <div className="avert-row" style={{ padding: 4 }}>
          <Button
            icon="refresh"
            intent="success"
            text="Generate Visualization"
            style={{ marginRight: 8 }}
            onClick={() => {
              console.log(query);
              generateVisualization();
            }}
          />

          <Button
            icon="export"
            intent="primary"
            text="Export Visualization"
            onClick={() => {
              onCapture("visualization.png");
            }}
          />
        </div>
        <div className="avert-row" style={{ padding: 4 }}>
          Visualization Result
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="tools">
                  <Button icon="zoom-in" onClick={() => zoomIn()}></Button>
                  <Button icon="zoom-out" onClick={() => zoomOut()}></Button>
                  <Button icon="refresh" onClick={() => resetTransform()}>
                    Reset zoom
                  </Button>
                </div>
                <TransformComponent>
                  <div>{visualDataElement}</div>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </Card>
    </div>
  );
}

export default VisualizationAccordion;
