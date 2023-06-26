import React, {useState} from "react";

import { Card, Elevation } from "@blueprintjs/core";
import VisualizationType from "./VisualizationType";

import BarGraphVisualization from "./BarGraphVisualization";
import PieChartVisualization from "./PieChartVisualization";
import TimelineVisualization from "./TimelineVisualization";
import VisualizationAccordion from "../VisualizationAccordion";

function VisualizationResult() {
  const [currentlySelectedType, setCurrentlySelectedType] = useState("pie");

  let visualDataElement = <PieChartVisualization />;

  switch (currentlySelectedType) {
    case "pie":
      visualDataElement = <PieChartVisualization />;
      break;

      case "bar":
      visualDataElement = <BarGraphVisualization />;
      break;

      case "timeline":
      visualDataElement = <TimelineVisualization />;
      break;

      default:
        break;
  }



  return (
    <div className="avert-block">
      <VisualizationType setType={setCurrentlySelectedType} />
      <Card elevation={Elevation.ZERO} style={{ padding: 8, marginTop: 4 }}>
        {visualDataElement}
      </Card>
    </div>
  );
}

export default VisualizationResult;
