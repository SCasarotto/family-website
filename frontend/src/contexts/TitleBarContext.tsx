import React, { createContext, useState } from 'react'

interface TitleBarContextData {
	barTitle: string
	setBarTitle: React.Dispatch<React.SetStateAction<string>>
}
export const TitleBarContext = createContext<TitleBarContextData>({
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
