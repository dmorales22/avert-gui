import React, { useState, useEffect } from "react";

import {
  Button,
  Card,
  Collapse,
  Elevation,
  Icon,
  Text,
} from "@blueprintjs/core";

import SearchContentArea from "./search/SearchContentArea";
import ArtifactResult from "./artifact-result/ArtifactResultContentArea";
import HistoryAccordion from "./history/HistoryAccordion";
import LogAccordion from "./log/LogAccordion";
import ScriptAccordion from "./script/ScriptAccordion";
import Separator from "./common/Separator";

function HomeContentArea() {
  const [results, setResults] = useState([]);
  const [selectedArtifacts, setSelectedArtifacts] = useState([]);
  const [query, setQuery] = useState({});

  function Accordion({ title, element, icon }) {
    const [open, setOpen] = useState(false);
    return (
      <div key={title}>
        <Card
          elevation={Elevation.ONE}
          style={{ padding: 8, marginTop: 4, cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          <Text className="avert-row">
            <Button intent={open ? "warning" : "success"}>
              <Icon className="avert-block" icon={icon} />
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

  return (
    <div>
      <SearchContentArea setResults={setResults} setQuery={setQuery} />
      <Separator />
      <ArtifactResult
        artifactResults={results}
        selectedArtifacts={selectedArtifacts}
        setSelectedArtifacts={setSelectedArtifacts}
        query={query}
      />
      <Separator />
      {
        <Accordion
          title={"Script"}
          element={<ScriptAccordion selectedIds={selectedArtifacts} />}
          icon="code"
        />
      }
    </div>
  );
}

export default HomeContentArea;
