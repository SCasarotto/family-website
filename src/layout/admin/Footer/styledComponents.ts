import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${(props) => props.theme.white};
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 10px;
	box-shadow: ${(props) => props.theme.shadowTop};

	@media print {
		display: none;
	}
`
export const CopyrightContainer = styled.div`
	color: ${(props) => props.theme.primary};
	text-align: center;
`
export const Copy = styled.p`
	color: ${(props) => props.theme.primary};
	margin-top: 0px;
	margin-bottom: 5px;
`
