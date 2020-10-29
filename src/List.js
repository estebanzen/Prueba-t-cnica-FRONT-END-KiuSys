import React, { Component } from "react";
import axios from "axios";

class List extends Component {
	state = {
		coso: [],
	};

	constructor(props) {
		super(props);
		this.handleUserAdded = this.handleUserAdded.bind(this);
	}

	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
			const coso = res.data;
			this.setState({ coso });
		});
	}

	handleUserAdded(userObject) {
		const newUsers = [...this.state.coso];
		newUsers.push(userObject);

		this.setState({ coso: newUsers });
	}

	render() {
		console.log(this.state.coso);

		if (this.state.coso.length === 0) {
			return (
				<div>
					<p>Loading...</p>
				</div>
			);
		}
		return (
			<div>
				<ul>
					{this.state.coso.map((user) => {
						return (
							<li key={user.id}>
								{user.name} (ID: {user.id})
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default List;
