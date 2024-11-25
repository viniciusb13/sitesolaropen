import React from "react";
import Userfront from "@userfront/react";
import { LogoutButton } from "./autentica/Autenticacao";
import UserDropdown from "./UserDropdown";
import Styled from "styled-components";
import { Link } from "react-router-dom";

Userfront.init("qbjqg94n");

const StyledNav = Styled.nav`
    background: #37313c;
    // background: #58617B;
    color: white;
    min-height: 10vh;
    margin: auto -32px;
    padding: 1rem 2rem;
	
    display: flex;
    justify-content: space-between;
    align-items: center;
	
    position: sticky;
    top: 0;
	right: 0;
	left: 0;
    z-index: 10;

    ul{
        display: flex;
        list-style: none;
		margin-bottom: 0;
		align-items: center;
    }

    li{
        padding-left: 2rem;
    }

    a {
        color: white;
        text-decoration: none;
        &:hover{
			color: #ffd159;
        }
    }

	img.nav-logo {
		height: 64px;
	}

`;

const Logo = Styled.a`
	font-size: 40px;
	textDecoration: none;
	cursor: pointer;
`;

const Menu = () => {
	return (
		<StyledNav>
			<Logo href="/">
				<img className="nav-logo" src="logo.svg" alt="Solar Open Logo" />
			</Logo>

			<ul>
				<li>
					<Link to="/">Início</Link>
				</li>
				<li>
					<Link to="/faleConosco">Fale Conosco</Link>
				</li>
				{!Userfront.accessToken() && (
					<>
						{/* <li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/cadastro">Cadastro</Link>
						</li> */}
						<li>
							<Link to="/entrar">Entrar</Link>
						</li>
					</>
				)}
				{Userfront.accessToken() && (
					<>
						<li>
							<Link to="/medidas">Medidas</Link>
						</li>
						<li>
							<Link to="/admin">Dispositivos</Link>
						</li>
						<li>
							<UserDropdown />
						</li>
					</>
				)}
			</ul>
		</StyledNav>
	);
};
export default Menu;
