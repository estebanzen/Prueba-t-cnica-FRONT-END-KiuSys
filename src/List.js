import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { ModalComponent } from "./Modal/";

class List extends Component {
	state = {
		album: [],
	};

	constructor(props) {
		super(props);
		this.handleUserAdded = this.handleUserAdded.bind(this);
	}

	componentDidMount() {
		axios
			.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
			.then((res) => {
				const album = res.data;
				this.setState({ album });
			});
	}

	handleUserAdded(userObject) {
		const newUsers = [...this.state.album];
		newUsers.push(userObject);

		this.setState({ album: newUsers });
	}

	render() {
		console.log(this.state.album);

		if (this.state.album.length === 0) {
			return (
				<div>
					<Spinner animation="border" />
				</div>
			);
		}

		return (
			<div>
				<Container>
					<Row>
						{this.state.album.map((obj) => {
							return (
								<Col
									lg="2"
									sm="3"
									md="4"
									xs="6"
									key={obj.id}
									draggable="true"
								>
									<ModalComponent obj={obj}></ModalComponent>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}

export default List;
