import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

export function ModalComponent(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<img
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
