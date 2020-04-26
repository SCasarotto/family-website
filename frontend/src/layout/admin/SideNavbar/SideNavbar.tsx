import React from 'react'

import { useSideNavActiveContext } from 'hooks'
import { logo } from 'config/images'

import { SideNavBar, LogoWrapper, LogoLink, LogoImage } from './styledComponents'

export const SideNavbar = () => {
	const { sideNavActive } = useSideNavActiveContext()

	return (
		<SideNavBar
			sideNavActive={sideNavActive}
			Header={
				<LogoWrapper>
					<LogoLink to='/'>
						<LogoImage src={logo} alt='Casarotto Family Crest' />
					</LogoLink>
				</LogoWrapper>
			}
			links={[
				{ title: 'RSVPs', to: '/admin/rsvps' },
				{ title: 'Messages', to: '/admin/messages' },
			]}
		/>
	)
}
