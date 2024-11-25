import Dropdown from "react-bootstrap/Dropdown";
import { LogoutButton } from "./autentica/Autenticacao";
import { Link } from "react-router-dom";

import Userfront from "@userfront/react";
import jwtDecode from "jwt-decode";

function UserDropdown() {
	const userData = jwtDecode(Userfront.idToken());

	return (
		<Dropdown>
			<Dropdown.Toggle variant="warning" id="dropdown-basic">
				{userData.email}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="/admin">Conta</Dropdown.Item>
				<Dropdown.Item>
					<Link to="/logout">
						<LogoutButton />
					</Link>
				</Dropdown.Item>
				{/* <Dropdown.Item href="/action-3">Something else</Dropdown.Item> */}
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default UserDropdown;
