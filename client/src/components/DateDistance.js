import React from "react";
import { parseISO, formatDistance } from "date-fns";

const DateDistance = ({ inputDate }) => {
	const currentDate = new Date();
	const parsedInputDate = parseISO(inputDate);

	const formattedDistance = formatDistance(currentDate, parsedInputDate, {
		addSuffix: true,
	});

	return (
		<div>
			<p>{formattedDistance}</p>
		</div>
	);
};

export default DateDistance;
