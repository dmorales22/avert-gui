import React, { useState, useEffect } from "react";

import SyncContentArea from "../components/sync/SyncContentArea";
import SyncProgress from "../components/sync/SynProgress";
import { Button } from "@blueprintjs/core";

const axios = require("axios").default;

const DUMMY_SEARCH_QUERY_TYPE = {
  screenshot: true,
  video: false,
  network_activity: false,
  process: false,
  keystroke: false,
  mouse_action: false,
  window_history: true,
  system_call: false,
};

function Sync() {
  const [state, setState] = useState("page1");
  const [syncType, setSyncType] = useState(DUMMY_SEARCH_QUERY_TYPE);
  const [syncStatus, setSyncStatus] = useState({});

  function updateSyncStatus() {
    axios.post("http://localhost:5000/get_sync_status", {}).then(({ data }) => {
      console.log("Received new sync status!");
      console.log(data);
      setSyncStatus(data);
    });
  }

  useEffect(() => {
    updateSyncStatus();
    setInterval(updateSyncStatus, 500);
  }, []);

  let element = <SyncContentArea />;

  switch (state) {
    case "page1":
      element = (
        <SyncContentArea
          setState={setState}
          syncType={syncType}
          setSyncType={setSyncType}
        />
      );
      break;

    case "page2":
      element = (
        <SyncProgress
          syncStatus={syncStatus}
          syncType={syncType}
          setSyncType={setSyncType}
        />
      );
      break;

    default:
      element = <SyncContentArea />;
      break;
  }

  return (
    <div>
      {element}
      <Button className="mx-2" onClick={() => setState("page1")}>
        Sync Basic Info
      </Button>
      <Button onClick={() => setState("page2")}>Sync Progress</Button>
    </div>
  );
}

export default Sync;
