import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	LocationSection,
	LocationContainer,
	LocationLogoWrapper,
	LocationLogo,
	LocationContent,
	LocationTitle,
	LocationCopy,
	LocationLink,
} from './styledComponents'
import { PageWrapper } from 'components'
import { eventDetails } from 'config/images'

export const EventDetails = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>Be our guest</HeaderTitle>
				</HeaderContent>
			</Header>
			<LocationSection>
				<LocationContainer>
					<LocationLogoWrapper>
						<LocationLogo src={eventDetails.dcEstate} alt='DC Estate Winery' />
					</LocationLogoWrapper>
					<LocationContent>
						<LocationTitle>Ceremony and Reception</LocationTitle>
						<LocationCopy>
							Please join us on July 18th 2020 at DC Estate Winery 8877 State Line Rd,
							South Beloit, IL 61080.
						</LocationCopy>
						<LocationLink
							href='https://www.dcestatewinery.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							The Venue
						</LocationLink>
						<LocationLink
							href='https://goo.gl/maps/sBhZoX6aWFAzH65E9'
							target='_blank'
							rel='noopener noreferrer'
						>
							Directions
						</LocationLink>
					</LocationContent>
				</LocationContainer>
			</LocationSection>
		</PageWrapper>
	)
}
