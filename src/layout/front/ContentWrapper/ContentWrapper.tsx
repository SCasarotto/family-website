import React from 'react'
import { Route, Switch, RouteChildrenProps } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

// import { NotFound } from 'pages/NotFound'

// import { Navbar } from 'layout/Front/Navbar'
// import { Footer } from 'layout/Front/Footer'

import { Home } from 'pages/front/Home'
// import { SignIn } from 'pages/Front/SignIn'
// import { ForgotPassword } from 'pages/Front/ForgotPassword'
// import { EmailActions } from 'pages/Front/EmailActions'

import { MainPanel, FrontContentWrapper } from './styledComponents'

interface Props extends RouteChildrenProps {}
export const ContentWrapper: React.FC<Props> = () => {
	// const { location } = props
	// const locationArray = location.pathname.split('/')
	// const locationKey = locationArray.slice(1, locationArray.length).join('/')
	return (
		<MainPanel>
			{/* <Navbar /> */}
			<FrontContentWrapper>
				{/* <TransitionGroup>
					<CSSTransition
						key={locationKey}
						timeout={{ enter: 500, exit: 0 }}
						classNames='fade'
						appear
					> */}
				{/* <div className='AnimationWrapper'> */}
				<Switch>
					<Route exact path='/' component={Home} />

					{/* <Route path='/signIn' component={SignIn} /> */}
					{/* <Route path='/forgot-password' component={ForgotPassword} /> */}
					{/* <Route path='/auth-actions' component={EmailActions} /> */}

					{/* <Route component={NotFound} /> */}
				</Switch>
				{/* </div> */}
				{/* </CSSTransition>
				</TransitionGroup> */}
			</FrontContentWrapper>
			{/* <Footer /> */}
		</MainPanel>
	)
}
