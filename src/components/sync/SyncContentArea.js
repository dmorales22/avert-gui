import SyncToFrom from "./SyncToFrom";
import SyncScope from "./SyncScope";

import React, { useState, useEffect } from "react";
import {
  Card,
  Elevation,
  Button,
  Icon,
  Alert,
  Toaster,
  Toast,
  Intent,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const axios = require("axios").default;

const toaster = Toaster.create({});

/*
 Author: Team 3
 Purpose: Sends IP address warning message
 @requires AVERT needs to be running.
 @ensures \result Sends IP address warning message
 */
function sendInvalidIPWarning(ip) {
  toaster.show({
    message: "IP Address not found! Please try a different one! " + ip,
    intent: Intent.WARNING,
  });
}

/*
 Author: Team 3
 Purpose: Builds query with attributes for status checking purposes
 @requires AVERT needs to be running.
 Builds query with attributes for status checking purposes
 */
function SyncContentArea({ setState, syncType, setSyncType }) {
  const [open, setOpen] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  function buildQuery() {
    return {
      target_ip: ipAddress,
      artifacts_to_sync: syncType,
    };
  }

  useEffect(() => {
    console.log(buildQuery());
  }, [syncType, ipAddress]);

  return (
    <div>
      <Container className="my-5">
        <Row className="mt-5 justify-content-center">
          <Col sm lg={9}>
            <Card elevation={Elevation.THREE}>
              <Row className="mt-4">
                <Col>
                  <SyncToFrom setIpAddress={setIpAddress} />
                </Col>

                <Col className="mt-4 mt-md-0">
                  <SyncScope settings={syncType} setSettings={setSyncType} />
                </Col>
              </Row>

              <Row className="justify-content-center mt-4">
                <Col className="col-2 text-center">
                  <Button
                    fill
                    intent="primary"
                    large
                    onClick={() => setOpen(true)}
                  >
                    Sync
                  </Button>
                  <Alert
                    confirmButtonText="Confirm"
                    cancelButtonText="Cancel"
                    isOpen={open}
                    onCancel={() => setOpen(false)}
                    onConfirm={() => {
                      axios
                        .post("http://localhost:5000/start_sync", buildQuery())
                        .then(({ data }) => {
                          console.log(data);
                          setState("page2");
                        })
                        .catch((error) => {
                          sendInvalidIPWarning(ipAddress);
                          console.log(error);
                        });
                    }}
                  >
                    Are you sure you want to sync?
                  </Alert>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SyncContentArea;
