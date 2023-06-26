import React, { useState } from "react";
import {
  Card,
  Elevation,
  Text,
  MenuItem,
  Icon,
  Divider,
  EditableText,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import { MultiSelect } from "@blueprintjs/select";
import "@blueprintjs/select/lib/css/blueprint-select.css";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

import { getAllIpAddresses } from "../../api/UiKnowledgeService";
import { getAllMacAddresses } from "../../api/UiKnowledgeService";

//remove below
const dummyIPAddresses = ["123.45.632", "243.532.532", "312.241.523"];
const dummyMACAddresses = [
  "2C:54:91:88:C9:E3",
  "8D:92:DE:1C:23:1D",
  "C2:1A:35:43:E2:22",
];

const axios = require("axios").default;

function SyncToFrom({ setIpAddress }) {
  const [selectedIPs, setSelectedIPs] = useState([]);
  const [selectedMACAddresses, setSelectedMACAddresses] = useState([]);
  const [toSelectedIPs, setToSelectedIPs] = useState([]);

  return (
    <div>
      <Card elevation={Elevation.THREE}>
        <Row className="text-center">
          <Col>
            <h3 className="mt-0 mb-4">Receive/Send Data</h3>
          </Col>
        </Row>

        <Row>
          {/* From IP and MAC */}
          <Col sm>
            <Card elevation={Elevation.THREE}>
              <Row className="text-center mb-2">
                <Col>
                  <Icon icon="download" />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Text>From Analyst’s IP Address:</Text>
                    </Col>
                  </Row>

                  <Row className="my-2">
                    <Col>
                      <EditableText
                        onChange={setIpAddress}
                        placeholder="IP Address"
                        minWidth={300}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/*
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Text>From Analyst’s MAC Address:</Text>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                      <MultiSelect
                        fill
                        itemRenderer={(text, { modifiers, handleClick }) => {
                          if (!modifiers.matchesPredicate) {
                            return null;
                          }
                          return (
                            <MenuItem
                              active={modifiers.active}
                              icon={
                                selectedMACAddresses.includes(text)
                                  ? "tick"
                                  : "blank"
                              }
                              key={text}
                              onClick={handleClick}
                              text={text}
                              shouldDismissPopover={false}
                            />
                          );
                        }}
                        items={dummyMACAddresses} //potentially incorrect
                        onItemSelect={(item) => {
                          const newValue = !selectedMACAddresses.includes(item);
                          if (newValue) {
                            setSelectedMACAddresses([
                              ...selectedMACAddresses,
                              item,
                            ]);
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
                              selectedMACAddresses.filter(
                                (_x, i) => index !== i
                              )
                            );
                          },
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              */}
            </Card>
          </Col>

          {/* To IP */}
          {/*
          <Col sm xxl={6} className="mt-4 mt-xxl-0">
            <Card elevation={Elevation.THREE}>
              <Row className="text-center mb-2">
                <Col>
                  <Icon icon="upload" />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col>
                  <Text>To Analyst’s IP Address:</Text>
                </Col>
              </Row>

              <Row className="my-2">
                <Col>
                  <MultiSelect
                    fill
                    itemRenderer={(text, { modifiers, handleClick }) => {
                      if (!modifiers.matchesPredicate) {
                        return null;
                      }
                      return (
                        <MenuItem
                          active={modifiers.active}
                          icon={toSelectedIPs.includes(text) ? "tick" : "blank"}
                          key={text}
                          onClick={handleClick}
                          text={text}
                          shouldDismissPopover={false}
                        />
                      );
                    }}
                    items={dummyIPAddresses} //potentially incorrect
                    onItemSelect={(item) => {
                      const newValue = !toSelectedIPs.includes(item);
                      if (newValue) {
                        setToSelectedIPs([...toSelectedIPs, item]);
                      } else {
                        setToSelectedIPs(
                          toSelectedIPs.filter((x) => x !== item)
                        );
                      }
                    }}
                    tagRenderer={(item) => <Text>{item}</Text>}
                    selectedItems={toSelectedIPs}
                    itemPredicate={(query, item) => item.includes(query)}
                    tagInputProps={{
                      onRemove: (_tag, index) => {
                        setToSelectedIPs(
                          toSelectedIPs.filter((_x, i) => index !== i)
                        );
                      },
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          */}
        </Row>
      </Card>
    </div>
  );
}

export default SyncToFrom;
