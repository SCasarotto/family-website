import styled from 'styled-components'

import { pageHeaders } from 'config/images'
import { TETextareaRow } from 'react-tec'

export const Header = styled.div`
	height: 60vh;
	min-height: 400px;
	background-image: url(${pageHeaders.registry});
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

export const DonationSection = styled.div`
	padding-top: 50px;
	padding-bottom: 30px;
`
export const DonationContainer = styled.div`
	max-width: 900px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
`
export const DonationCopy = styled.p`
	margin-top: 0px;
	margin-bottom: 10px;
	line-height: 1.5;
	font-size: 20px;
	color: ${(props) => props.theme.darkerGray};
	text-align: center;
	margin-bottom: 20px;

	@media only screen and (max-width: 800px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
`
export const DonationFormWrapper = styled.div`
	text-align: center;
	margin-top: 50px;

	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
`
export const DonationForm = styled.form``
export const DonationTitle = styled.h2`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 42px;
	line-height: 1.2;
	color: ${(props) => props.theme.primary};
	text-align: center;

	@media only screen and (max-width: 1000px) {
		font-size: 38px;
	}
	@media only screen and (max-width: 800px) {
		font-size: 36px;
	}
	@media only screen and (max-width: 700px) {
		text-align: center;
		font-size: 32px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 26px;
	}
`
export const DonationStripeWrapper = styled.div`
	padding: 8px 10px;
	border: 1px solid ${(props) => props.theme.lightGray};
	border-radius: 5px;
	margin-bottom: 10px;
	transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;

	&:hover {
		border-color: ${(props) => props.theme.primary};
		box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
	}
`
export const TextareaRow = styled(TETextareaRow)`
	textarea {
		min-height: 90px;
	}
`

export const GiftRegistrySection = styled.div`
	padding-top: 30px;
	padding-bottom: 50px;
`
export const GiftRegistryContainer = styled.div`
	max-width: 900px;
	margin: 0px auto;
	padding-left: 30px;
	padding-right: 30px;
`
export const GiftRegistryTitle = styled.h2`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 42px;
	line-height: 1.2;
	color: ${(props) => props.theme.primary};
	text-align: center;

	@media only screen and (max-width: 1000px) {
		font-size: 38px;
	}
	@media only screen and (max-width: 800px) {
		font-size: 36px;
	}
	@media only screen and (max-width: 700px) {
		text-align: center;
		font-size: 32px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 26px;
	}
`
export const GiftRegistryCopy = styled.p`
	margin-top: 0px;
	margin-bottom: 10px;
	line-height: 1.5;
	font-size: 20px;
	color: ${(props) => props.theme.darkerGray};
	text-align: center;

	@media only screen and (max-width: 800px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
`
export const GiftRegistryLinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 600px) {
		flex-wrap: wrap;
	}
`
export const GiftRegisteryLink = styled.a`
	display: block;
	margin: 20px;
	max-width: 360px;
	transition: opacity 0.2s ease-in;
	cursor: pointer;
	border: 1px solid ${(props) => props.theme.lightGray};
	padding: 20px 30px;
	border-radius: 10px;
	min-width: 200px;

	&:hover {
		opacity: 0.5;
	}

	@media only screen and (max-width: 800px) {
		margin: 15px;
		padding: 15px 20px;
	}
	@media only screen and (max-width: 600px) {
		margin: 10px;
		padding: 15px 15px;
	}
`
export const GiftRegisteryLogo = styled.img`
	display: block;
	width: 100%;
`
