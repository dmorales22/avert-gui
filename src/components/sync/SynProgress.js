import StorageUsagePie from "./StorageUsagePie";

import {
  ProgressBar,
  Text,
  Icon,
  Card,
  Elevation,
  Button,
  Divider,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const axios = require("axios").default;


/*
 Author: Team 3
 Purpose: Creates cards containing visual components for each artifact such as titles, icons, and more.
 @requires AVERT needs to be running.
 @ensures \result Card with visual components for each artifact
 */
function SyncProgress({ syncStatus, setSyncType, syncType }) {
  /* Uncomment to observe all possible states on the loading bars.
  syncStatus = {
    ...syncStatus,
    screenshot_total_count: 100,
    video_total_count: 241,
    video_counter: 32,
    network_activity_total_count: 200,
    network_activity_counter: 200,
  };
*/
  let rows = [
    {
      icon: "media",
      title: "Still Screenshot",
      counter_name: "screenshot_counter",
      total_name: "screenshot_total_count",
      key: "screenshot",
    },
    {
      icon: "mobile-video",
      title: "Video",
      counter_name: "video_counter",
      total_name: "video_total_count",
      key: "video",
    },
    {
      icon: "diagram-tree",
      title: "Network Activity",
      counter_name: "network_activity_counter",
      total_name: "network_activity_total_count",
      key: "network_activity",
    },
    {
      icon: "applications",
      title: "Process",
      counter_name: "process_counter",
      total_name: "process_total_count",
      key: "process",
    },
    {
      icon: "font",
      title: "Keystroke",
      counter_name: "keystroke_counter",
      total_name: "keystroke_total_count",
      key: "keystroke",
    },
    {
      icon: "flow-review-branch",
      title: "Mouse Action",
      counter_name: "mouse_action_counter",
      total_name: "mouse_action_total_count",
      key: "mouse_action",
    },
    {
      icon: "modal",
      title: "Window History",
      counter_name: "window_history_counter",
      total_name: "window_history_total_count",
      key: "window_history",
    },
    {
      icon: "console",
      title: "System Calls",
      counter_name: "system_call_counter",
      total_name: "system_call_total_count",
      key: "system_call",
    },
    /*
     * TODO: Change this when we are asked to support history and logs.
    {
      icon: "history",
      title: "History",
      counter_name: "",
      total_name: "",
      key: "history"
    },
    {
      icon: "manually-entered-data",
      title: "Log",
      counter_name: "",
      total_name: "",
      key: "log"
    },*/
  ];

    
    /*
     Author: Team 3
     Purpose: Creates progress bar for each artifact
     @requires AVERT needs to be running.
     @ensures \result Progress bar for each artifact
    */
  function createProgressBar(metadata) {
    let total = syncStatus[metadata["total_name"]];
    let count = syncStatus[metadata["counter_name"]];
    return (
      <Row className="mb-4">
        <Col>
          <Card elevation={Elevation.THREE}>
            <Row>
              <Col>
                <Text>
                  <Icon icon={metadata["icon"]} /> {metadata["title"]}
                </Text>
                <Text>
                  {total === 0
                    ? "No items to sync"
                    : total === count
                    ? "Sync complete!"
                    : ""}
                </Text>
              </Col>
              <Col className="col-8">
                <ProgressBar
                  className="my-1"
                  value={total === 0 ? 0 : count / total}
                  intent={total === count ? "success" : "none"}
                ></ProgressBar>
              </Col>
              <Col className="col-auto">
                <Text>
                  {count}/{total}
                </Text>
              </Col>
            </Row>

            <Row className="mt-2 text-end justify-content-end">
              <Col className="col-4">
                <Button
                  fill
                  intent="danger"
                  disabled={total === 0 || total === count}
                  onClick={() => {
                    axios
                      .post("http://localhost:5000/cancel_sync", {
                        ...syncType,
                        [metadata["key"]]: false,
                      })
                      .then(() => {
                        setSyncType({ ...syncType, [metadata["key"]]: false });
                      });
                  }}
                >
                  Cancel {[metadata["title"]]} Sync
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }

  return (
    <div>
      <Container className="my-5">
        <Row className="mt-5 justify-content-center">
          <Col className="col-12 col-md-9">
            <Card elevation={Elevation.THREE}>
              <Row className="text-center">
                <Col>
                  <h2>Syncing Data Progress</h2>
                </Col>
              </Row>

              <Divider className="mb-4" />

              {rows.map(createProgressBar)}

              <Row className="text-center">
                <Col>
                  <Button
                    intent="danger"
                    large
                    onClick={() => {
                      axios
                        .post("http://localhost:5000/cancel_sync", {
                          screenshot: false,
                          video: false,
                          network_activity: false,
                          process: false,
                          keystroke: false,
                          mouse_action: false,
                          window_history: false,
                          system_call: false,
                        })
                        .then(() => {
                          setSyncType({
                            screenshot: false,
                            video: false,
                            network_activity: false,
                            process: false,
                            keystroke: false,
                            mouse_action: false,
                            window_history: false,
                            system_call: false,
                          });
                        });
                    }}
                  >
                    Cancel All
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col className="mt-4 mt-md-0 col-6 col-md">
            <StorageUsagePie syncStatus={syncStatus} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SyncProgress;
