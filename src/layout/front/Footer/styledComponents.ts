import styled from 'styled-components'

import { footer } from 'config/images'

export const Container = styled.div`
	height: 400px;
	background-image: url(${footer});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 50px;
`
export const Quote = styled.p`
	font-size: 46px;
	color: ${(props) => props.theme.white};
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
	font-family: 'Great Vibes', cursive;
`
