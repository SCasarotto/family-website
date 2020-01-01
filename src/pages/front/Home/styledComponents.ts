import styled from 'styled-components'
import Slider from 'react-slick'

export const HeaderWrapper = styled.div`
	position: relative;
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
export const HeaderSlide = styled.div<{ image: string }>`
	height: 100vh;
	min-height: 400px;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`
export const HeaderCopyWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
`
export const HeaderTitle = styled.h1`
	font-size: 66px;
	color: white;
	line-height: 1.2;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	color: #ffffff;
`
export const HeaderSubtitle = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 1.5;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	color: #ffffff;
	text-align: center;
`
