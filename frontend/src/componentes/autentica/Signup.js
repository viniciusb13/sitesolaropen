import React, { useState } from "react";
import Userfront from "@userfront/core";
import styled from "styled-components";

import { Form } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";

Userfront.init("qbjqg94n");

// Define the Signup form component
const SignupFormComponent = () => {
	const [email, setEmail] = useState();
	const [accountName, setAccountName] = useState();
	const [password, setPassword] = useState();
	const [passwordVerify, setPasswordVerify] = useState();

	console.log(email);
	console.log(accountName);
	console.log(password);
	console.log(passwordVerify);

	const StyleForm = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		// width: 500px;
		// padding-left: 2rem;
		// padding-bottom: 2rem;
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

	const Label = styled.div`
		// color: yellow;
		color: #ffd159;
	`;

	const PageTitle = styled.h1`
		margin-top: 16px;
		margin-bottom: 16px;
		text-align: center;
		color: #ffd159;
	`;

	// Handle the form submission by calling Userfront.signup()
	function handleSubmit(event) {
		event.preventDefault();
		// Call Userfront.signup()
		Userfront.signup({
			method: "password",
			email: email,
			password: password,
			data: {
				accountName: accountName,
			},
		});
	}

	return (
		<>
			<PageTitle>Criar Conta</PageTitle>
			<StyleForm>
				<Form
					id="signup-form"
					onSubmit={handleSubmit}
					style={{ width: "600px" }}
				>
					<Form.Group className="mb-3" controlId="accountName"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Nome</Label>
					</Form.Label>
					<Form.Control
						type="text"
						name="accountName"
						value={accountName}
						onChange={(e) => setAccountName(e.target.value)}
					/>
					<Form.Group className="mb-3" controlId="email"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Email</Label>
					</Form.Label>
					<Form.Control
						type="email"
						value={email}
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Group className="mb-3" controlId="password"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Senha</Label>
					</Form.Label>
					<Form.Control
						value={password}
						name="password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Form.Group className="mb-3" controlId="passwordVerify"></Form.Group>
					<Form.Label>
						{" "}
						<Label>Verificar Senha</Label>
					</Form.Label>
					<Form.Control
						name="passwordVerify"
						type="password"
						value={passwordVerify}
						onChange={(e) => setPasswordVerify(e.target.value)}
					/>
					<br />
					<Button className="btn-submit-form" type="submit">
						Criar Conta
					</Button>
				</Form>
			</StyleForm>
		</>
	);
};

export default SignupFormComponent;
