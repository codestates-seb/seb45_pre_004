import React from "react";
import { parse, formatDistance } from "date-fns";

const DateDistance = ({ inputDate }) => {
	const currentDate = new Date();
	const parsedInputDate = parse(inputDate, "yyyy/MM/dd HH:mm", new Date());

	const formattedDistance = formatDistance(currentDate, parsedInputDate, {
		addSuffix: true,
	});

	const timeOnly = formattedDistance.replace("in about ", "");

	return (
		<div>
			<p>{timeOnly}</p>
		</div>
	);
};

export default DateDistance;
