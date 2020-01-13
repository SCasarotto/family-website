import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	DetailsSection,
	DetailsContainer,
	DetailsCopy,
} from './styledComponents'
import { PageWrapper } from 'components'

export const EventDetails = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>Be our guest</HeaderTitle>
				</HeaderContent>
			</Header>
			<DetailsSection>
				<DetailsContainer>
					<DetailsCopy>
						Our ceremony and reception will be held at DC Estate Winery 8877 State Line
						Rd, South Beloit, IL 61080.
					</DetailsCopy>
					<DetailsCopy>
						More information related to Hotels, transportation and schedule will be
						posted in the near future!
					</DetailsCopy>
				</DetailsContainer>
			</DetailsSection>
		</PageWrapper>
	)
}
