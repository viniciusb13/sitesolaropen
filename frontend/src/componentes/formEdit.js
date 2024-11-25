import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap";

function FormEdit({
	nome,
	setNome,
	descricao,
	setDescricao,
	imagem,
	setImagem,
}) {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Container>
			<Form>
				<Form.Group className="mb-3" controlId="nome">
					<Form.Label>Nome do device</Form.Label>
					<Form.Control
						type="text"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
						placeholder="Digite o novo nome do device"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="descricao">
					<Form.Label>Descrição</Form.Label>
					<Form.Control
						as="textarea"
						rows={2}
						value={descricao}
						onChange={(e) => setDescricao(e.target.value)}
						placeholder="Descreva o dispositivo"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="imagem">
					<Form.Label>Foto</Form.Label>
					<Form.Control
						type="text"
						value={imagem}
						onChange={(e) => setImagem(e.target.value)}
						placeholder="Insira uma imagem para o device"
					/>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default FormEdit;
