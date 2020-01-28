import React from 'react'
import { Route, Switch, RouteChildrenProps } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

// import { NotFound } from 'pages/NotFound'

import { Navbar } from 'layout/front/Navbar'

import { Home } from 'pages/front/Home'
import { OurStory } from 'pages/front/OurStory'
import { BridalParty } from 'pages/front/BridalParty'
import { EventDetails } from 'pages/front/EventDetails'
import { Registry } from 'pages/front/Registry'
import { RSVP } from 'pages/front/RSVP'

import { MainPanel, FrontContentWrapper } from './styledComponents'

interface Props extends RouteChildrenProps {}
export const ContentWrapper: React.FC<Props> = (props) => {
	const { location } = props
	const transitions = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { mass: 10, friction: 60 },
	})
	return (
		<MainPanel>
			<Navbar />
			<FrontContentWrapper>
				{transitions.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={item}>
							<Route exact path='/' component={Home} />
							<Route path='/our-story' component={OurStory} />
							<Route path='/bridal-party' component={BridalParty} />
							<Route path='/event-details' component={EventDetails} />
							<Route path='/registry' component={Registry} />
							<Route path='/rsvp' component={RSVP} />

							{/* <Route component={NotFound} /> */}
						</Switch>
					</animated.div>
				))}
			</FrontContentWrapper>
		</MainPanel>
	)
}
