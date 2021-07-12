import styled from 'styled-components'
import Slider from 'react-slick'

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
	font-size: 26px;
	color: white;
	line-height: 1.25;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 10px;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	color: #ffffff;
	font-weight: 500;
	max-width: 550px;
	margin-left: auto;
	margin-right: auto;

	@media only screen and (max-width: 900px) {
		font-size: 22px;
		max-width: 450px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 20px;
		max-width: none;
	}
`
