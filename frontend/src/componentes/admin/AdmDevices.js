import React, { useState } from "react";
import styled from "styled-components";
import Userfront from "@userfront/react";
import jwtDecode from "jwt-decode";
import { Container, Table, Image, Button } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";
import moment from "moment";
import CaixaDialogo from "./CaixaDialogo";
import FormEdit from "./FormEdit";
import { deleteRegistro, editRegistro } from "../../services/api";

const Foto = styled(Image)`
	height: 50px;
`;

const H5 = styled.div`
	// color: yellow;
	color: #ffd159;
`;

const AdmDevices = () => {
	const userData = jwtDecode(Userfront.idToken());
	const emailF = userData.email;
	const { data } = useApi(`/devices/${emailF}`);

	const del = (id) => {
		deleteRegistro(id);
		window.location.reload();
	};
	const ed = (id, data) => {
		editRegDevice(id, data);
		window.location.reload();
	};

	const [escolha] = useState({
		delete: {
			header: "Confirma exclusão?",
			variant: "danger",
			label: "Ok",
			mostraBody: true,
			body: "Tem certeza que deseja apagar este registro?",
			callback: del,
		},
		edit: {
			header: "Editar Device:",
			variant: "primary",
			label: "Salvar",
			mostraBody: false,
			callback: ed,
		},
	});
	const [nome, setNome] = useState();
	const [descricao, setDescricao] = useState();
	const [imagem, setImagem] = useState();
	const [show, setShow] = useState(false);
	const [id, setId] = useState();
	const [email, setEmail] = useState();

	const [escAtual, setEscAtual] = useState({
		header: "",
		variant: "",
		label: "",
		body: "",
		email: "",
	});

	const manipulaShow = (device, esc) => {
		setEscAtual(esc);
		setShow(true);
		setId(device._id);
		setEmail(device.email);
		setNome(device.nome);
		setDescricao(device.descricao);
		setImagem(device.imagem);
	};

	const editRegDevice = (id, data) => {
		const newRegDevice = {
			nome: data.nome,
			descricao: data.descricao,
			imagem: data.imagem,
		};
		editRegistro(id, newRegDevice);
	};

	return (
		<Container id="root">
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>
							<H5>Foto</H5>
						</th>
						<th>
							<H5>Device ID</H5>
						</th>
						<th>
							<H5>Nome</H5>
						</th>
						<th>
							<H5>Data de cadastro</H5>
						</th>
						<th>
							<H5>Ações</H5>
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.message?.map((projeto) => {
						return (
							<tr>
								<td>
									<Foto src={projeto.imagem} thumbnail />
								</td>
								<td>{projeto._id}</td>
								<td>{projeto.nome}</td>
								<td>{moment(projeto.data).format("DD-MM-YYYY")}</td>
								<td>
									<Button
										variant="info"
										onClick={() => manipulaShow(projeto, escolha.edit)}
									>
										Editar
									</Button>
									&nbsp;&nbsp;
									<Button
										variant="danger"
										onClick={() => manipulaShow(projeto, escolha.delete)}
									>
										Deletar
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<CaixaDialogo
				show={show}
				setShow={setShow}
				escAtual={escAtual}
				id={id}
				email={email}
			>
				{escAtual.mostraBody && escAtual.body}

				{!escAtual.mostraBody && (
					<FormEdit
						nome={nome}
						setNome={setNome}
						id={id}
						setId={setId}
						email={email}
						setEmail={setEmail}
						descricao={descricao}
						setdescricao={setDescricao}
						imagem={imagem}
						setImagem={setImagem}
					/>
				)}
			</CaixaDialogo>
		</Container>
	);
};

export default AdmDevices;
