import React, { useState } from "react";
import {
  Card,
  Elevation,
  Button,
  Icon,
  Text,
  Radio,
  RadioGroup,
} from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

/*
 Author: Team 3
 Purpose: Creates the History Accordion section with the table containing the history of artifacts
 @requires AVERT needs to be running.
 @requires AVERT to be connected to the database.
 @ensures \result Table containing the history of selected artifacts
*/
function HistoryAccordion() {
  const [curr, setCurr] = useState("");
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

  const radio = (i) => (
    <Cell>
      <Radio
        checked={curr === "" + i}
        value={"" + i}
        onClick={() => setCurr("" + i)}
      />
    </Cell>
  );

  return (
    <Card elevation={Elevation.ONE}>
      <h3>History Accordion</h3>
      <Text>History</Text>
      <RadioGroup
        onChange={(e) => {
          console.log(e.target.value);
        }}
        selectedValue={curr}
      >
        <Table2 numRows={5} columnWidths={[45, 200, 200, 200, 200, 200]}>
          <Column name="" cellRenderer={radio} />
          {generateColumn("Timestamp", () => <Cell>2011-08-12T20:17:46.384Z</Cell>)}
          {generateColumn("Expression Type", () => <Cell> test </Cell>)}
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
          {generateColumn("Expressions", () => <Cell> testing </Cell>)}
        </Table2>
      </RadioGroup>
      <Button intent="success" text="Apply Expression" />

    </Card>
  );
}

export default HistoryAccordion;
