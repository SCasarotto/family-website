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
	TimelineSection,
	TimelineContainer,
	TimelineLine,
	TimelineRow,
	TimelineLeftColumn,
	TimelineCenterColumn,
	TimelineRightColumn,
	TimelineTimeTitle,
	TimelineDot,
	TimelineDotIconWrapper,
	TimelineRowTitle,
	TimelineRowCopy,
	// HotelSection,
	// HotelContent,
	// HotelColumnWrapper,
	// HotelLeftColumn,
	// HotelRightColumn,
	// HotelTitle,
	// HotelCopy,
	// HotelOl,
	// HotelLi,
	// HotelLiLink,
	// HotelOtherOptionsWrapper,
	// HotelSubtitle,
	// HotelOptionsList,
	// HotelOptionsItem,
} from './styledComponents'
import { PageWrapper } from 'components'
import { eventDetails } from 'config/images'
import { FaHeart, FaHotel, FaBus, FaCocktail, FaMusic } from 'react-icons/fa'

const timelineData = [
	{
		time: 'TBD',
		title: 'Hotel Check-In',
		copy: 'Freshen up and get ready for the big day.',
		Icon: FaHotel,
	},
	{
		time: 'TBD',
		title: 'Shuttle Pick-Up',
		copy: "Hop a bus ride so you don't have to drive.",
		Icon: FaBus,
	},
	{
		time: 'TBD',
		title: 'Ceremony',
		copy: 'Make yourselves comfortable and join us for our special moment.',
		Icon: FaHeart,
	},
	{
		time: 'TBD',
		title: 'Cocktail Hour',
		copy: 'Kick off the celebration and grab a drink.',
		Icon: FaCocktail,
	},
	{
		time: 'TBD',
		title: 'Reception',
		copy: 'Join us for dinner, drinks, speeches, and dancing.',
		Icon: FaMusic,
	},
	{
		time: 'TBD',
		title: 'Shuttle Return',
		copy: 'Easy way to make it back at the end of the night.',
		Icon: FaBus,
	},
]

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
							Please join us {/*on Saturday, July 18th 2020*/} at DC Estate Winery
							8877 State Line Rd, South Beloit, IL 61080.
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
			<TimelineSection>
				<TimelineContainer>
					<TimelineLine />
					{timelineData.map((row, index) => {
						const { time, title, copy, Icon } = row
						return (
							<TimelineRow key={index}>
								<TimelineLeftColumn>
									{index % 2 === 0 && (
										<TimelineTimeTitle rightAlign>{time}</TimelineTimeTitle>
									)}
									{index % 2 === 1 && (
										<>
											<TimelineTimeTitle mobile>{time}</TimelineTimeTitle>
											<TimelineRowTitle>{title}</TimelineRowTitle>
											<TimelineRowCopy>{copy}</TimelineRowCopy>
										</>
									)}
								</TimelineLeftColumn>
								<TimelineCenterColumn>
									<TimelineDot>
										<TimelineDotIconWrapper>
											<Icon />
										</TimelineDotIconWrapper>
									</TimelineDot>
								</TimelineCenterColumn>
								<TimelineRightColumn>
									{index % 2 === 1 && (
										<TimelineTimeTitle>{time}</TimelineTimeTitle>
									)}
									{index % 2 === 0 && (
										<>
											<TimelineTimeTitle mobile>{time}</TimelineTimeTitle>
											<TimelineRowTitle>{title}</TimelineRowTitle>
											<TimelineRowCopy>{copy}</TimelineRowCopy>
										</>
									)}
								</TimelineRightColumn>
							</TimelineRow>
						)
					})}
				</TimelineContainer>
			</TimelineSection>
			{/* <HotelSection>
				<HotelContent>
					<HotelColumnWrapper>
						<HotelLeftColumn>
							<iframe
								src='https://www.google.com/maps/d/u/0/embed?mid=19rBn3XhI4Nf9dZg2ziMWAJVNbQv-wUCk'
								width='100%'
								height='500'
								title='Wedding Hotels'
								style={{ border: 'none', borderRadius: '10px' }}
							></iframe>
						</HotelLeftColumn>
						<HotelRightColumn>
							<HotelTitle>Hotel Information</HotelTitle>
							<HotelCopy>
								We have secured a room block at the Hampton Inn Beloit (Hilton
								properties) for both Friday, July 17th and Saturday, July 18th. For
								online reservation:
							</HotelCopy>
							<HotelOl>
								<HotelLi>
									To make an online reservation, please go to{' '}
									<HotelLiLink href='https://www.hilton.com/'>
										www.hilton.com
									</HotelLiLink>
								</HotelLi>
								<HotelLi>Enter "Beloit, WI, USA" in the destination input.</HotelLi>
								<HotelLi>Enter in the date of check-in (July 17th or 18th)</HotelLi>
								<HotelLi>
									Click "Special Rates" and enter the group code "TCW"{' '}
								</HotelLi>
								<HotelLi>
									Look for hotel selection with "Tate-Casarotto Wedding" at the
									Hampton Inn Beloit
								</HotelLi>
							</HotelOl>
							<HotelCopy>
								The agreed upon rate for the room block is $159.00, so please check
								that you have the correct price. If you call the Hampton Inn
								directly, please call{' '}
								<HotelLiLink href='tel:+16083626000'>(608) 362-6000</HotelLiLink>{' '}
								and dial "0" to ensure you speak with someone at the front desk.
								When making your phone reservation, make sure to state the group
								code of "TCW" in order to receive the room block rates. The Cut-off
								date for joining the room block is 6/17/2020, so please book and
								plan accordingly. Note: There is a 48 hour cancellation policy. If
								the room block fills or if you wish to stay elsewhere, there are
								many hotel options to choose from close by.
							</HotelCopy>
						</HotelRightColumn>
					</HotelColumnWrapper>
					<HotelOtherOptionsWrapper>
						<HotelSubtitle>Other Hotel Options</HotelSubtitle>
						<HotelOptionsList>
							<HotelOptionsItem>
								Fairfield Inn & Suites by Marriott Beloit
								<br />
								2784 Milwaukee Rd, Beloit, WI 53511
								<br />
								<HotelLiLink href='tel:+16083652200'>(608) 365-2200</HotelLiLink>
							</HotelOptionsItem>
							<HotelOptionsItem>
								Quality Inn
								<br />
								2786 Milwaukee Rd, Beloit, WI 53511
								<br />
								<HotelLiLink href='tel:+16083622666'>(608) 362-2666</HotelLiLink>
							</HotelOptionsItem>
							<HotelOptionsItem>
								Super 8 by Wyndham Beloit
								<br />
								2790 Milwaukee Rd, Beloit, WI 53511
								<br />
								<HotelLiLink href='tel:+16083656000'>(608) 365-6000</HotelLiLink>
							</HotelOptionsItem>
							<HotelOptionsItem>
								Baymont by Wyndham Beloit
								<br />
								2900 Ford St, Beloit, WI 53511
								<br />
								<HotelLiLink href='tel:+16083658680'>(608) 365-8680</HotelLiLink>
							</HotelOptionsItem>
							<HotelOptionsItem>
								Holiday Inn Express & Suites Beloit
								<br />
								3022 Ford St, Beloit, WI 53511
								<br />
								<HotelLiLink href='tel:+16085194040'>(608) 519-4040</HotelLiLink>
							</HotelOptionsItem>
						</HotelOptionsList>
					</HotelOtherOptionsWrapper>
				</HotelContent>
			</HotelSection> */}
		</PageWrapper>
	)
}
