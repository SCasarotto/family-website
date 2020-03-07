import validate from 'validate.js'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useTEPopupsFunctions } from 'react-tec'

interface Data {
	uid: string
	message: string
	showMessage: string
	popupFunctions: useTEPopupsFunctions
}
export const saveMessage = async (data: Data) => {
	const { uid, message, showMessage, popupFunctions } = data
	const { showNetworkActivity, hideNetworkActivity, showAlert } = popupFunctions

	const validatorConstraints: { [key: string]: any } = {
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
		showNetworkActivity('Saving Message...')
		await firebase
			.firestore()
			.collection('WeddingMessages')
			.doc(uid)
			.update({
				message,
				showMessage: showMessage === 'Displayed publicly on the website.',
			})

		hideNetworkActivity()
		showAlert({
			title: 'Success',
			message: 'Message saved',
		})
		return
	} catch (e) {
		console.log(e)
		showAlert({
			title: 'Error',
			message: 'Error saving message',
		})
		throw new Error(e)
	}
}
