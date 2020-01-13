import styled from 'styled-components'
import { TESegmentedGroup } from 'react-tec'

import { pageHeaders } from 'config/images'

export const Header = styled.div`
	height: 60vh;
	min-height: 400px;
	background-image: url(${pageHeaders.ourStory});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const HeaderContent = styled.div``
export const HeaderTitle = styled.h1`
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: 5vw;
	color: #ffffff;
	line-height: 1.1;
	text-align: center;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	max-width: 60vw;

	@media only screen and (max-width: 800px) {
		font-size: 10vw;
	}
	@media only screen and (max-width: 500px) {
		font-size: 44px;
	}
`
export const GallerySection = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
`
export const GalleryContainer = styled.div`
	max-width: 1400px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
`
export const GalleryHeader = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const GalleryTabs = styled(TESegmentedGroup)`
	.TESegmentedGroupSegmentedContainer {
		display: flex;
		justify-content: center;
		align-items: center;

		.TESegmentedGroupSegmentedLabelWrapper label {
			font-size: 20px;
			border-radius: 5px;
			margin-left: 8px;
			margin-right: 8px;
			padding: 13px 15px 10px;
			text-align: center;
		}
	}
`
export const CopyWrapper = styled.div`
	max-width: 1200px;
	margin: 0px auto;
`
