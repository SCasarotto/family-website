import * as functions from 'firebase-functions'
import Stripe from 'stripe'
import validate from 'validate.js'
import cors from 'cors'

cors({ origin: true })
const stripeToken = functions.config().stripe.token
const stripe = new Stripe(stripeToken, {
	apiVersion: '2020-03-02',
	typescript: true,
	protocol: 'https',
})
const currency = functions.config().stripe.currency || 'USD'

interface Data {
	amount?: number
	metadata?: { [key: string]: any }
}
export const createPaymentIntent = async (req, res) => {
	try {
		const { amount, metadata = {} }: Data = req.body
		// console.log(req.body)
		const validatorConstraints: { [key: string]: any } = {
			amount: {
				presence: {
					allowEmpty: false,
				},
				numericality: {
					noStrings: true,
					greaterThanOrEqualTo: 0.5,
					lessThanOrEqualTo: 999999.99,
				},
			},
		}
		const validationResponse = validate({ amount }, validatorConstraints)
		if (validationResponse) {
			const valuesArray: any[][] = Object.values(validationResponse)
			const firstError: any[] = valuesArray[0]
			const firstErrorMessage: string = firstError[0]
			const e = new Error(firstErrorMessage)
			console.error(e)
			res.status(400)
			return res.send(e)
		}
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount! * 100,
			currency,
			description:
				'Gift to Stuart and Courtney wedding. We are very appreciative! Thank you!!',
			metadata,
		})

		res.send({ client_secret: paymentIntent.client_secret })
	} catch (e) {
		console.error(e)
		res.status(500)
		return res.send(e)
	}
}
