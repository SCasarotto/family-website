import React, { createContext, useState, useEffect } from 'react'
import firebase, { User } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

interface AppContextData {
	user?: User
	userLoaded?: boolean
}
export const AppContext = createContext<AppContextData>({})

export const AppProvider: React.FC = (props) => {
	const [user, setUser] = useState<User | undefined>(undefined)
	const [userLoaded, setUserLoaded] = useState(false)

	useEffect(() => {
		firebase.auth().onAuthStateChanged(
			(user) => {
				if (user) {
					setUser(user)
					setUserLoaded(true)
				} else {
					setUser(undefined)
					setUserLoaded(true)
				}
			},
			(e) => {
				console.error(e)
				setUser(undefined)
				setUserLoaded(true)
			},
			() => console.log('onAuthStateChanged Completed'),
		)
	}, [])

	return (
		<AppContext.Provider
			value={{
				user,
				userLoaded,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}
