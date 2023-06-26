import React, { useState, useEffect } from "react";

import {
  Alert,
  Button,
  Card,
  Elevation,
  Icon,
  Intent,
  Text,
  TextArea,
} from "@blueprintjs/core";

import { DataGrid } from "@mui/x-data-grid";
const axios = require("axios").default;

const columns = [
  { field: "timestamp", headerName: "Timestamp", width: 200 },
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

function AnnotationArea({ artifact }) {
  const [open, setOpen] = useState(false);
  const [annotationText, setAnnotationText] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (artifact) {
      setRows(
        artifact.artifact.annotations.map((annotation, i) => ({
          timestamp: annotation?.timestamp,
          ip_address: annotation?.user_profile?.ip_address,
          mac_address: annotation?.user_profile?.mac_address,
          description: annotation?.description,
          id: i,
        }))
      );
    } else {
      setRows([]);
    }
  }, [artifact]);

  return (
    <div>
      <Alert
        isOpen={open}
        onConfirm={() => {
          if (artifact) {
            axios
              .post("http://localhost:5000/annotate", {
                artifact_id: artifact._id,
                text: annotationText,
              })
              .then(({ data }) => {
                setRows([...rows, { ...data, id: rows.length }]);
                setOpen(false);
              });
          }
        }}
        cancelButtonText="Cancel"
        confirmButtonText="Update"
        onCancel={() => setOpen(false)}
        intent="success"
      >
        <h3>Update Description</h3>
        <Text style={{ marginBottom: 8 }}>Please enter new description.</Text>
        <TextArea
          growVertically={true}
          large={true}
          intent={Intent.PRIMARY}
          onChange={(data) => setAnnotationText(data.target.value)}
        />
      </Alert>
      <Text className="card-title">Annotation</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8, width: "100%" }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[25, 50, 100]}
          ></DataGrid>
        </div>
        <Button
          onClick={() => setOpen(true)}
          intent="success"
          icon="add"
          style={{ marginTop: 8 }}
        >
          Add
        </Button>
      </Card>
    </div>
  );
}

export default AnnotationArea;
