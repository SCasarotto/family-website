import React from 'react'

import {
	NavbarContainer,
	NavbarContent,
	NavList,
	NavListItem,
	NavLink,
	Name,
} from './styledComponents'

export const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarContent>
				<NavList>
					<NavListItem>
						<NavLink to='/'>Home</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to='our-story'>Our Story</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to='bridal-party'>Bridal Party</NavLink>
					</NavListItem>
				</NavList>
				<Name>Stuart & Courtney</Name>
				<NavList>
					<NavListItem>
						<NavLink to='/event-details'>Event Details</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to='/registry'>Registry</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to='rsvp'>RSVP</NavLink>
					</NavListItem>
				</NavList>
			</NavbarContent>
		</NavbarContainer>
	)
}
