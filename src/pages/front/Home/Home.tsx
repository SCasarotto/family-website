import React, { useState, useEffect } from 'react'

import { PageWrapper } from 'components'
import { processedImages } from 'config/images'

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

const headerSliderImages = [
	{ src: processedImages[53 - 1].full, center: 75 },
	{ src: processedImages[97 - 1].full, center: 28 },
	{ src: processedImages[80 - 1].full, center: 74 },
	{ src: processedImages[134 - 1].full, center: 43 },
	{ src: processedImages[26 - 1].full, center: 35 },
	{ src: processedImages[24 - 1].full, center: 52 },
	{ src: processedImages[33 - 1].full, center: 32 },
]

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
		<PageWrapper>
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
					{headerSliderImages.map((image, index) => (
						<HeaderSlide image={image.src} center={image.center} key={index} />
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
