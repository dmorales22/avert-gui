import React, { useEffect } from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";

function UserProfileArea({ artifact }) {
  useEffect(() => {
    console.log(artifact);
  }, [artifact]);
  return (
    <div className="avert-block">
      <Text className="card-title">User Profile (Artifact)</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
          IP Address : {artifact?.artifact?.user_profile?.ip_address}
        </Card>
        <Card elevation={Elevation.TWO} style={{ marginTop: 8, padding: 8 }}>
          MAC Address : {artifact?.artifact?.user_profile?.mac_address}
        </Card>
      </Card>
    </div>
  );
}

export default UserProfileArea;
