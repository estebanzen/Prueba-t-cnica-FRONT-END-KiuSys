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
import "./List.css";
import { ArrowsMove } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

export function List() {
	const [items, setItems] = React.useState({
		arr_album: [],
	});

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/photos?albumId=1")
			.then((res) => {
				const album = res.data;

				// TODO: ordear array
				// const sortarr = album.sort((a, b) =>
				// 	a.title > b.title ? 1 : -1
				// );
				setItems({
					arr_album: album,
				});
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
			<div className="container-list">
				<GridDropZone
					className="dropzone arr_album"
					id="arr_album"
					boxesPerRow={4}
					rowHeight={270}
				>
					{items.arr_album.map((item) => (
						<GridItem key={item.id}>
							<div className="grid-item">
								<div className="grid-item-content">
									<ModalComponent obj={item}></ModalComponent>
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
