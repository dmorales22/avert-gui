import React, { useState, useEffect } from "react";
import { Card, Elevation, MenuItem, Text } from "@blueprintjs/core";

import { MultiSelect } from "@blueprintjs/select";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import {
  getAllIpAddresses,
  getAllMacAddresses,
} from "../../api/UiKnowledgeService";

const dummyIPAddresses = ["123.45.632", "243.532.532", "312.241.523"];
const dummyMACAddresses = [
  "2C:54:91:88:C9:E3",
  "8D:92:DE:1C:23:1D",
  "C2:1A:35:43:E2:22",
];

function UserProfileContentArea({
  selectedIPs,
  setSelectedIPs,
  selectedMACAddresses,
  setSelectedMACAddresses,
}) {
  const [possibleIPAddresses, setPossibleIPAddresses] =
    useState(dummyIPAddresses);
  const [possibleMacAddresses, setPossibleMacAddresses] =
    useState(dummyMACAddresses);

  useEffect(() => {
    getAllIpAddresses().then(({ data }) => {
      setPossibleIPAddresses(data);
    });
    getAllMacAddresses().then(({ data }) => setPossibleMacAddresses(data));
  }, []);

  return (
    <div className="avert-block">
      <Text className="card-title">User Profile</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Text>IP Address</Text>
        <MultiSelect
          itemRenderer={(text, { modifiers, handleClick }) => {
            if (!modifiers.matchesPredicate) {
              return null;
            }
            return (
              <MenuItem
                active={modifiers.active}
                icon={selectedIPs.includes(text) ? "tick" : "blank"}
                key={text}
                onClick={handleClick}
                text={text}
                shouldDismissPopover={false}
              />
            );
          }}
          items={possibleIPAddresses}
          onItemSelect={(item) => {
            const newValue = !selectedIPs.includes(item);
            if (newValue) {
              setSelectedIPs([...selectedIPs, item]);
            } else {
              setSelectedIPs(selectedIPs.filter((x) => x !== item));
            }
          }}
          tagRenderer={(item) => <Text>{item}</Text>}
          selectedItems={selectedIPs}
          itemPredicate={(query, item) => item.includes(query)}
          tagInputProps={{
            onRemove: (_tag, index) => {
              setSelectedIPs(selectedIPs.filter((_x, i) => index !== i));
            },
          }}
        />

        <Text>MAC Address</Text>
        <MultiSelect
          itemRenderer={(text, { modifiers, handleClick }) => {
            if (!modifiers.matchesPredicate) {
              return null;
            }
            return (
              <MenuItem
                active={modifiers.active}
                icon={selectedMACAddresses.includes(text) ? "tick" : "blank"}
                key={text}
                onClick={handleClick}
                text={text}
                shouldDismissPopover={false}
              />
            );
          }}
          items={possibleMacAddresses}
          onItemSelect={(item) => {
            const newValue = !selectedMACAddresses.includes(item);
            if (newValue) {
              setSelectedMACAddresses([...selectedMACAddresses, item]);
            } else {
              setSelectedMACAddresses(
                selectedMACAddresses.filter((x) => x !== item)
              );
            }
          }}
          tagRenderer={(item) => <Text>{item}</Text>}
          selectedItems={selectedMACAddresses}
          itemPredicate={(query, item) => item.includes(query)}
          tagInputProps={{
            onRemove: (_tag, index) => {
              setSelectedMACAddresses(
                selectedMACAddresses.filter((_x, i) => index !== i)
              );
            },
          }}
        />
      </Card>
    </div>
  );
}

export default UserProfileContentArea;
