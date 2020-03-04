import React from 'react'
import { Switch, RouteChildrenProps, Route, Redirect } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { TEPrivateRoute } from 'react-tec'

import { useSideNavActiveContext, useAppContext } from 'hooks'

import { NotFound } from 'pages/admin/NotFound'

import { Navbar } from 'layout/admin/Navbar'
import { Footer } from 'layout/admin/Footer'
import { SideNavbar } from 'layout/admin/SideNavbar'

import { RSVPs } from 'pages/admin/RSVPs'
import { Messages } from 'pages/admin/Messages'

import { BodyContainer, AdminContentWrapper } from './styledComponents'

const authChecks = [
	{
		check: () => {
			const fbAuth = firebase.auth()
			return !!fbAuth?.currentUser
		},
		path: '/',
	},
]

interface Props extends RouteChildrenProps {}
export const ContentWrapper: React.FC<Props> = (props) => {
	const { history } = props
	const { sideNavActive } = useSideNavActiveContext()
	const { user, userLoaded } = useAppContext()

	//If User Loaded with No User => Kick them out
	if (userLoaded && !user) {
		return <Redirect to='/' />
	}

	//If User Loaded with User => Wait for AppVersions && userModelLoaded && companyLoaded
	if (!userLoaded) {
		return null //Still Loading
	}

	return (
		<>
			<SideNavbar />
			<BodyContainer sideNavActive={sideNavActive}>
				<Navbar history={history} />
				<AdminContentWrapper>
					<Switch>
						<TEPrivateRoute
							path='/admin/rsvps'
							authChecks={authChecks}
							component={RSVPs}
						/>
						<TEPrivateRoute
							path='/admin/messages'
							authChecks={authChecks}
							component={Messages}
						/>

						<Route component={NotFound} />
					</Switch>
				</AdminContentWrapper>
				<Footer />
			</BodyContainer>
		</>
	)
}
