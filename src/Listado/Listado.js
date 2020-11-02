import React from "react";
// import ReactDOM from "react-dom";
import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	swap,
	move,
} from "react-grid-dnd";
import "./Listado.css";

export function Listado() {
	const [items, setItems] = React.useState({
		left: [
			{ id: 1, name: "ben" },
			{ id: 2, name: "joe" },
			{ id: 3, name: "jason" },
			{ id: 4, name: "chris" },
			{ id: 5, name: "heather" },
			{ id: 6, name: "Richard" },
		],
	});

	function onChange(sourceId, sourceIndex, targetIndex, targetId) {
		if (targetId) {
			const result = move(
				items[sourceId],
				items[targetId],
				sourceIndex,
				targetIndex
			);
			return setItems({
				...items,
				[sourceId]: result[0],
				[targetId]: result[1],
			});
		}

		const result = swap(items[sourceId], sourceIndex, targetIndex);
		return setItems({
			...items,
			[sourceId]: result,
		});
	}

	return (
		<GridContextProvider onChange={onChange}>
			<div className="container">
				<GridDropZone
					className="dropzone left"
					id="left"
					boxesPerRow={4}
					rowHeight={70}
				>
					{items.left.map((item) => (
						<GridItem key={item.name}>
							<div className="grid-item">
								<div className="grid-item-content">
									{item.name[0].toUpperCase()}
								</div>
							</div>
						</GridItem>
					))}
				</GridDropZone>
			</div>
		</GridContextProvider>
	);
}