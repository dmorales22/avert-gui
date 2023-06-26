import { React, useEffect, useState } from "react";
import {
  Menu,
  MenuItem,
  FormGroup,
  InputGroup,
  Popover,
  Position,
  Switch,
  Button,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import { getRecordingSettings } from "../api/UiKnowledgeService";

function Configuration() {
  const axios = require('axios').default


  const [isRecording, setIsRecording] = useState({"keystrokes": true, "mouse_actions": true, "screenshot": true, "process": true, "window_history": true, "system_call": true, "video": false, "network_activity": false});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    getRecordingSettings().then(({data}) =>
    {
      setIsRecording(data);
    });
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    axios.post('http://localhost:5000/update_recording_settings', isRecording).then(() => console.log('Settings updated!'))
  }, [isRecording]);

  return (
    <div>
      <h2>Storage</h2>
      <FormGroup label="Storage Threshold:" labelFor="text-input" inline={true}>
        <InputGroup id="text-input" placeholder="80%" />
      </FormGroup>

      <h2>Video</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Video Recording Default Status"}
        checked={isRecording.video}
        onClick={() => 
          setIsRecording({ ...isRecording, video: !isRecording.video})
          }
      />

      <Popover
        content={
          <Menu>
            <MenuItem text="480p" />
            <MenuItem text="720p" />
            <MenuItem text="1080p" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button icon="symbol-triangle-down" text="Video Resolution Default" />
      </Popover>

      <Popover
        content={
          <Menu>
            <MenuItem text="15 fps" />
            <MenuItem text="30 fps" />
            <MenuItem text="60 fps" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button icon="symbol-triangle-down" text="Video Frame Rate Default" />
      </Popover>

      <Popover
        content={
          <Menu>
            <MenuItem text="1 second" />
            <MenuItem text="5 seconds" />
            <MenuItem text="10 seconds" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button icon="symbol-triangle-down" text="Video Recording Wait" />
      </Popover>

      <FormGroup
        label="Video Recording Wait Value:"
        labelFor="text-input"
        inline={true}
      >
        <InputGroup id="text-input" placeholder="e.g 100ms" />
      </FormGroup>

      <h2>Screenshot</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Screenshot Recording Default Status"}
        checked={isRecording.screenshot}
        onClick={() => 
          setIsRecording({ ...isRecording, screenshot: !isRecording.screenshot})
          }
      />

      <Popover
        content={
          <Menu>
            <MenuItem text="PNG" />
            <MenuItem text="JPEF" />
            <MenuItem text="BMP" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button icon="symbol-triangle-down" text="Screenshot Format Default" />
      </Popover>

      <h2>System Call</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic System Call Recording Default Status"}
        checked={isRecording.system_call}
        onClick={() => 
          setIsRecording({ ...isRecording, system_call: !isRecording.system_call})
          }
      />

      <h2>Process</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Process Recording Default Status"}
        checked={isRecording.process}
        onClick={() => 
          setIsRecording({ ...isRecording, process: !isRecording.process})
          }
      />

      <Popover
        content={
          <Menu>
            <MenuItem text="30 seconds" />
            <MenuItem text="1 minutes" />
            <MenuItem text="5 minutes" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button
          icon="symbol-triangle-down"
          text="Process Snapshot Duration Unit"
        />
      </Popover>

      <FormGroup
        label="Process Snapshot Duration Value:"
        labelFor="text-input"
        inline={true}
      >
        <InputGroup id="text-input" placeholder="e.g 10 seconds" />
      </FormGroup>

      <h2>Keystroke</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Keystroke Recording Default Status"} 
        checked={isRecording.keystrokes}
        onClick={() => 
          setIsRecording({ ...isRecording, keystrokes: !isRecording.keystrokes})
          }
      />

      <h2>Mouse Action</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Mouse Action Recording Default Status"}
        checked={isRecording.mouse_actions}
        onClick={() => 
          setIsRecording({ ...isRecording, mouse_actions: !isRecording.mouse_actions})
          }
      />

      <h2>Network Activity Data</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Network Activity Recording Default Status"}
        checked={isRecording.network_activity}
        onClick={() => 
          setIsRecording({ ...isRecording, network_activity: !isRecording.network_activity})
          }
      />

      <Popover
        content={
          <Menu>
            <MenuItem text="1 minute" />
            <MenuItem text="5 minutes" />
            <MenuItem text="10 minutes" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button
          icon="symbol-triangle-down"
          text="Network Activity Data Duration Unit"
        />
      </Popover>

      <FormGroup
        label="Network Activity Data Duration Value:"
        labelFor="text-input"
        inline={true}
      >
        <InputGroup id="text-input" placeholder="e.g 5 minutes" />
      </FormGroup>

      <h2>Window History</h2>
      <Switch
        innerLabelChecked="On"
        innerLabel="Off"
        labelElement={"Automatic Windows History Recording Default Status"}
        checked={isRecording.window_history}
        onClick={() => 
          setIsRecording({ ...isRecording, window_history: !isRecording.window_history})
          }
      />

      <Popover
        content={
          <Menu>
            <MenuItem text="1 minute" />
            <MenuItem text="5 minutes" />
            <MenuItem text="10 minutes" />
          </Menu>
        }
        position={Position.BOTTOM}
      >
        <Button
          icon="symbol-triangle-down"
          text="Window History Duration Unit"
        />
      </Popover>

      <FormGroup
        label="Window History Duration Value:"
        labelFor="text-input"
        inline={true}
      >
        <InputGroup id="text-input" placeholder="e.g 5 minutes" />
      </FormGroup>
    </div>
  );
}

export default Configuration;
