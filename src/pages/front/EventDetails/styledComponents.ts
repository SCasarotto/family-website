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

export const LocationSection = styled.div`
	padding-top: 80px;
	padding-bottom: 50px;
`

export const LocationContainer = styled.div`
	max-width: 1200px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const LocationLogoWrapper = styled.div`
	width: 50%;
	padding-right: 15px;
`
export const LocationLogo = styled.img`
	display: block;
	width: 100%;
	max-width: 500px;
	margin: 0px auto;
	border-radius: 10px;
`
export const LocationContent = styled.div`
	width: 50%;
	padding-left: 15px;
`
export const LocationTitle = styled.h2`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 36px;
	line-height: 1.2;
	color: ${(props) => props.theme.primary};
`
export const LocationCopy = styled.p`
	font-size: 20px;
	line-height: 1.5;
	margin-top: 0px;
	margin-bottom: 15px;
	color: ${(props) => props.theme.darkerGray};
	max-width: 475px;
`
export const LocationLink = styled.a`
	display: inline-block;
	padding: 13px 20px 10px;
	font-size: 20px;
	color: ${(props) => props.theme.primary};
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 5px;
	text-decoration: none;
	margin-right: 15px;
	cursor: pointer;
	transition: color 0.25s ease-in, background-color 0.25s ease-in;

	:hover {
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primary};
	}
`
