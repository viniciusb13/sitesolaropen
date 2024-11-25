import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const SecaoResumo = () => {
	return (
		<Inicio>
			<Descricao>
				<h1>Solar Open</h1>
				<h2>Monitoramento Solar</h2>
				<p>Somos uma empresa de monitoramento residencial e empresarial</p>
				<Button className="contact-us-btn">
					<a href="/faleConosco">Faça Contato</a>
				</Button>
			</Descricao>
		</Inicio>
	);
};

const Inicio = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;
const Descricao = styled.div`
	// Aqui iremos colocar em BenvindoSection, uma div para a descrição e o botão
	flex: 1;
	padding-right: 5rem;
	z-index: 5;

	h1 {
		font-weight: bold;
		color: #ffd159;
	}
	p {
		font-size: 18px;
		color: white;
	}
`;

export default SecaoResumo;
