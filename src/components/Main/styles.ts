import styled, { css } from 'styled-components';

import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/Icons';

export const Container = styled.div`
	display: flex;
	/* O conteúdo do Main funciona de cima pra baixo */
	flex-direction: column;

	/* O manor valor entre 601px e o tamanho de 100% da tela será o utilizado */
	width: min(601px, 100%);
	
	/* Cria as barras cinzas a partir de 500px de tela */
	@media (min-width: 500px) {
		border-left: 1px solid var(--outline);
		border-right: 1px solid var(--outline);

	}
	
`;

export const Header = styled.div`
	/* Mantém o Header no topo dos outros conteúdos  */
	z-index: 2;
	position: sticky;
	top: 0;
	background: var(--primary);

	display: flex;
	align-items: center;

	text-align: left;

	padding: 8px 0 9px 13px;

	border-bottom: var(--outline);

	> button {
		padding: 8px;
		border-radius: 50%;

		outline: 0;
		cursor: pointer;

		&:hover {
			background: var(--twitter-dark-hover);
			
		}
	}
`;

export const BackIcon = styled(ArrowLeft)`
	width: 24px;
	height: 24px;

	fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
	margin-left: 17px;

	display: flex;
	flex-direction: column;

	> strong {
		font-size: 19px;
	}

	> span {
		font-size: 15px;
		color: var(--gray);
	}
`;

export const BottomMenu = styled.div`
	/* Menu ficará fixado na parte inferior da tela, sumindo quando a tela for maior de 500px */
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;
	
	background: var(--primary);
	width: 100%;
	border-top: 1px solid var(--outline);
	
	display: flex;
	justify-content: space-between;
	/* Estudar min e max */
	padding: 8px min(46px, max(10vw, 10px));

	@media (min-width: 500px) {
		display: none;
	}
`;

// Estilização geral dos botões, reutilizando código
const iconCSS = css`
	width: 31px;
	height: 31px;

	cursor: pointer;

	fill: var(--gray);

	&:hover,
	&.active {
		fill: var(--twitter);
	}

`;

export const HomeIcon = styled(Home)`
	${iconCSS}
`;

export const SearchIcon = styled(Search)`
	${iconCSS}
`;

export const BellIcon = styled(Notifications)`
	${iconCSS}
`;

export const EmailIcon = styled(Email)`
	${iconCSS}
`;