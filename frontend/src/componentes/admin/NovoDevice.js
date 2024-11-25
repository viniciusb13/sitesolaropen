import React, { useState } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { addRegistro } from "../../services/api";

const NovoDevice = () => {
	const [nome, setNome] = useState();
	const [descricao, setDescricao] = useState();
	const [email, setEmail] = useState();
	const [imagem, setImagem] = useState();
	const [validated, setValidated] = useState(false);

	const data = { nome, descricao, email, imagem };

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			addRegistro(data);
		}
		setValidated(true);
	};

	return (
		<Container>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				style={{
					padding: "16px",
					maxWidth: "600px",
					width: "75%",
					margin: "auto",
					display: "flex",
					flexDirection: "column",
				}}
			>
				{/* <Form.Group className="mb-4" md="4" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						hasValidation
						required
						type="text"
						value={email}
						placeholder="Digite seu email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						Email Inválido
					</Form.Control.Feedback>
				</Form.Group> */}
				<Form.Group
					hasValidation
					md="4"
					className="mb-4"
					controlId="formBasicDevice"
				>
					<Form.Label>Device</Form.Label>
					<Form.Control
						required
						type="text"
						value={nome}
						placeholder="O nome para seu device"
						onChange={(e) => setNome(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						Nome Inválido
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group
					hasValidation
					md="4"
					className="mb-4"
					controlId="formBasicDescription"
				>
					<Form.Label>Descrição</Form.Label>
					<InputGroup hasValidation>
						<Form.Control
							type="text"
							placeholder="Uma descrição para o seu device"
							value={descricao}
							onChange={(e) => setDescricao(e.target.value)}
							required
						/>
						<Form.Control.Feedback type="invalid">
							Descrição Inválida
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>
				<Form.Group
					hasValidation
					md="4"
					className="mb-4"
					controlId="formBasicImage"
				>
					<Form.Label>Imagem</Form.Label>
					<InputGroup hasValidation>
						<Form.Control
							type="text"
							placeholder="Um endereço de uma imagem"
							value={imagem}
							onChange={(e) => setImagem(e.target.value)}
							required
						/>
						<Form.Control.Feedback type="invalid">
							Imagem Inválida
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>
				<Button className="mt-2 btn-submit-form" type="submit">
					Adicionar novo dispositivo
				</Button>
			</Form>
		</Container>
	);
};

export default NovoDevice;
