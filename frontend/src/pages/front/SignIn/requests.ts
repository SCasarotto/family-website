import validate from 'validate.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { docToDataObject } from 'helpers'
import { useTEPopupsFunctions } from 'react-tec'
import { RouteComponentProps } from 'react-router'

interface Data {
	email: string
	password: string
	history: RouteComponentProps['history']
	popupFunctions: useTEPopupsFunctions
}
export const signInUser = async (data: Data) => {
	const { email, password, history, popupFunctions } = data
	const { showAlert, showNetworkActivity, hideNetworkActivity } = popupFunctions

	//Validate Data
	const validatorConstraints: { [key: string]: any } = {
		email: {
			presence: {
				allowEmpty: false,
			},
			email: true,
		},
		password: {
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
		return
	}

	try {
		showNetworkActivity('Signing In...')
		const firebaseAuth = firebase.auth()
		await firebaseAuth.signInWithEmailAndPassword(email, password)
		//This could be better
		const { uid } = firebaseAuth.currentUser!
		const userModelSnapshot = await firebase
			.firestore()
			.collection('Users')
			.doc(uid)
			.get()
		const userModel = docToDataObject(userModelSnapshot)
		if (userModel.admin) {
			hideNetworkActivity()
			history.push('/admin/rsvps')
			return
		} else {
			firebase.auth().signOut()
			hideNetworkActivity()
			showAlert({
				title: 'Error Signing In',
				message: 'This account is missing user permissions.',
			})
			return
		}
	} catch (e) {
		console.log(e)
		hideNetworkActivity()
		showAlert({
			title: 'Error',
			message: 'Error Signing In',
		})
		return
	}
}
