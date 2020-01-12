import styled from 'styled-components'

import { splashBackground } from 'config/images'

export const Header = styled.div`
	height: 60vh;
	min-height: 400px;
	background-image: url(${splashBackground});
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
export const ComingSoonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
`
export const ComingSoonCopy = styled.p`
	font-size: 36px;
	text-align: center;
	color: ${(props) => props.theme.primary};
	opacity: 0.5;
`
