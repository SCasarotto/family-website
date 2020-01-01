import React from 'react'
import ReactDOM from 'react-dom'
import { TEAppWrapper } from 'react-tec'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { App } from './App'
import * as serviceWorker from './serviceWorker'

const Root = () => {
	return (
		<TEAppWrapper>
			<App />
		</TEAppWrapper>
	)
}
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
