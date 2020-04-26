import firebase from 'firebase/app'
import 'firebase/firestore'
import { useTEPopupsFunctions } from 'react-tec'

interface Data {
	uid: string
	popupFunctions: useTEPopupsFunctions
}
export const confirmDeleteRSVP = (data: Data) => {
	const { uid, popupFunctions } = data
	const {
		showConfirm,
		hideConfirm,
		showNetworkActivity,
		hideNetworkActivity,
		showAlert,
	} = popupFunctions
	const deleteRSVP = async () => {
		hideConfirm()
		showNetworkActivity('Deleting RSVP...')
		await firebase
			.firestore()
			.collection('WeddingRSVPs')
			.doc(uid)
			.delete()
		hideNetworkActivity()
		showAlert({
			title: 'Success',
			message: 'Successfully deleted RSVP.',
		})
	}
	showConfirm({
		title: 'Delete RSVP',
		message: `Are you sure you want delete this RSVP?`,
		leftTitle: 'Cancel',
		rightOnClick: deleteRSVP,
		rightTitle: 'Delete',
	})
}
