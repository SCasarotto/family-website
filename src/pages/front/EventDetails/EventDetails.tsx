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
	HotelSection,
	HotelContent,
	HotelLeftColumn,
	HotelRightColumn,
	HotelTitle,
	HotelCopy,
	HotelLink,
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
		copy: 'Make yourselves comfortable and join us for a special moment.',
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
		copy: 'Join us for dinner, drinks, speaches, and dacing.',
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
							Please join us on Saturday, July 18th 2020 at DC Estate Winery 8877
							State Line Rd, South Beloit, IL 61080.
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
			<HotelSection>
				<HotelContent>
					<HotelLeftColumn>
						<iframe
							src='https://www.google.com/maps/d/u/0/embed?mid=19rBn3XhI4Nf9dZg2ziMWAJVNbQv-wUCk'
							width='100%'
							height='480'
							title='Wedding Hotels'
						></iframe>
					</HotelLeftColumn>
					<HotelRightColumn>
						<HotelTitle>Hotel Information</HotelTitle>
						<HotelCopy>
							We have secured a room block at the Hampton Inn Beloit for both Friday
							July 17th and Saturday July 18th. ______PUT INSTRUCTIONS HERE!!______ If
							the room block fills up or you wish to stay elsewhere, there are many
							hotels options to pick from close by.
						</HotelCopy>
						<HotelLink
							href='https://www.hilton.com/en/hotels/jvlcrhx-hampton-beloit/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Hotel Website
						</HotelLink>
					</HotelRightColumn>
				</HotelContent>
			</HotelSection>
		</PageWrapper>
	)
}
