import React, { createContext, useState } from 'react'

interface TitleBarContext {
	barTitle: string
	setBarTitle: React.Dispatch<React.SetStateAction<string>>
}
export const TitleBarContext = createContext<TitleBarContext>({
	barTitle: '',
	setBarTitle: () => {},
})

export const TitleBarProvider: React.FC = (props) => {
	const [barTitle, setBarTitle] = useState('')
	return (
		<TitleBarContext.Provider value={{ barTitle, setBarTitle }}>
			{props.children}
		</TitleBarContext.Provider>
	)
}
