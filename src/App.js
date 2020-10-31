import React from "react";
import Container from "react-bootstrap/Container";
import List from "./List";
import { Header } from "./Header/Header";
import "./App.css";

const App = () => (
	<>
		<Header></Header>
		<Container className="p-3 main-container">
			<List></List>
		</Container>
	</>
);

export default App;
