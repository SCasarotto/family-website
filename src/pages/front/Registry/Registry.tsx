import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	DonationSection,
	DonationContainer,
	DonationCopy,
	DonatinoStripeWrapper,
	GiftRegistrySection,
	GiftRegistryContainer,
	GiftRegistryTitle,
	GiftRegistryCopy,
	GiftRegistryLinkWrapper,
	GiftRegisteryLink,
	GiftRegisteryLogo,
} from './styledComponents'
import { PageWrapper } from 'components'
import { registry } from 'config/images'

export const Registry = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>We are so blessed</HeaderTitle>
				</HeaderContent>
			</Header>
			<DonationSection>
				<DonationContainer>
					<DonationCopy>
						We are so happy that you’ll be able to join us for our wedding. As many of
						you know, we live in a small and cozy apartment, and it is already filled
						with many things we need to make it a home. While the presence of your
						company is the only gift we could ever ask for, a Wishing Well and a gift
						registry has been set up here for those who have expressed an interest in
						celebrating the occasion. Contributions to our Wishing Well will go towards
						a honeymoon or our future home when we are ready to set roots!
					</DonationCopy>
					<DonatinoStripeWrapper>STRIPE STUFF GOES HERE</DonatinoStripeWrapper>
				</DonationContainer>
			</DonationSection>
			<GiftRegistrySection>
				<GiftRegistryContainer>
					<GiftRegistryTitle>Gift Registry</GiftRegistryTitle>
					<GiftRegistryCopy>
						Below are locations we have registered with.
					</GiftRegistryCopy>
					<GiftRegistryLinkWrapper>
						<GiftRegisteryLink href='https://www.crateandbarrel.com/gift-registry/courtney-tate-and-stuart-casarotto/r6106794'>
							<GiftRegisteryLogo
								src={registry.crateAndBarrel}
								alt='Crate and Barrel Wedding Registery'
							/>
						</GiftRegisteryLink>
						<GiftRegisteryLink href='https://www.amazon.com/wedding/registry/347Y1S7FUI6SD?ref=wr_search_page_result_1'>
							<GiftRegisteryLogo
								src={registry.amazon}
								alt='Amazon Wedding Registery'
							/>
						</GiftRegisteryLink>
					</GiftRegistryLinkWrapper>
				</GiftRegistryContainer>
			</GiftRegistrySection>
		</PageWrapper>
	)
}
