import React, { createContext, useState } from 'react'

interface SideNavActive {
	sideNavActive: boolean
	setSideNavActive: React.Dispatch<React.SetStateAction<boolean>>
}
export const SideNavActiveContext = createContext<SideNavActive>({
	sideNavActive: false,
	setSideNavActive: () => {},
})

export const SideNavActiveProvider: React.FC = (props) => {
	const [sideNavActive, setSideNavActive] = useState(true)

	return (
		<SideNavActiveContext.Provider value={{ sideNavActive, setSideNavActive }}>
			{props.children}
		</SideNavActiveContext.Provider>
	)
}
