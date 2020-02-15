import styled from 'styled-components'

import { pageHeaders } from 'config/images'
import { HeartIcon } from 'assets/SVGs'

export const Header = styled.div`
	height: 60vh;
	min-height: 400px;
	background-image: url(${pageHeaders.eventDetails});
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

export const LocationSection = styled.div`
	padding-top: 80px;
	padding-bottom: 50px;
`

export const LocationContainer = styled.div`
	max-width: 1200px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const LocationLogoWrapper = styled.div`
	width: 50%;
	padding-right: 20px;
`
export const LocationLogo = styled.img`
	display: block;
	width: 100%;
	margin: 0px auto;
	border-radius: 10px;
`
export const LocationContent = styled.div`
	width: 50%;
	padding-left: 20px;
`
export const LocationTitle = styled.h2`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 36px;
	line-height: 1.2;
	color: ${(props) => props.theme.primary};
`
export const LocationCopy = styled.p`
	font-size: 20px;
	line-height: 1.5;
	margin-top: 0px;
	margin-bottom: 15px;
	color: ${(props) => props.theme.darkerGray};
`
export const LocationLink = styled.a`
	display: inline-block;
	padding: 13px 20px 10px;
	font-size: 20px;
	color: ${(props) => props.theme.primary};
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 5px;
	text-decoration: none;
	margin-right: 15px;
	cursor: pointer;
	transition: color 0.25s ease-in, background-color 0.25s ease-in;

	:hover {
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primary};
	}
`

export const TimelineSection = styled.div`
	padding-top: 50px;
	padding-bottom: 80px;
`
export const TimelineContainer = styled.div`
	max-width: 1000px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
	position: relative;
`
export const TimelineLine = styled.div`
	position: absolute;
	left: calc(50% - 2px);
	height: 100%;
	width: 4px;
	background-color: ${(props) => props.theme.primary};
	z-index: 1;
`
export const TimelineRow = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding-top: 30px;
	padding-bottom: 50px;
`
export const TimelineLeftColumn = styled.div`
	flex: 1;
	padding-right: 20px;
	padding-top: 20px;
`
export const TimelineCenterColumn = styled.div`
	width: 40px;
	flex-shrink: 0;
`
export const TimelineRightColumn = styled.div`
	flex: 1;
	padding-left: 20px;
	padding-top: 20px;
`
export const TimelineTimeTitle = styled.h3`
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: 36px;
	color: ${(props) => props.theme.primary};
`
export const TimelineDot = styled.div`
	border-radius: 50%;
	width: 100%;
	background-color: ${(props) => props.theme.primary};
	padding: 10px;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const TimelineDotIcon = styled(HeartIcon)`
	width: 100%;
	fill: ${(props) => props.theme.white};
	z-index: 5;
`
export const TimelineRowTitle = styled.h3`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 42px;
	font-family: 'Great Vibes', cursive;
	color: ${(props) => props.theme.primary};
`
export const TimelineRowCopy = styled.p`
	margin-top: 0px;
	margin-bottom: 10px;
	line-height: 1.5;
	font-size: 20px;
	color: ${(props) => props.theme.darkerGray};
`
