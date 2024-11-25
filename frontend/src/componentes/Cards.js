import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
	box-sizing: border-box;
	background-color: #58617b;
	border-color: black;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	a {
		text-decoration: none;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	h6 {
		padding-left: 1rem;
		color: black;
		font-weight: bold;
		line-height: 12px;
	}
	h5 {
		text-align: center;
		color: white;
		font-weight: normal;
	}
	h6 {
		text-align: center;
		// color: yellow;
		color: #ffd159;
		font-weight: bold;
		font-size: 12px;
		line-height: 5px;
		padding-bottom: 15px;
	}
	lb {
		color: white;
	}
	img {
		padding-bottom: 1rem;
		max-width: 200px;
		max-height: 200px;
		width: auto;
		height: auto;
	}
`;

const Info = styled.div`
	text-decoration: none;
`;

const Card = ({ projeto }) => {
	console.log(projeto);
	var ultimo = projeto.medidas.length;
	console.log(ultimo);
	return (
		<StyledCard>
			<Link to={`/medidas/${projeto._id}`}>
				<Content>
					<h5>{projeto.nome}</h5>
					<img src={projeto.imagem} alt="Description" />
					<h5>Últimas medidas:</h5>
					<h6T>
						{projeto.medidas[ultimo - 1].data}{" "}
						{projeto.medidas[ultimo - 1].hora}
					</h6T>
					<h6T>{projeto.medidas[ultimo - 1].netst}</h6T>
					<Info>
						<h6>Kw/h :{projeto.medidas[ultimo - 1].kwh}</h6>
						<h6>Amp :{projeto.medidas[ultimo - 1].corrente}</h6>
						<h6>Voltagem :{projeto.medidas[ultimo - 1].voltagem}</h6>
						<h6>Ft.P. :{projeto.medidas[ultimo - 1].fp}</h6>
					</Info>
				</Content>
			</Link>
		</StyledCard>
	);
};
export default Card;
