import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Tabs, Tab, Col, Nav, Row } from "react-bootstrap";
import ListaDevices from "../componentes/admin/ListaDevices";
import AdmDevices from "../componentes/admin/AdmDevices";
import NovoDevice from "../componentes/admin/NovoDevice";
import { useNavigate } from "react-router-dom";
import Userfront from "@userfront/react";
import jwtDecode from "jwt-decode";

Userfront.init("qbjqg94n");

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

const Admin = ({ location }) => {
	let navigate = useNavigate();
	useEffect(() => {
		if (!Userfront.accessToken()) {
			localStorage.setItem("us", " ");
			return navigate("/login");
		}
	});

	return (
		<Geral>
			<Container>
				<PageTitle>Dispositivos</PageTitle>
			</Container>
			<div>
				<Tab.Container id="left-tabs-example" defaultActiveKey="devices">
					<Row>
						<Col sm={2}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="devices">Meus Devices</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="detalhes">Detalhes</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="novo">Novo Device</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="devices">
									<ListaDevices />
								</Tab.Pane>
								<Tab.Pane eventKey="detalhes">
									<AdmDevices />
								</Tab.Pane>
								<Tab.Pane eventKey="novo">
									<NovoDevice />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</Geral>
	);
};
export default Admin;
