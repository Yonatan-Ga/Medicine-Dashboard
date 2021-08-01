import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";

function DateAndTimePicker() {
  return <MyDTPicker />;
}

class MyDTPicker extends React.Component {
  render() {
    return <Datetime isValidDate={valid} />;
  }
}

var yesterday = moment().subtract(1, "day");
function valid(current) {
  return current.isAfter(yesterday);
}

export default DateAndTimePicker;
