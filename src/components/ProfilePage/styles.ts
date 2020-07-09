import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
	display: flex;
	/* Conteúdo de baixo pra cima */
	flex-direction: column;

	max-height: 100%;
	/* O que sobrar vai ser transformado em scroll */
	overflow-y: auto;

	/* Firefox */
	scrollbar-width: none;

	/* Chrome */
	::-webkit-scrollbar {
		display: none;
	}
`; 

export const Banner = styled.div`
	/* Evitar que o componente encolha */
	flex-shrink: 0;

	width: 100%;
	/* Estudar fórmula abaixo */
	height: min(33vh, 199px);

	background: var(--twitter);

	position: relative;
`; 

export const Avatar = styled.div`
	/* Estudar fórmulas abaixo */
	width: max(45px, min(135px, 22vw));
	height: max(45px, min(135px, 22vw));

	border: 3.75px solid var(--primary);
	background: var(--gray);
	border-radius: 50%;
	/* Só funciona se o elemento pai possuir position: relative; */
	position: absolute;
	/* Fórmula */
	bottom: max(-60px, -10vw);
	left: 15px;
`;

export const ProfileData = styled.div`
	/* Mínimo entre o resultado do cálculo e 67px */
	padding: min(calc(10vw + 7px), 67px) 16px 0;
	display: flex;

	flex-direction: column;

	position: relative;

	> h1 {
		font-weight: bold;
		font-size: 19px;
	}

	> h2 {
		font-weight: normal;
		font-size: 15px;

		color: var(--gray);
	}

	> p {
		font-size: 15px;
		margin-top: 11px;
		
		> a {
			text-decoration: none;
			color: var(--twitter);
	
		}
		
	}

	> ul {
		list-style: none;
		margin-top: 10px;
		margin-bottom: 10px;

		> li {
			display: flex;
			align-items: center;
			
			font-size: 15px;
			color: var(--gray);
			
			> svg {
				fill: var(--gray);
				margin-right: 5px;
			}
		}
	}
`;

const iconCSS = css`
	width: 20px;
	height: 20px;

	color: var(--gray);

`;

export const LocationIcon = styled(LocationOn)`
	${iconCSS}
`; 
export const CakeIcon = styled(Cake)`
	${iconCSS}
`; 

export const Followage = styled.div`
	display: flex;

	> span {
		font-size: 15px;
		color: var(--gray);

		/* Após o primeiro span, essa estilização será aplicada no resto */
		& + span {
			margin-left: 20px;
		}
	}
`;

export const EditButton = styled(Button)`
	position: absolute;
	top: 2vw;
	right: 7px;
	padding: 4px 16px;
	font-size: 13px;

	/* Caso a tela seja grande */
	@media (min-width: 320px) {
		top: 10px;
		padding: 10px 19px;
		font-size: 15px;
	}
`;