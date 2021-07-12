import { PageWrapper } from 'components'
import { homePageSlider } from 'config/images'

import {
	HeaderWrapper,
	HeaderSlider,
	HeaderSlide,
	HeaderCopyWrapper,
	HeaderTitle,
	HeaderSubtitle,
} from './styledComponents'

export const Home = () => {
	return (
		<PageWrapper footer={false}>
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
					{homePageSlider.map((imageData, index) => (
						<HeaderSlide imageData={imageData} key={index} />
					))}
				</HeaderSlider>
				<HeaderCopyWrapper>
					<HeaderTitle>We Got Married!</HeaderTitle>
					<HeaderSubtitle>
						Thank you to everyone who was able to join us on our big day. Check back
						soon for photos and videos from the celebration.
					</HeaderSubtitle>
				</HeaderCopyWrapper>
			</HeaderWrapper>
		</PageWrapper>
	)
}
