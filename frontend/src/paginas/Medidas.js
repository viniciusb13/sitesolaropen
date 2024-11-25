import React from "react";
import styled from "styled-components";
import Card from "../componentes/Cards";
import Userfront from "@userfront/react";
import { useApi } from "../hooks/useApi";
import jwtDecode from "jwt-decode";

Userfront.init("qbjqg94n");

const Listacards = styled.div`
	display: grid;
	grid-template-columns: 200px repeat(auto-fill, 200px);
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
`;

const Listadevices = styled.div`
	min-height: 30vh;
	overflow: hidden;
	padding: 5rem 10rem;
`;

const PageTitle = styled.h1`
	padding-top: 1rem;
	// color: yellow;
	color: #ffd159;
	font-weight: bold;
	margin-bottom: 4rem;
	text-align: center;
`;

if (!Userfront.accessToken()) {
	localStorage.setItem("us", " ");
}

const Medidas = () => {
	const userData = jwtDecode(Userfront.idToken());
	const email = userData.email;
	const { data } = useApi(`/devices/${email}`);
	return (
		<>
			<PageTitle>Medidas</PageTitle>
			<Listadevices>
				<Listacards>
					{data?.message?.map((projeto) => {
						return <Card key={projeto._id} projeto={projeto} />;
					})}
				</Listacards>
			</Listadevices>
		</>
	);
};
export default Medidas;
