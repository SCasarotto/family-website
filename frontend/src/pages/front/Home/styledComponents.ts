import styled from 'styled-components'
import Slider from 'react-slick'
import { TEButton } from 'react-tec'

export const HeaderWrapper = styled.div`
	position: relative;
	/* This is a hack to get ride of the bottom white space. */
	overflow: hidden;
	max-height: 100vh;
`
export const HeaderSlider = styled(Slider)`
	.slick-dots {
		bottom: 20px;

		li {
			button::before {
				color: #ffffff;
				font-size: 8px;
			}
			&.slick-active {
				button::before {
					color: #ffffff;
				}
			}
		}
	}
`
interface ImageData {
	'1800': any
	'1200': any
	'800': any
	center: number
}
export const HeaderSlide = styled.div<{ imageData: ImageData }>`
	height: 100vh;
	min-height: 400px;
	background-image: url(${(props) => props.imageData['1800']});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: ${(props) => props.imageData.center || 50}% 50%;

	@media only screen and (max-width: 1000px) {
		background-image: url(${(props) => props.imageData['1200']});
	}
	@media only screen and (max-width: 600px) {
		background-image: url(${(props) => props.imageData['800']});
	}
`
export const HeaderCopyWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);
	/* pointer-events: none; */
	padding: 0px 20px;
`
export const HeaderTitle = styled.h1`
	font-size: 78px;
	color: white;
	line-height: 1.2;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 10px;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	color: #ffffff;

	@media only screen and (max-width: 900px) {
		font-size: 50px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 44px;
	}
`
export const HeaderSubtitle = styled.h2`
	font-size: 28px;
	color: white;
	line-height: 1.25;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 10px;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	color: #ffffff;
	font-weight: 500;

	@media only screen and (max-width: 900px) {
		font-size: 22px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 20px;
		br {
			display: none;
		}
	}
`
export const CountDownWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 500px) {
		flex-wrap: wrap;
	}
`
export const CountDownColumn = styled.div`
	margin: 0px 15px;

	@media only screen and (max-width: 900px) {
		margin: 0px 10px;
	}
	@media only screen and (max-width: 500px) {
		margin: 10px 6px;
	}
`
export const CountDownValue = styled.span`
	display: block;
	width: 100%;
	margin-bottom: 15px;
	color: ${(props) => props.theme.white};
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 5px;
	border: 1px solid rgba(255, 255, 255, 0.75);
	padding: 15px 30px;
	font-size: 24px;
	font-weight: 500;
	text-align: center;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

	@media only screen and (max-width: 900px) {
		font-size: 20px;
		padding: 10px 25px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 18px;
		padding: 8px 20px;
		flex-wrap: wrap;
	}
`
export const CountDownLabel = styled.span`
	display: block;
	width: 100%;
	color: ${(props) => props.theme.white};
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

	@media only screen and (max-width: 900px) {
		font-size: 15px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 14px;
	}
`

export const COVIDButton = styled(TEButton)`
	max-width: 300px;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 5px;
	border: 1px solid rgba(255, 255, 255, 0.65);
	color: ${(props) => props.theme.white};
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	margin-top: 50px;
	padding: 15px 30px;
	line-height: 1.25;

	@media only screen and (max-width: 900px) {
		padding: 12px 25px;
		font-size: 22px;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
		max-width: 250px;
		margin-top: 40px;
	}
	@media only screen and (max-width: 500px) {
		margin-top: 30px;
		padding: 10px 20px;
		font-size: 20px;
	}
`
