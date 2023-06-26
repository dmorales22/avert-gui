import React from "react";
import { Card, Elevation, Text, Icon } from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

function LogAccordion() {
  
  /*
  *Author: Team 3
  *purpose: This function creates the table for the logs in AVERT and provides data collected.
  *Pre-condition: @requires AVERT to be running.
  *               @requires The GUI to be working properly.
  *Post-Condition: @ensures \result a table representing the logs within the AVERT system.
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

  return (
    <Card elevation={Elevation.ONE}>
      <h3>Log Accordion</h3>
      <Text>Log</Text>

      <Table2 numRows={5} columnWidths={[200,200,200,200,300]}>
        {generateColumn("Timestamp", () => <Cell>2011-08-12T20:17:46.384Z</Cell>)}     
        {generateColumn("Artifact Type", (i) => (
          <Cell>{i % 2 === 0 ? <Text>Video</Text> : <Text>Screenshot</Text>}</Cell>))}
        {generateColumn("IP Address", (i) => (
          <Cell>
            {i % 2 === 0 ? <Text>192.342.532.1</Text> : <Text>125.135.123.1</Text>}
          </Cell>
        ))}
        {generateColumn("MAC Address", (i) => (
          <Cell>
            {i % 2 === 0 ? <Text>12:43:54:12:2a</Text> : <Text>92:43:12:54:1d</Text>}
          </Cell>
        ))}
        {generateColumn("Action Performed On Artifact", () => <Cell> Test </Cell>)}
      </Table2>

    </Card>
  );
}

export default LogAccordion;
