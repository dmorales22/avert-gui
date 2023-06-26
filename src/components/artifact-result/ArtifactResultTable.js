import React, { useState } from "react";

import {
  Button,
  Card,
  Checkbox,
  Elevation,
  NumericInput,
  Text,
  Icon,
} from "@blueprintjs/core";

import "@blueprintjs/table/lib/css/table.css";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "id", width: 45, hide: true },
  { field: "timestamp", headerName: "Timestamp", width: 200 },
  { field: "type", headerName: "Artifact Type", width: 200 },
  {
    field: "ip_address",
    headerName: "IP Address",
    width: 200,
  },
  {
    field: "mac_address",
    headerName: "MAC Address",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
];

const rows = [
  {
    id: 0,
    timestamp: "azulu timestamp",
    type: "avideo capture",
    ip_address: "a1.1.1.1",
    mac_address: "a2.21.12.43142",
    description: "aSome description",
    rowHeight: 30,
  },
  {
    id: 1,
    timestamp: "bzulu timestamp",
    type: "bvideo capture",
    ip_address: "b1.1.1.1",
    mac_address: "b2.21.12.43142",
    description: "bSome description",
    rowHeight: 30,
  },
  {
    id: 2,
    timestamp: "czulu timestamp",
    type: "cvideo capture",
    ip_address: "c1.1.1.1",
    mac_address: "c2.21.12.43142",
    description: "cSome description",
    rowHeight: 30,
  },
  {
    id: 3,
    timestamp: "zulu timestamp",
    type: "video capture",
    ip_address: "1.1.1.1",
    mac_address: "2.21.12.43142",
    description: "Some description",
    rowHeight: 30,
  },
  {
    id: 4,
    timestamp: "zulu timestamp",
    type: "video capture",
    ip_address: "1.1.1.1",
    mac_address: "2.21.12.43142",
    description: "Some description",
    rowHeight: 30,
  },
  {
    id: 5,
    timestamp: "zulu timestamp",
    type: "video capture",
    ip_address: "1.1.1.1",
    mac_address: "2.21.12.43142",
    description: "Some description",
    rowHeight: 30,
  },
  {
    id: 6,
    timestamp: "zulu timestamp",
    type: "video capture",
    ip_address: "1.1.1.1",
    mac_address: "2.21.12.43142",
    description: "Some description",
    rowHeight: 30,
  },
];

function ArtifactResultTable({ setSelectedArtifacts, artifactResults }) {
  let widths = [45, 200, 200, 200, 200, 200];

  const [numRows, setNumRows] = useState(25);

  function max(a, b) {
    if (a > b) {
      return a;
    }
    return b;
  }

  return (
    <div>
      <Text>Artifact result table. </Text>

      <Text>Number of rows:</Text>
      <NumericInput
        min={10}
        max={100}
        defaultValue={25}
        onValueChange={(x) => setNumRows(x)}
      />

      <Card elevation={Elevation.TWO} style={{ padding: 8, marginTop: 4 }}>
        <div style={{ width: "100%", height: max(53 * numRows, 123) }}>
          <DataGrid
            rows={artifactResults}
            columns={columns}
            pageSize={numRows}
            checkboxSelection
            onSelectionModelChange={(x) => {
              setSelectedArtifacts(x);
            }}
            checkboxSelectionVisibleOnly={true}
          />
        </div>
      </Card>
    </div>
  );
}

export default ArtifactResultTable;
