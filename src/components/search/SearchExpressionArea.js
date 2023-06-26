import React, { useState, useEffect } from "react";
import { Card, Elevation, MenuItem, Text, InputGroup } from "@blueprintjs/core";

import { MultiSelect } from "@blueprintjs/select";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import { getAllTags } from "../../api/UiKnowledgeService";

const dummyTags = ["P0", "P1", "VA-0", "VA-1"];

function SearchExpressionArea({
  selectedTags,
  setSelectedTags,
  setExpression,
}) {
  const [possibleTags, setPossibleTags] = useState(dummyTags);

  useEffect(() => {
    getAllTags().then(({ data }) => setPossibleTags(data));
  }, []);

  /* Contains a menu item for the selected tags. */
  return (
    <div className="avert-block">
      <Text className="card-title">Search expression</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <Text style={{ marginBottom: 4 }}>Expression</Text>
        <InputGroup
          placeholder="Enter your expression..."
          onChange={(e) => setExpression(e.target.value)}
        ></InputGroup>
        <Text style={{ marginBottom: 4, marginTop: 8 }}>Tags</Text>
        <MultiSelect
          itemRenderer={(text, { modifiers, handleClick }) => {
            if (!modifiers.matchesPredicate) {
              return null;
            }
            return (
              <MenuItem
                active={modifiers.active}
                icon={selectedTags.includes(text) ? "tick" : "blank"}
                key={text}
                onClick={handleClick}
                text={text}
                shouldDismissPopover={false}
              />
            );
          }}
          items={possibleTags}
          onItemSelect={(item) => {
            const newValue = !selectedTags.includes(item);
            if (newValue) {
              setSelectedTags([...selectedTags, item]);
            } else {
              setSelectedTags(selectedTags.filter((x) => x !== item));
            }
          }}
          tagRenderer={(item) => <Text>{item}</Text>}
          selectedItems={selectedTags}
          itemPredicate={(query, item) => item.includes(query)}
          tagInputProps={{
            onRemove: (_tag, index) => {
              setSelectedTags(selectedTags.filter((_x, i) => index !== i));
            },
          }}
        />
      </Card>
    </div>
  );
}

export default SearchExpressionArea;
