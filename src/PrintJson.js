import React from "react";

export default function PrintJson(props) {
	return (
		<div>
			<textarea rows="10" cols="50">
				{JSON.stringify(props.obj)}
			</textarea>
		</div>
	);
}
