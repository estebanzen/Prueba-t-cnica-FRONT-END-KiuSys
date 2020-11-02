import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import axios from "axios";
import { ModalComponent } from "../Modal/Modal";
import { ArrowsMove } from "react-bootstrap-icons";
import "./List.css";

class List extends Component {
	state = {
		album: [],
	};

	componentDidMount() {
		axios
			.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
			.then((res) => {
				const album = res.data;
				// TODO: ordear array
				this.setState({ album });
			});
	}

	render() {
		// console.log(this.state.album);

		if (this.state.album.length === 0) {
			return (
				<div>
					<Spinner className="spinner" animation="border" />
				</div>
			);
		}

		return (
			<div>
				<Container>
					<Row className="row-container">
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
									<OverlayTrigger
										overlay={
											<Tooltip>Ordenar elemento</Tooltip>
										}
									>
										<Button className="move-btn">
											<ArrowsMove />
										</Button>
									</OverlayTrigger>
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
