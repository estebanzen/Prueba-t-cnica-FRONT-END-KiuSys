import React, { useState, useEffect } from "react";

export function ExampleHook() {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	});

	return (
		<>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</>
	);
}
