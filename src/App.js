import React from "react";
import Container from "react-bootstrap/Container";
// import List from "./List/List";
import { Header } from "./Header/Header";
import "./App.css";
import { Listado } from "./Listado/Listado";

const App = () => (
	<>
		<Header></Header>
		<Container className="p-3 main-container">
			<Listado />
			{/* <List /> */}
		</Container>
	</>
);

export default App;
