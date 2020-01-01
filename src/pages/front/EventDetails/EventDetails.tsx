import React from 'react'

import { Background, CopyContainer, Title } from './styledComponents'
import { PageWrapper } from 'components'

export const EventDetails = () => {
	return (
		<PageWrapper>
			<Background>
				<CopyContainer>
					<Title>Event Details</Title>
				</CopyContainer>
			</Background>
		</PageWrapper>
	)
}
