import React, { useState } from "react";
import {
  Card,
  Elevation,
  Button,
  Checkbox,
  Icon,
  Divider,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

/* There are two separate columns of checkboxes. */
const firstColumnFieldNames = [
  "screenshot",
  "video",
  "network_activity",
  "process",
];

const secondColumnFieldNames = [
  "keystroke",
  "mouse_action",
  "window_history",
  "system_call",
];

const ID_TO_NAME = {
  screenshot: "Still Screenshot",
  video: "Video",
  network_activity: "Network Activity",
  process: "Process",
  keystroke: "Keystroke",
  mouse_action: "Mouse Action",
  window_history: "Window History",
  system_call: "System Call",
};

function SyncScope({ settings, setSettings }) {
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
    <div>
      <Card elevation={Elevation.THREE}>
        <Row>
          <Col>
            <h3 className="text-center mt-0 mb-4">Sync Scope</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card elevation={Elevation.THREE}>
              <Row className="mb-2">
                <Col>
                  <Button
                    fill
                    onClick={() => {
                      console.log("updating settings...");
                      setSettings({
                        screenshot: true,
                        video: true,
                        network_activity: true,
                        process: true,
                        keystroke: true,
                        mouse_action: true,
                        window_history: true,
                        system_call: true,
                      });
                    }}
                  >
                    All including video
                  </Button>
                </Col>

                <Col className="mt-2 mt-md-0">
                  <Button
                    fill
                    onClick={() => {
                      console.log("updating settings...");
                      setSettings({
                        screenshot: true,
                        video: false,
                        network_activity: true,
                        process: true,
                        keystroke: true,
                        mouse_action: true,
                        window_history: true,
                        system_call: true,
                      });
                    }}
                  >
                    All excluding video
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Divider />

        <Row>
          <Col>
            <Card elevation={Elevation.THREE}>
              <Row className="mb-2">
                <Col>
                  {firstColumnFieldNames.map((id) => (
                    <Checkbox
                      key={id}
                      label={ID_TO_NAME[id]}
                      onChange={updateField(id)}
                      checked={settings[id]}
                    ></Checkbox>
                  ))}
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Card elevation={Elevation.THREE}>
              <Row classname="mb-2">
                <Col>
                  {secondColumnFieldNames.map((id) => (
                    <Checkbox
                      key={id}
                      label={ID_TO_NAME[id]}
                      onChange={updateField(id)}
                      checked={settings[id]}
                    ></Checkbox>
                  ))}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SyncScope;
