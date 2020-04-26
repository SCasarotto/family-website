import styled from 'styled-components'

import { splashBackground } from 'config/images'

export const Background = styled.div`
	min-height: 100vh;
	background-image: url(${splashBackground});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const CopyContainer = styled.div``
export const Title = styled.h1`
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: 8vw;
	color: #ffffff;
	line-height: 1.1;
	text-align: center;
	font-family: 'Great Vibes', cursive;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	padding: 0px 30px;

	@media only screen and (max-width: 800px) {
		font-size: 10vw;
	}
	@media only screen and (max-width: 500px) {
		font-size: 44px;
	}
`
export const Subtitle = styled.h2`
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: 2vw;
	color: #ffffff;
	line-height: 1.5;
	text-align: center;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
	padding: 0px 30px;

	@media only screen and (max-width: 800px) {
		font-size: 3vw;
	}
	@media only screen and (max-width: 500px) {
		font-size: 16px;
	}
`
