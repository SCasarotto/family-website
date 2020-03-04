import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Message } from 'interfaces'
import { collectionToDataArray } from 'helpers/firebaseHelper'

export const useMessages = () => {
	const [messageArray, setMessageArray] = useState<Message[]>([])
	const [messagesLoaded, setMessagesLoaded] = useState(false)

	useEffect(() => {
		const messagesWatcher = firebase
			.firestore()
			.collection('WeddingMessages')
			.onSnapshot(
				(snapshot) => {
					setMessageArray(collectionToDataArray(snapshot))
					setMessagesLoaded(true)
				},
				(e) => {
					console.log(e)
					setMessageArray([])
					setMessagesLoaded(false)
				},
			)

		return () => {
			messagesWatcher()
			setMessageArray([])
			setMessagesLoaded(false)
		}
	}, [])

	return { messageArray, messagesLoaded }
}
