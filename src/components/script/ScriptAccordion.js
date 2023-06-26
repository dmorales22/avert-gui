import React, { useState } from "react";
import {
  Card,
  Elevation,
  Button,
  Checkbox,
  Icon,
  NumericInput,
  Text,
} from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

import { v4 as uuidv4 } from "uuid";

const FileSaver = require("file-saver");
const axios = require("axios").default;

/**
 * Generates a JSX Accordion component
 * @returns {JSX.Element}
 * 
 * @author Jose Rodriguez
 * @requires true
 * @ensures \result{JSX.Element}
 */
function ScriptAccordion({ selectedIds }) {
  const [wait, setWait] = useState(0.05);

    /**
   * Generates a JSX Accordion component
   * @param {any} name name of the script
   * @param {any} columnRenderer the column renderer
   * @returns {JSX.Element}
   * 
   * @author Jose Rodriguez
   * @requires name is not null or empty
   * @requires columnRenderer is not null or empty
   * @ensures \result{JSX.Element}
   */
  function generateColumn(name, columnRenderer) {
    return (
      <Column
        key={name}
        name={name}
        nameRenderer={(name) => (
          <Text>
            {name} <Icon icon="arrow-up" /> <Icon icon="arrow-down" />
          </Text>
        )}
        cellRenderer={columnRenderer}
      />
    );
  }
  const checks = () => (
    <Cell>
      <Checkbox style={{ marginLeft: 4, marginTop: 1 }}></Checkbox>
    </Cell>
  );
  
  /**
   * Requests script to be generated and then allows user to export it.
   * 
   * @author Jose Rodriguez
   * @requires true
   * @ensures \result true
   */
  function exportScript() {
    console.log("Exporting script");
    console.log(selectedIds);

    let filename = uuidv4() + ".py";

    axios
      .post("http://localhost:5000/generate_script", {
        artifact_ids: selectedIds,
        wait_time: wait,
      })
      .then(({ data }) => {
        let blob = new Blob([data.script], {
          type: "text/plain;charset=utf-8",
        });

        FileSaver.saveAs(blob, filename);
      });
  }

  return (
    <Card elevation={Elevation.ONE}>
      <h3>Script Accordion</h3>
      <Text>Script</Text>

      <Text>Wait time:</Text>
      <NumericInput
        min={0.05}
        max={5}
        defaultValue={0.2}
        onValueChange={(x) => setWait(x)}
      />
      {/* <Button intent="success" text="Generate Script" onClick={exportScript} /> */}
      <Button intent="primary" text="Export Script" onClick={exportScript} />

      <h3>Generated script preview window</h3>
    </Card>
  );
}

export default ScriptAccordion;
