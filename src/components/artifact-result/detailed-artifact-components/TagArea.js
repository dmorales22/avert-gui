import React, { useState, useEffect } from "react";

import {
  Alert,
  Button,
  Card,
  Checkbox,
  Elevation,
  Icon,
  Intent,
  TextArea,
  Text,
} from "@blueprintjs/core";
import { Cell, Column, Table } from "@blueprintjs/table";
import "@blueprintjs/table/lib/css/table.css";

import { DataGrid } from "@mui/x-data-grid";

const axios = require("axios").default;

const columns = [
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
    field: "tag",
    headerName: "Tag",
    width: 200,
  },
];

function TagArea({ artifact }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [text, setText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (artifact) {
      setRows(
        artifact.artifact.tags.map((tag, i) => ({
          ip_address: tag?.user_profile?.ip_address,
          mac_address: tag?.user_profile?.mac_address,
          tag: tag?.label,
          id: tag?.label,
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
              .post("http://localhost:5000/new_tag", {
                artifact_id: artifact._id,
                text: text,
              })
              .then(({ data }) => {
                setRows([...rows, { ...data, id: text }]);
                setOpen(false);
              });
          }
        }}
        cancelButtonText="Cancel"
        confirmButtonText="Update"
        onCancel={() => setOpen(false)}
        intent="success"
      >
        <h3>New Tag</h3>
        <Text style={{ marginBottom: 8 }}>Please enter new tag's name</Text>
        <TextArea
          growVertically={true}
          large={true}
          intent={Intent.PRIMARY}
          onChange={(e) => setText(e.target.value)}
        />
      </Alert>

      <Text className="card-title">Tag</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            rowsPerPageOptions={[25, 50, 100]}
            onSelectionModelChange={(x) => {
              setSelectedTags(x);
            }}
          ></DataGrid>
        </div>
        <div className="avert-row" style={{ marginTop: 8 }}>
          <Button
            intent="success"
            icon="add"
            style={{ marginRight: 8 }}
            onClick={() => setOpen(true)}
          >
            Add
          </Button>
          <Button
            intent="danger"
            icon="trash"
            onClick={() => {
              axios
                .post("http://localhost:5000/delete_tags", {
                  artifact_id: artifact.id,
                  tags: selectedTags,
                })
                .then(() => {
                  setRows(rows.filter((r) => !selectedTags.includes(r.id)));
                });
            }}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default TagArea;
