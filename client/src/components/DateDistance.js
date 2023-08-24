import React from "react";
import { formatDistance } from "date-fns";

const DateDistance = ({ inputDate }) => {
  const currentDate = new Date();
  const parsedInputDate = new Date(inputDate);
  const formattedDistance =
    inputDate &&
    formatDistance(parsedInputDate, currentDate, {
      addSuffix: true,
    });

  const timeOnly = inputDate && formattedDistance.replaceAll("in about ", "");

  return <div>{timeOnly}</div>;
};

export default DateDistance;
