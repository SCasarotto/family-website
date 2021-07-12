import styled from 'styled-components'
import { pageHeaders } from 'config/images'

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

	@media only screen and (max-width: 600px) {
		padding-top: 50px;
	}
`

export const LocationContainer = styled.div`
	max-width: 1200px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 600px) {
		flex-wrap: wrap;
	}
`
export const LocationLogoWrapper = styled.div`
	width: 50%;
	padding-right: 20px;

	@media only screen and (max-width: 600px) {
		width: 100%;
		padding-right: 0px;
	}
`
export const LocationLogo = styled.img`
	display: block;
	width: 100%;
	margin: 0px auto;
	border-radius: 10px;

	@media only screen and (max-width: 600px) {
		margin-bottom: 30px;
	}
`
export const LocationContent = styled.div`
	width: 50%;
	padding-left: 20px;

	@media only screen and (max-width: 600px) {
		width: 100%;
		padding-left: 0px;
	}
	@media only screen and (max-width: 600px) {
		text-align: center;
	}
`
export const LocationTitle = styled.h2`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 36px;
	line-height: 1.2;
	color: ${(props) => props.theme.primary};

	@media only screen and (max-width: 1000px) {
		font-size: 32px;
	}
	@media only screen and (max-width: 800px) {
		font-size: 28px;
	}
	@media only screen and (max-width: 600px) {
		text-align: center;
		font-size: 32px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 26px;
	}
`
export const LocationCopy = styled.p`
	font-size: 20px;
	line-height: 1.5;
	margin-top: 0px;
	margin-bottom: 15px;
	color: ${(props) => props.theme.darkerGray};

	@media only screen and (max-width: 1000px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 800px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 600px) {
		max-width: 450px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
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

	:hover,
	:active {
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primary};
	}

	@media only screen and (max-width: 1000px) {
		font-size: 18px;
		padding: 10px 16px 8px;
	}
	@media only screen and (max-width: 800px) {
		font-size: 16px;
		padding: 8px 12px 6px;
	}
	@media only screen and (max-width: 600px) {
		margin-bottom: 15px;
		padding: 10px 16px 8px;
	}
	@media only screen and (max-width: 450px) {
		margin-bottom: 15px;
		padding: 8px 12px 6px;
		font-size: 14px;
	}
`

export const TimelineSection = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
`
export const TimelineContainer = styled.div`
	max-width: 900px;
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

	@media only screen and (max-width: 450px) {
		display: none;
	}
`
export const TimelineRow = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding-top: 30px;
	padding-bottom: 50px;

	@media only screen and (max-width: 800px) {
		padding-bottom: 40px;
	}
	@media only screen and (max-width: 600px) {
		padding-bottom: 30px;
	}
	@media only screen and (max-width: 450px) {
		flex-wrap: wrap;
		padding-bottom: 20px;
	}
`
export const TimelineLeftColumn = styled.div`
	padding-right: 20px;
	padding-top: 20px;
	width: 100%;

	@media only screen and (max-width: 450px) {
		padding-right: 0px;
		padding-top: 0px;
	}
`
export const TimelineCenterColumn = styled.div`
	width: 40px;
	flex-shrink: 0;

	@media only screen and (max-width: 450px) {
		display: none;
	}
`
export const TimelineRightColumn = styled.div`
	padding-left: 20px;
	padding-top: 20px;
	width: 100%;

	@media only screen and (max-width: 450px) {
		padding-left: 0px;
		padding-top: 0px;
	}
`
export const TimelineTimeTitle = styled.h3<{ rightAlign?: boolean; mobile?: boolean }>`
	margin-top: 0px;
	margin-bottom: 0px;
	font-size: 36px;
	color: ${(props) => props.theme.primary};
	text-align: ${(props) => (props.rightAlign ? 'right' : 'left')};

	display: ${(props) => (props.mobile ? 'none' : 'block')};

	@media only screen and (max-width: 800px) {
		font-size: 32px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 26px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 20px;
		text-align: left;
		display: ${(props) => (props.mobile ? 'block' : 'none')};
		margin-bottom: 10px;
	}
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
export const TimelineDotIconWrapper = styled.div`
	font-size: 18px;
	color: ${(props) => props.theme.white};
	z-index: 5;

	svg {
		display: block;
	}
`
export const TimelineRowTitle = styled.h3`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 42px;
	font-family: 'Great Vibes', cursive;
	color: ${(props) => props.theme.primary};

	@media only screen and (max-width: 800px) {
		font-size: 38px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 32px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 30px;
	}
`
export const TimelineRowCopy = styled.p`
	margin-top: 0px;
	margin-bottom: 10px;
	line-height: 1.5;
	font-size: 20px;
	color: ${(props) => props.theme.darkerGray};

	@media only screen and (max-width: 800px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
`
