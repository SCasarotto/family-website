import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect } from 'react'
import { RSVP } from 'interfaces'
import { collectionToDataArray } from 'helpers/firebaseHelper'

export const useRSVPs = () => {
	const [rsvpArray, setRSVPArray] = useState<RSVP[]>([])
	const [rsvpLoaded, setRSVPsLoaded] = useState(false)

	useEffect(() => {
		const rsvpsWatcher = firebase
			.firestore()
			.collection('WeddingRSVP')
			.onSnapshot(
				(snapshot) => {
					setRSVPArray(collectionToDataArray(snapshot))
					setRSVPsLoaded(true)
				},
				(e) => {
					console.log(e)
					setRSVPArray([])
					setRSVPsLoaded(false)
				},
			)

		return () => {
			rsvpsWatcher()
			setRSVPArray([])
			setRSVPsLoaded(false)
		}
	}, [])

	return { rsvpArray, rsvpLoaded }
}
