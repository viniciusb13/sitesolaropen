import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Tabs, Tab, Col, Nav, Row } from "react-bootstrap";
import { LoginForm, SignupForm } from "../componentes/autentica/Autenticacao";

const PageTitle = styled.h1`
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-weight: bold;
	// color: yellow;
	color: #ffd159;
	text-align: center;
`;

const Geral = styled.div`
	h5 {
		padding-left: 2rem;
		// color: yellow;
		color: #ffd159;
		font-weight: bold;
	}

	.nav-item .nav-link {
		color: #ffd159;
		cursor: pointer;
	}

	.nav-item .nav-link:hover {
		color: #b3923e;
	}

	.nav-item .nav-link.active {
		background: #ffd159;
		color: #252128;
	}
`;

const Login = () => {
	return (
		<Geral>
			<Container>
				<PageTitle>Entrar</PageTitle>
			</Container>
			<div>
				<Tab.Container id="left-tabs-example" defaultActiveKey="entrar">
					<Nav
						variant="pills"
						className=""
						style={{ justifyContent: "center", marginTop: "32px" }}
					>
						<Nav.Item>
							<Nav.Link eventKey="entrar">Entrar</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="criarConta">Criar Conta</Nav.Link>
						</Nav.Item>
					</Nav>
					<Tab.Content>
						<Tab.Pane eventKey="entrar">
							<LoginForm />
						</Tab.Pane>
						<Tab.Pane eventKey="criarConta">
							<SignupForm />
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
			</div>
		</Geral>
	);
};
export default Login;
