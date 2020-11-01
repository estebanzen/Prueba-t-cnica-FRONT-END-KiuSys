import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export function Footer() {
	return (
		<>
			<Navbar
				// fixed="bottom"
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
			>
				<Container>
					<Navbar.Brand
						href="https://www.linkedin.com/in/estebanzen/"
						target="_blank"
					>
						<Image
							href="https://www.linkedin.com/in/estebanzen/"
							style={{ width: "77px", marginRight: "15px" }}
							roundedCircle
							src="https://media-exp1.licdn.com/dms/image/C4E35AQFBzB93WgukyQ/profile-framedphoto-shrink_200_200/0?e=1604260800&v=beta&t=FBXrtx7dwQe53VQTLKHZ8oZyKHTanxGmwSGM0o8Vrck"
						/>
						Autor: Esteban Zenzerovich
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
}
