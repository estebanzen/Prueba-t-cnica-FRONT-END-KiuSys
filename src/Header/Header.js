import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export function Header() {
	return (
		<>
			<Navbar
				fixed="top"
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
			>
				<Container>
					<Navbar.Brand href="#home">
						Prueba técnica FRONT-END KiuSys
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<NavDropdown
								title="Dependencias"
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item
									target="_blank"
									href="https://reactjs.org/"
								>
									React
								</NavDropdown.Item>
								<NavDropdown.Item
									target="_blank"
									href="https://react-bootstrap.github.io/"
								>
									React Bootstrap
								</NavDropdown.Item>
								<NavDropdown.Item
									target="_blank"
									href="https://www.npmjs.com/package/react-bootstrap-icons"
								>
									React Bootstrap Icons
								</NavDropdown.Item>
								<NavDropdown.Item
									target="_blank"
									href="https://www.npmjs.com/package/axios/"
								>
									Axios
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link
								href="https://github.com/estebanzen/prueba-tecnica-front-end-kiusys"
								target="_blank"
							>
								GitHub Repo
							</Nav.Link>
							<Nav.Link
								href="https://www.linkedin.com/in/estebanzen/"
								target="_blank"
							>
								{/* Linkedin @estebanzen */}
								<Image
									href="https://www.linkedin.com/in/estebanzen/"
									style={{
										width: "25px",
										marginRight: "15px",
									}}
									roundedCircle
									src="https://media-exp1.licdn.com/dms/image/C4E35AQFBzB93WgukyQ/profile-framedphoto-shrink_200_200/0?e=1604260800&v=beta&t=FBXrtx7dwQe53VQTLKHZ8oZyKHTanxGmwSGM0o8Vrck"
								/>
								Autor: Esteban Zenzerovich
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
