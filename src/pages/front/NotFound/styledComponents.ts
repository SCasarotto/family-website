import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { notFound } from 'config/images'

export const Background = styled.div`
	height: 100vh;
	min-height: 400px;
	background-image: url(${notFound});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 67% 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Content = styled.div`
	background-color: rgba(0, 0, 0, 0.25);
	padding: 30px;
	max-width: 450px;
	border-radius: 15px;
`
export const Title = styled.h1`
	font-size: 42px;
	color: ${(props) => props.theme.white};
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	margin-top: 0px;
	margin-bottom: 20px;
	line-height: 1.1;
	text-align: center;
`
export const Copy = styled.p`
	font-size: 18px;
	color: ${(props) => props.theme.white};
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	margin-top: 0px;
	margin-bottom: 0px;
	line-height: 1.5;
	text-align: center;
`
export const HomeLink = styled(Link)`
	text-align: center;
	font-size: 18px;
	color: ${(props) => props.theme.white};
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	margin-top: 0px;
	margin-bottom: 0px;
	line-height: 1.5;
`
