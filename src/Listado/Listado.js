import React, { useEffect } from "react";
import axios from "axios";
import { ModalComponent } from "../Modal/Modal";

import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	swap,
	move,
} from "react-grid-dnd";
import "./Listado.css";
import { ArrowsMove } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

export function Listado() {
	const [items, setItems] = React.useState({
		left: [
			// { id: 1, name: "ben" },
			// { id: 2, name: "joe" },
			// { id: 3, name: "jason" },
			// { id: 4, name: "chris" },
			// { id: 5, name: "heather" },
			// { id: 6, name: "Richard" },
		],
	});

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/photos?albumId=1")
			.then((res) => {
				// setPosts(res.data.slice(0, 10));
				const album = res.data;
				// debugger;
				// TODO: ordear array
				setItems({
					left: album,
				});
				// setItems({ album });
				console.log(res);
			});
	}, []);

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
					rowHeight={270}
				>
					{items.left.map((item) => (
						<GridItem key={item.id}>
							<div className="grid-item">
								<div className="grid-item-content">
									{/* {item.name[0]} */}
									<ModalComponent obj={item}></ModalComponent>

									{/* {JSON.stringify(item)} */}
									{/* {item.name[0].toUpperCase()} */}

									<Button className="move-btn">
										<ArrowsMove />
									</Button>
								</div>
							</div>
						</GridItem>
					))}
				</GridDropZone>
			</div>
		</GridContextProvider>
	);
}
