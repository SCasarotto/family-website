import { Stripe, StripeElements } from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'
import { apiRequest } from 'helpers/apiHelper'
import { useTEPopupsFunctions } from 'react-tec'
import validate from 'validate.js'

interface Data {
	stripe: Stripe | null
	elements: StripeElements | null
	amount: string
	firstName: string
	lastName: string
	note: string
	popupFunctions: useTEPopupsFunctions
}
export const chargeCard = async (data: Data) => {
	const { stripe, elements, amount, firstName, lastName, note, popupFunctions } = data
	const { showNetworkActivity, hideNetworkActivity, showAlert } = popupFunctions
	try {
		const validatorConstraints: { [key: string]: any } = {
			firstName: {
				presence: {
					allowEmpty: false,
				},
			},
			lastName: {
				presence: {
					allowEmpty: false,
				},
			},
			amount: {
				presence: {
					allowEmpty: false,
				},
			},
		}
		const validationResponse = validate(data, validatorConstraints)
		if (validationResponse) {
			const valuesArray: any[][] = Object.values(validationResponse)
			const firstError: any[] = valuesArray[0]
			const firstErrorMessage: string = firstError[0]
			showAlert({
				title: 'Error',
				message: firstErrorMessage,
			})
			throw new Error(firstErrorMessage)
		}
		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			showAlert({ title: 'Loading Error', message: 'Please try again.' })
			throw new Error('Please try again.')
		}
		const card = elements.getElement(CardElement)
		if (!card) {
			//Show Some Error
			showAlert({ title: 'Card Error', message: 'Please try again.' })
			throw new Error('Please try again.')
		}
		showNetworkActivity('Submitting Donation...')
		const intentData = {
			amount: Number(amount),
			metadata: { 'First Name': firstName, 'Last Name': lastName, Message: note },
		}
		const intentResponse = await apiRequest<{ client_secret: string }>({
			method: 'post',
			path: 'payment_intent',
			data: intentData,
		})

		const result = await stripe.confirmCardPayment(intentResponse.data.client_secret, {
			payment_method: {
				card,
				// billing_details: {
				// 	name: 'Jenny Rosen',
				// },
			},
		})
		if (result.error) {
			// Show error to your customer (e.g., insufficient funds)
			console.log(result.error.message)
			hideNetworkActivity()
			showAlert({ title: 'Error', message: result.error.message })
			throw new Error(result.error.message)
		} else {
			hideNetworkActivity()
			// The payment has been processed!
			if (result?.paymentIntent?.status === 'succeeded') {
				showAlert({ title: 'Thank You', message: 'We really apprecaite your donation.' })
				return
			}
			showAlert({ title: 'Thank You', message: 'We really apprecaite your donation.' })
		}
	} catch (e) {
		hideNetworkActivity()
		console.log(e)
		throw new Error(e)
	}
}
