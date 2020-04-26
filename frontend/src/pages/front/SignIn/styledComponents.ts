import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TEPanelWrapper, TEPanel, TEForm, TEInputRow, TEButton } from 'react-tec'

export const PanelWrapper = styled(TEPanelWrapper)`
	align-items: center;
	justify-content: center;
	background-size: cover;
	padding-top: 150px;
`
export const Panel = styled(TEPanel)`
	max-width: 700px;
	padding: 60px;
`
export const Form = styled(TEForm)`
	background-color: ${(props) => props.theme.primary};
	padding: 40px;
	border-radius: 5px;
`
export const Title = styled.h1`
	color: ${(props) => props.theme.white};
	font-size: 44px;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 40px;
`
export const Input = styled(TEInputRow)`
	.TEInputRowInput {
		border: none;
		padding: 10px;

		:active,
		:hover {
			border: none;
			box-shadow: none;
		}
	}

	.TEInputRowTitle {
		display: none;
	}
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export const Forgot = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.white};
	font-size: 18px;
`
export const Button = styled(TEButton)`
	width: auto;
	padding: 10px 50px;
	border: 1px solid ${(props) => props.theme.white};
	:active,
	:hover {
		border: 1px solid ${(props) => props.theme.white};
	}
`
