import validate from 'validate.js'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useTEPopupsFunctions } from 'react-tec'

interface Data {
	uid: string
	name: string
	foodChoice?: string
	comment: string
	status?: number
	popupFunctions: useTEPopupsFunctions
}
export const saveRSVP = async (data: Data) => {
	const { uid, name, foodChoice, comment, status, popupFunctions } = data
	const { showNetworkActivity, hideNetworkActivity, showAlert } = popupFunctions

	const validatorConstraints: { [key: string]: any } = {
		name: {
			presence: {
				allowEmpty: false,
			},
		},
		foodChoice: {
			presence: {
				allowEmpty: false,
			},
		},
		status: {
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

	try {
		showNetworkActivity('Saving RSVP...')
		await firebase
			.firestore()
			.collection('WeddingRSVPs')
			.doc(uid)
			.update({ name, foodChoice, comment, status })

		hideNetworkActivity()
		showAlert({
			title: 'Success',
			message: 'RSVP saved',
		})
		return
	} catch (e) {
		console.log(e)
		showAlert({
			title: 'Error',
			message: 'Error saving RSVP',
		})
		throw new Error(e)
	}
}
