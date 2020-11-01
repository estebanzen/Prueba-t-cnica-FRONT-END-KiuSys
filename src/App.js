import React from "react";
import Container from "react-bootstrap/Container";
import List from "./List/List";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import "./App.css";

const App = () => (
	<>
		<Header></Header>
		<Container className="p-3 main-container">
			<List></List>
		</Container>
		<Footer></Footer>
	</>
);

export default App;
