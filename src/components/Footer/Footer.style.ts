// components/FooterStyles.js

import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Box = styled.div`
	display:flex;
	justify-content: center;
	padding: 30px 30px 20px 30px;
	background-color: ${colors.primary.main};
	// position: absolute;
	bottom: 0;
	width: 100%;
	margin-top: 80px;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	background: ${colors.primary.main};
`;


export const Logo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-right: 30px;

	& img {
		width: 80%;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 2fr)
	);
	grid-gap: 10px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #000;
	margin-bottom: 10px;
	font-size: 12px;
	text-decoration: none;

	&:hover {
		color: white;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 15px;
	color: #000;
	margin-bottom: 14px;
	font-weight: bold;
`;
