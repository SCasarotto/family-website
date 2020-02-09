import React, { useState, useEffect } from 'react'

import { PageWrapper } from 'components'
import { homePageSlider } from 'config/images'

import {
	HeaderWrapper,
	HeaderSlider,
	HeaderSlide,
	HeaderCopyWrapper,
	HeaderTitle,
	CountDownWrapper,
	CountDownColumn,
	CountDownValue,
	CountDownLoaded,
} from './styledComponents'

interface CountdownData {
	seconds: number
	minutes: number
	hours: number
	days: number
}
const countDownTo = (date: Date) => {
	const t = date.getTime() - new Date().getTime()

	if (t < 0) {
		return {
			seconds: 0,
			minutes: 0,
			hours: 0,
			days: 0,
		}
	}
	const seconds = Math.floor((t / 1000) % 60)
	const minutes = Math.floor((t / 1000 / 60) % 60)
	const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
	const days = Math.floor(t / (1000 * 60 * 60 * 24))

	return {
		seconds,
		minutes,
		hours,
		days,
	}
}
const weddingStartDate = new Date('2020-07-18T16:00:00')

const CountDown = () => {
	const [countDown, setCountDown] = useState<CountdownData>(countDownTo(weddingStartDate))

	useEffect(() => {
		const intervalId = setInterval(() => setCountDown(countDownTo(weddingStartDate)), 1000)
		return () => {
			clearInterval(intervalId)
		}
	}, [])
	return (
		<CountDownWrapper>
			<CountDownColumn>
				<CountDownValue>{countDown.days}</CountDownValue>
				<CountDownLoaded>Days</CountDownLoaded>
			</CountDownColumn>
			<CountDownColumn>
				<CountDownValue>{countDown.hours}</CountDownValue>
				<CountDownLoaded>Hours</CountDownLoaded>
			</CountDownColumn>
			<CountDownColumn>
				<CountDownValue>{countDown.minutes}</CountDownValue>
				<CountDownLoaded>Minutes</CountDownLoaded>
			</CountDownColumn>
			<CountDownColumn>
				<CountDownValue>{countDown.seconds}</CountDownValue>
				<CountDownLoaded>Seconds</CountDownLoaded>
			</CountDownColumn>
		</CountDownWrapper>
	)
}

export const Home = () => {
	return (
		<PageWrapper footer={false}>
			<HeaderWrapper>
				<HeaderSlider
					dots={true}
					infinite={true}
					speed={2500}
					autoplaySpeed={5000}
					slidesToShow={1}
					slidesToScroll={1}
					arrows={false}
					pauseOnHover={false}
					autoplay
					fade
				>
					{homePageSlider.map((imageData, index) => (
						<HeaderSlide imageData={imageData} key={index} />
					))}
				</HeaderSlider>
				<HeaderCopyWrapper>
					<HeaderTitle>We're Engaged!</HeaderTitle>
					<CountDown />
				</HeaderCopyWrapper>
			</HeaderWrapper>
		</PageWrapper>
	)
}
