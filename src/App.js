import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Alert from "react-bootstrap/Alert";

import "./App.css";
import List from "./List";

const App = () => (
	<div>
		<Navbar
			fixed="top"
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
		>
			<Navbar.Brand href="#home">
				Prueba técnica FRONT-END KiuSys
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link
						href="https://www.linkedin.com/in/estebanzen/"
						target="_blank"
					>
						Linkedin @estebanzen
					</Nav.Link>
					<Nav.Link
						href="https://github.com/estebanzen/prueba-tecnica-front-end-kiusys"
						target="_blank"
					>
						GitHub Repo
					</Nav.Link>
					<NavDropdown
						title="Dependencias"
						id="collasible-nav-dropdown"
					>
						{/* 
					-   [React Bootstrap](https://react-bootstrap.github.io/ "React Bootstrap")
					-   [Axios](https://www.npmjs.com/package/axios "Axios")
					-   [React](https://reactjs.org/ "React") 
						*/}
						<NavDropdown.Item
							target="_blank"
							href="https://react-bootstrap.github.io/"
						>
							React Bootstrap
						</NavDropdown.Item>
						<NavDropdown.Item
							target="_blank"
							href="https://www.npmjs.com/package/axios/"
						>
							Axios
						</NavDropdown.Item>
						<NavDropdown.Item
							target="_blank"
							href="https://reactjs.org/"
						>
							React
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		<Container className="p-3 main-container">
			<List></List>
		</Container>
	</div>
);

export default App;
