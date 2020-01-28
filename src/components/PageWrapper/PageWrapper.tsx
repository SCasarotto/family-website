import React from 'react'
import styled from 'styled-components'
import { Footer } from 'layout/front/Footer'

const Wrapper = styled.main`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
`

interface Props {
	footer?: boolean
}
export const PageWrapper: React.FC<Props> = (props) => {
	const { footer = true, children } = props
	return (
		<Wrapper>
			{children}
			{footer && <Footer />}
		</Wrapper>
	)
}
