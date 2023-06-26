import React from "react";

import { Card, Elevation, Text } from "@blueprintjs/core";

import { DateRangeInput, TimePrecision } from "@blueprintjs/datetime";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import moment from "moment";

/* This is the required time format. */
const DATE_FORMAT_STRING = "YYYY-MM-DD HH:mm:ss";

const DATE_FORMAT = {
  formatDate: (date) => moment(date).format(DATE_FORMAT_STRING),
  parseDate: (str) => moment(str, DATE_FORMAT_STRING).toDate(),
  placeholder: "YYYY-MM-DD HH:mm:ss",
};

function DateAndTimeContentArea({ setTimeRange }) {
  return (
    <div className="avert-block">
      <Text className="card-title">Date and time</Text>
      <Card elevation={Elevation.TWO} style={{ padding: 8 }}>
        <DateRangeInput
          formatDate={DATE_FORMAT.formatDate}
          parseDate={DATE_FORMAT.parseDate}
          placeholder={DATE_FORMAT.placeholder}
          onChange={(x) => setTimeRange(x)}
          allowSingleDayRange={true}
          timePickerProps={{
            showArrowButtons: true,
            allowSingleDayRange: false,
            precision: TimePrecision.SECOND,
          }}
        />
      </Card>
    </div>
  );
}

export default DateAndTimeContentArea;
