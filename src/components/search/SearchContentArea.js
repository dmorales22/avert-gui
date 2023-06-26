import React, { useState, useEffect } from "react";
import { Button, Card, Elevation, Text } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import TypeContentArea from "./TypeContentArea";
import UserProfileContentArea from "./UserProfileContentArea";
import DateAndTimeContentArea from "./DateAndTimeContentArea";
import SearchExpressionArea from "./SearchExpressionArea";

const axios = require("axios").default;

const DUMMY_SEARCH_QUERY_TYPE = {
  stillScreenshot: true,
  video: false,
  networkPacket: false,
  process: false,
  keystroke: false,
  mouseAction: false,
  windowHistory: true,
  systemCall: false,
  history: false,
  log: false,
  all: false,
  allArtifactTypes: false,
};

function SearchContentArea({ setResults, setQuery }) {
  const [searchType, setSearchType] = useState(DUMMY_SEARCH_QUERY_TYPE);
  const [searchIpAddresses, setSearchIPAddresses] = useState([]);
  const [searchMacAddresses, setSearchMacAddresses] = useState([]);
  const [searchTimeRange, setSearchTimeRange] = useState([null, null]);
  const [searchExpression, setSearchExpression] = useState("");
  const [searchSelectedTags, setSearchSelectedTags] = useState([]);

  function buildQuery() {
    return {
      types: searchType,
      ip_addresses: searchIpAddresses,
      mac_addresses: searchMacAddresses,
      time_range: searchTimeRange,
      expression: searchExpression,
      selected_tags: searchSelectedTags,
    };
  }

  useEffect(() => {
    setQuery(buildQuery());
  }, [
    searchType,
    searchIpAddresses,
    searchMacAddresses,
    searchTimeRange,
    searchExpression,
    searchSelectedTags,
  ]);

  return (
    <div>
      <Text className="card-title">Search</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <div className="avert-row">
          <TypeContentArea settings={searchType} setSettings={setSearchType} />
          <UserProfileContentArea
            selectedIPs={searchIpAddresses}
            setSelectedIPs={setSearchIPAddresses}
            selectedMACAddresses={searchMacAddresses}
            setSelectedMACAddresses={setSearchMacAddresses}
          />
          <DateAndTimeContentArea setTimeRange={setSearchTimeRange} />
          <SearchExpressionArea
            selectedTags={searchSelectedTags}
            setSelectedTags={setSearchSelectedTags}
            setExpression={setSearchExpression}
          />
          <Button
            intent="success"
            text="Search"
            rightIcon="search"
            onClick={() => {
              axios
                .post("http://localhost:5000/search", buildQuery())
                .then(({ data }) => setResults(data))
                .catch((error) => console.log(error));
              console.log("promise registered!");
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default SearchContentArea;
