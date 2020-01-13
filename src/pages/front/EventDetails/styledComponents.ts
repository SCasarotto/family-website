import styled from 'styled-components'

import { pageHeaders } from 'config/images'

export const Header = styled.div`
	height: 60vh;
	min-height: 400px;
	background-image: url(${pageHeaders.eventDetails});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const HeaderContent = styled.div``
export const HeaderTitle = styled.h1`
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: 5vw;
	color: #ffffff;
	line-height: 1.1;
	text-align: center;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	max-width: 60vw;

	@media only screen and (max-width: 800px) {
		font-size: 10vw;
	}
	@media only screen and (max-width: 500px) {
		font-size: 44px;
	}
`
export const DetailsSection = styled.div`
	padding-top: 80px;
	padding-bottom: 50px;
`
export const DetailsContainer = styled.div`
	max-width: 600px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
`
export const DetailsCopy = styled.p`
	text-align: center;
	font-size: 22px;
	line-height: 1.5;
	margin-top: 0px;
	margin-bottom: 50px;
	color: ${(props) => props.theme.darkerGray};
`
