import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { sendMail } from "../services/api";

const Label = styled.div`
	// color: yellow;
	color: #ffd159;
`;

const StyleForm = styled.div`
	display: block;
	width: 900px;
	padding-left: 2rem;
	padding-bottom: 2rem;
	h5 {
		// color: yellow;
		color: #ffd159;
	}
	h6 {
		// color: yellow;
		color: #ffd159;
		font-weight: bold;
	}
`;

const FormContato = () => {
	const [status, setStatus] = useState("Enviar");
	const [nome, setNome] = useState();
	const [email, setEmail] = useState();
	const [mensagem, setMensagem] = useState();

	function manipulaSubmite(e) {
		e.preventDefault();
		setStatus("Enviando...");
		const newSendEmail = {
			nome: nome,
			email: email,
			mensagem: mensagem,
		};
		sendMail(newSendEmail);
		//id='form' onSubmit={manipulaSubmite} -- sendMail está em api.js
	}

	return (
		<Container>
			<StyleForm>
				<Form id="form" onSubmit={manipulaSubmite}>
					<Form.Group className="mb-3" controlId="nome"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Nome:</Label>
					</Form.Label>
					<Form.Control
						type="text"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
					<Form.Group className="mb-3" controlId="email"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Email:</Label>
					</Form.Label>
					<Form.Control
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Group className="mb-3" controlId="mensagem"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Mensagem:</Label>
					</Form.Label>
					<Form.Control
						type="text"
						value={mensagem}
						onChange={(e) => setMensagem(e.target.value)}
					/>
					<br />
					<Button className="btn-submit-form" type="submit">
						{status}
					</Button>
				</Form>
			</StyleForm>
		</Container>
	);
};
export default FormContato;

//<form action="mailto:someone@example.com" method="post" enctype="text/plain"></form>
