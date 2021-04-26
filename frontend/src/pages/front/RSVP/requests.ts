import validate from 'validate.js'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useTEPopupsFunctions } from 'react-tec'

interface RSVPData {
	name: string
	foodChoice: { value: string; label: string } | null
	comment: string
	toast: string
	vaccinated: string
	willingToTest: string
	popupFunctions: useTEPopupsFunctions
}
export const saveRSVP = async (data: RSVPData) => {
	const { name, foodChoice, comment, toast, vaccinated, willingToTest, popupFunctions } = data
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
		toast: {
			presence: {
				allowEmpty: false,
			},
		},
		vaccinated: {
			presence: {
				allowEmpty: false,
			},
		},
		willingToTest:
			vaccinated === 'No'
				? {
						presence: {
							allowEmpty: false,
						},
				  }
				: undefined,
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
		showNetworkActivity('Submitting RSVP...')
		await firebase.firestore().collection('WeddingRSVPs').add({
			dateCreated: Date.now(),
			name,
			foodChoice: foodChoice!.value,
			comment,
			toast,
			vaccinated,
			willingToTest,
			status: 0,
		})

		hideNetworkActivity()
		showAlert({
			title: 'Thank You!',
			message: 'Your RSVP has been submitted.',
		})
		return
	} catch (e) {
		console.log(e)
		showAlert({
			title: 'Error',
			message: 'Error submitting your RSVP.',
		})
		throw new Error(e)
	}
}

interface MessageData {
	name: string
	message?: string
	showMessage: string
	popupFunctions: useTEPopupsFunctions
}
export const saveMessage = async (data: MessageData) => {
	const { name, message, showMessage, popupFunctions } = data
	const { showNetworkActivity, hideNetworkActivity, showAlert } = popupFunctions

	const validatorConstraints: { [key: string]: any } = {
		name: {
			presence: {
				allowEmpty: false,
			},
		},
		message: {
			presence: {
				allowEmpty: false,
			},
		},
		showMessage: {
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
		showNetworkActivity('Submitting Message...')
		await firebase
			.firestore()
			.collection('WeddingMessages')
			.add({
				dateCreated: new Date().getTime(),
				createdBy: name,
				message,
				showMessage: showMessage === 'Displayed publicly on the website.',
			})

		hideNetworkActivity()
		showAlert({
			title: 'Thank You!',
			message: 'Your Message has been submitted.',
		})
		return
	} catch (e) {
		console.log(e)
		showAlert({
			title: 'Error',
			message: 'Error submitting your message.',
		})
		throw new Error(e)
	}
}
