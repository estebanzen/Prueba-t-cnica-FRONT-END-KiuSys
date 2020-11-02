import React from "react";
import Container from "react-bootstrap/Container";
import { Header } from "./Header/Header";
import "./App.css";
import { List } from "./List/List";

const App = () => (
	<>
		<Header></Header>
		<Container className="p-3 main-container">
			<List />
		</Container>
	</>
);

export default App;
