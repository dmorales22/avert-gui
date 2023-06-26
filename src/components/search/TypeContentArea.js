import React from "react";
import { Card, Checkbox, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

/* There are two separate columns of checkboxes. */
const firstColumnFieldNames = [
  "Still Screenshot",
  "Video",
  "Network Packet",
  "Process",
  "Keystroke",
  "Mouse Action",
];

const secondColumnFieldNames = [
  "Window History",
  "System Call",
  "History",
  "Log",
  "All",
  "All Artifact Types",
];

function TypeContentArea({ settings, setSettings }) {
  function updateField(name) {
    return (e) => {
      const newValue = e.target.checked;
      setSettings({ ...settings, [name]: newValue });
    };
  }

  function nameToKey(name) {
    let out = Array.from(name)
      .filter((x) => x !== " ")
      .join("");
    out = out[0].toLowerCase() + out.substr(1, out.length);
    return out;
  }

  return (
    <div className="avert-block">
      <Text className="card-title">Type</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <div className="avert-row">
          <div className="avert-block">
            {firstColumnFieldNames.map((name) => (
              <Checkbox
                key={nameToKey(name)}
                label={name}
                onChange={updateField(nameToKey(name))}
                checked={settings[nameToKey(name)]}
              ></Checkbox>
            ))}
          </div>
          <div className="avert-block">
            {secondColumnFieldNames.map((name) => (
              <Checkbox
                key={nameToKey(name)}
                label={name}
                onChange={updateField(nameToKey(name))}
                checked={settings[nameToKey(name)]}
              ></Checkbox>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TypeContentArea;
