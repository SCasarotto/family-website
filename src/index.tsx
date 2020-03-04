import React from 'react'
import ReactDOM from 'react-dom'
import { TEAppWrapper } from 'react-tec'
import firebase from 'firebase/app'
import 'firebase/performance'
import 'firebase/analytics'

import { settings } from 'config/settings'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'rc-pagination/assets/index.css'
import 'react-table/react-table.css'

import './index.css'

import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { SideNavActiveProvider, TitleBarProvider } from 'contexts'
import { AppProvider } from 'contexts/AppContext'

firebase.initializeApp({
	apiKey: settings.FIREBASE_API_KEY,
	authDomain: settings.FIREBASE_AUTH_DOMAIN,
	databaseURL: settings.FIREBASE_DATABASE_URL,
	projectId: settings.FIREBASE_PROJECT_ID,
	storageBucket: settings.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: settings.FIREBASE_MESSAGING_SENDER_ID,
	appId: settings.FIREBASE_APP_ID,
	measurementId: settings.FIREBASE_MEASUREMENT_ID,
})
if (settings.firebasePerformance) {
	firebase.performance()
	firebase.analytics()
}

const Root = () => {
	return (
		<TEAppWrapper theme={{ primary: '#5a2d36' }}>
			<AppProvider>
				<SideNavActiveProvider>
					<TitleBarProvider>
						<App />
					</TitleBarProvider>
				</SideNavActiveProvider>
			</AppProvider>
		</TEAppWrapper>
	)
}
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
