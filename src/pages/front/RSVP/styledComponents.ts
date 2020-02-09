import styled from 'styled-components'

import { pageHeaders } from 'config/images'

export const Header = styled.div`
	height: 60vh;
	min-height: 400px;
	background-image: url(${pageHeaders.rsvp});
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
		font-size: 8vw;
	}
	@media only screen and (max-width: 500px) {
		font-size: 44px;
	}
`
export const ComingSoonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 80px;
	padding-bottom: 50px;
	padding-left: 30px;
	padding-right: 30px;
`
export const ComingSoonCopy = styled.p`
	font-size: 36px;
	text-align: center;
	color: ${(props) => props.theme.primary};
	opacity: 0.5;
	line-height: 1.5;
`
