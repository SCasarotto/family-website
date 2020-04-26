import React, { useContext, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import { ThemeContext } from 'styled-components'
import { TEButton, TEInputRow, useTEPopups } from 'react-tec'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	DonationSection,
	DonationContainer,
	DonationCopy,
	DonationFormWrapper,
	DonationForm,
	DonationTitle,
	DonationStripeWrapper,
	TextareaRow,
	GiftRegistrySection,
	GiftRegistryContainer,
	GiftRegistryTitle,
	GiftRegistryCopy,
	GiftRegistryLinkWrapper,
	GiftRegisteryLink,
	GiftRegisteryLogo,
} from './styledComponents'
import { PageWrapper } from 'components'
import { registry } from 'config/images'
import { settings } from 'config/settings'
import { chargeCard } from './request'

const stripePromise = loadStripe(settings.STRIPE_API_KEY)

const CheckoutForm = () => {
	const stripe = useStripe()
	const elements = useElements()
	const theme = useContext(ThemeContext)
	const popupFunctions = useTEPopups()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [note, setNote] = useState('')
	const [amount, setAmount] = useState('')
	const [elementKey, setElementKey] = useState(new Date().getTime())

	const CARD_OPTIONS = {
		iconStyle: 'solid' as 'solid', //hacky as shit
		style: {
			base: {
				iconColor: theme.primary,
				color: theme.primary,
				fontWeight: '500',
				fontFamily:
					"'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
				fontSize: '16px',
				fontSmoothing: 'antialiased',
				':-webkit-autofill': { color: theme.primary },
				'::placeholder': { color: theme.gray },
			},
			invalid: {
				iconColor: '#red',
				color: '#red',
			},
		},
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const data = { stripe, elements, amount, firstName, lastName, note, popupFunctions }
			await chargeCard(data)
			setAmount('')
			setFirstName('')
			setLastName('')
			setNote('')
			setElementKey(new Date().getTime())
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<DonationForm onSubmit={handleSubmit}>
			<DonationTitle>Wishing Well</DonationTitle>
			<TEInputRow
				labelForKey='firstName'
				title='First Name'
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				rowSize='half'
				required
			/>
			<TEInputRow
				labelForKey='lastName'
				title='Last Name'
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				rowSize='half'
				last
				required
			/>
			<TextareaRow
				labelForKey='note'
				title='Leave Us A Message'
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<TEInputRow
				type='number'
				labelForKey='amount'
				title='Donation Amount'
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				min='0'
				step='0.01'
				required
			/>
			<DonationStripeWrapper>
				<CardElement key={elementKey} options={CARD_OPTIONS} />
			</DonationStripeWrapper>
			<TEButton type='submit' disabled={!stripe}>
				Submit
			</TEButton>
		</DonationForm>
	)
}

export const Registry = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>We are so blessed</HeaderTitle>
				</HeaderContent>
			</Header>
			<DonationSection>
				<DonationContainer>
					<DonationCopy>
						What we are looking forward to most is celebrating this special time with
						friends and family, and the gift of your company is all we need! However, we
						know some of you (you know who you are!) will insist on getting us
						something, even if we say not to. So, we created our registry consisting of
						a Wishing Well and Group Gifts so people may contribute what they feel
						comfortable sharing at this time if they wish to do so.
					</DonationCopy>
					<DonationCopy>
						Again, we recognize that this year has been difficult, and we do not want to
						put anyone in any financial hardship out of politeness. We are already so
						blessed to have so many amazing people in our life and want nothing more
						than to share our special day with you!
					</DonationCopy>
					<DonationFormWrapper>
						<Elements stripe={stripePromise}>
							<CheckoutForm />
						</Elements>
					</DonationFormWrapper>
				</DonationContainer>
			</DonationSection>
			<GiftRegistrySection>
				<GiftRegistryContainer>
					<GiftRegistryTitle>Gift Registry</GiftRegistryTitle>
					<GiftRegistryCopy>
						Below are locations we have registered with.
					</GiftRegistryCopy>
					<GiftRegistryLinkWrapper>
						<GiftRegisteryLink href='https://www.crateandbarrel.com/gift-registry/courtney-tate-and-stuart-casarotto/r6106794'>
							<GiftRegisteryLogo
								src={registry.crateAndBarrel}
								alt='Crate and Barrel Wedding Registery'
							/>
						</GiftRegisteryLink>
						<GiftRegisteryLink href='https://www.amazon.com/wedding/registry/347Y1S7FUI6SD?ref=wr_search_page_result_1'>
							<GiftRegisteryLogo
								src={registry.amazon}
								alt='Amazon Wedding Registery'
							/>
						</GiftRegisteryLink>
					</GiftRegistryLinkWrapper>
				</GiftRegistryContainer>
			</GiftRegistrySection>
		</PageWrapper>
	)
}
