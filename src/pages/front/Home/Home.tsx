import React from 'react'

import { PageWrapper } from 'components'
import { processedImages } from 'config/images'

import {
	HeaderWrapper,
	HeaderSlider,
	HeaderSlide,
	HeaderCopyWrapper,
	HeaderTitle,
	HeaderSubtitle,
} from './styledComponents'

const headerSliderImages = [
	processedImages[53 - 1].full,
	processedImages[97 - 1].full,
	processedImages[80 - 1].full,
	processedImages[134 - 1].full,
	processedImages[26 - 1].full,
	processedImages[24 - 1].full,
	processedImages[33 - 1].full,
]

export const Home = () => {
	return (
		<PageWrapper>
			<HeaderWrapper>
				<HeaderSlider
					dots={true}
					infinite={true}
					speed={2500}
					autoplaySpeed={5000}
					slidesToShow={1}
					slidesToScroll={1}
					arrows={false}
					pauseOnHover={false}
					autoplay
					fade
				>
					{headerSliderImages.map((image, index) => (
						<HeaderSlide image={image} key={index} />
					))}
				</HeaderSlider>
				<HeaderCopyWrapper>
					<HeaderTitle>We're Engaged!</HeaderTitle>
					<HeaderSubtitle>Tying the knot July 18th 2020.</HeaderSubtitle>
				</HeaderCopyWrapper>
			</HeaderWrapper>
		</PageWrapper>
	)
}
