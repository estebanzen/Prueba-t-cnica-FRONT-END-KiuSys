import React from "react";
import Container from "react-bootstrap/Container";

import "./App.css";
import List from "./List";

const App = () => (
	<Container className="p-3">
		<h1 className="header">Prueba técnica FRONT-END KiuSys</h1>
		<List></List>
	</Container>
);

export default App;
