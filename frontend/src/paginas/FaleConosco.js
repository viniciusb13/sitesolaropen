import React from "react";
//import moment from 'moment'
import styled from "styled-components";
import FormContato from "../componentes/FormContato";

const ContStyled = styled.div`
	padding: 1rem 2rem;
	color: #353535;
	min-height: 90vh;
`;

const PageTitle = styled.h1`
	// color: yellow;
	color: #ffd159;
	font-weight: bold;
	margin-bottom: 4rem;
	text-align: center;
`;

const FaleConosco = () => {
	return (
		<ContStyled>
			<PageTitle>Fale Conosco</PageTitle>
			<FormContato />
		</ContStyled>
	);
};
export default FaleConosco;
