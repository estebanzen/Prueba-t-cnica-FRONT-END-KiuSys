import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import PrintJson from "../PrintJson";
import "./Modal.css";

export function ModalComponent(props) {
	// const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		// document.title = `You clicked ${count} times`;
	});

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const handleImageLoaded = () => console.log("handleImageLoaded()");
	// const handleImageThumbnailLoaded = () =>
	// 	console.log("handleImageThumbnailLoaded()");

	return (
		<>
			<img
				// onLoad={handleImageThumbnailLoaded()}
				className="thumbnail"
				onClick={handleShow}
				style={{
					width: "100%",
					marginBottom: "30px",
					cursor: "pointer",
				}}
				alt={props.obj.title}
				title={props.obj.title}
				src={props.obj.thumbnailUrl}
			/>

			{/* <PrintJson obj={props.obj}></PrintJson> */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.obj.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body
					style={{
						padding: "0px",
					}}
				>
					<img
						className="thumbnail"
						// onLoad={handleImageLoaded()}
						onClick={handleShow}
						style={{
							width: "100%",
						}}
						alt={props.obj.title}
						title={props.obj.title}
						src={props.obj.url}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
