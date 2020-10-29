import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./App.css";
import Hello from "./Hello";
import List from "./List";

const ExampleToast = ({ children }) => {
	const [show, toggleShow] = useState(true);

	return (
		<div>
			<List></List>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Modal body text goes here.</p>
					<Hello name="si"></Hello>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary">Close</Button>
					<Button variant="primary">Save changes</Button>
				</Modal.Footer>
			</Modal.Dialog>

			{!show && (
				<Button onClick={() => toggleShow(true)}>Show Toast</Button>
			)}
			<Toast show={show} onClose={() => toggleShow(false)}>
				<Toast.Header>
					<strong className="mr-auto">React-Bootstrap</strong>
				</Toast.Header>
				<Toast.Body>{children}</Toast.Body>
			</Toast>
		</div>
	);
};

const App = () => (
	<Container className="p-3">
		<Jumbotron>
			<h1 className="header">Prueba técnica FRONT-END KiuSys</h1>
			<ExampleToast>
				We now have Toasts
				<span role="img" aria-label="tada">
					🎉
				</span>
			</ExampleToast>
		</Jumbotron>
	</Container>
);

export default App;
