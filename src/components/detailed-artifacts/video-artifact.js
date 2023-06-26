import React from "react";
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import { Card, Elevation, Text } from "@blueprintjs/core";
import  '@blueprintjs/core/lib/css/blueprint.css';
import "@blueprintjs/table/lib/css/table.css";

function VideoArtifact({artifact}) {
  console.log(artifact.video_name)
  const videoPath = "videos/" + artifact.video_name
  return (
    <div className="avert-block">
      <Text className="card-title">Video Artifact</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
      <div className='player-wrapper'>
        <ReactPlayer 
          url = {videoPath}
          controls={true}
        />
      </div>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
            Timestamp : {artifact.artifact.timestamp}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
            Video Path : {artifact.video_file_link}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
            Video Name : {artifact.video_name}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
            Video Size : {artifact.video_size}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
            Video Resolution :  {artifact.video_resolution}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
            Video Frame Rate :  {artifact.video_frame_rate}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
            Video Duration :  {artifact.video_duration}
        </Card>
      </Card>
    </div>
  );
}

export default VideoArtifact;