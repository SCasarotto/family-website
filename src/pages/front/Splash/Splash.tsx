import React from 'react'

import { Background, CopyContainer, Title, Subtitle } from './styledComponents'
import { PageWrapper } from 'components'

export const Splash = () => {
	return (
		<PageWrapper>
			<Background>
				<CopyContainer>
					<Title>Stuart & Courtney</Title>
					<Subtitle>July 18th 2020 - South Beloit, IL</Subtitle>
				</CopyContainer>
			</Background>
		</PageWrapper>
	)
}
