import firebase from 'firebase/app'
import 'firebase/firestore'
import { useTEPopupsFunctions } from 'react-tec'

interface Data {
	uid: string
	popupFunctions: useTEPopupsFunctions
}
export const confirmDeleteMessage = (data: Data) => {
	const { uid, popupFunctions } = data
	const {
		showConfirm,
		hideConfirm,
		showNetworkActivity,
		hideNetworkActivity,
		showAlert,
	} = popupFunctions
	const deleteMessage = async () => {
		hideConfirm()
		showNetworkActivity('Deleting Message...')
		await firebase
			.firestore()
			.collection('WeddingMessages')
			.doc(uid)
			.delete()
		hideNetworkActivity()
		showAlert({
			title: 'Success',
			message: 'Successfully deleted message.',
		})
	}
	showConfirm({
		title: 'Delete Message',
		message: `Are you sure you want delete this message?`,
		leftTitle: 'Cancel',
		rightOnClick: deleteMessage,
		rightTitle: 'Delete',
	})
}
