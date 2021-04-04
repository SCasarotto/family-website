import { useState, useEffect } from 'react'

import { PageWrapper } from 'components'
import { homePageSlider } from 'config/images'

import {
	HeaderWrapper,
	HeaderSlider,
	HeaderSlide,
	HeaderCopyWrapper,
	HeaderTitle,
	// HeaderSubtitle,
	CountDownWrapper,
	CountDownColumn,
	CountDownValue,
	CountDownLabel,
	// COVIDButton,
} from './styledComponents'
// import { useTEPopups } from 'react-tec'

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
const weddingStartDate = new Date('2021-07-10T16:30:00')

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
				<CountDownLabel>Days</CountDownLabel>
			</CountDownColumn>
			<CountDownColumn>
				<CountDownValue>{countDown.hours}</CountDownValue>
				<CountDownLabel>Hours</CountDownLabel>
			</CountDownColumn>
			<CountDownColumn>
				<CountDownValue>{countDown.minutes}</CountDownValue>
				<CountDownLabel>Minutes</CountDownLabel>
			</CountDownColumn>
			<CountDownColumn>
				<CountDownValue>{countDown.seconds}</CountDownValue>
				<CountDownLabel>Seconds</CountDownLabel>
			</CountDownColumn>
		</CountDownWrapper>
	)
}

export const Home = () => {
	// const { showAlert } = useTEPopups()

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
					{/* <HeaderSubtitle>
						Our wedding has been postponed to 2021.
						<br /> We will follow up with information soon.
					</HeaderSubtitle> */}
					<CountDown />
					{/* <COVIDButton
						onClick={() =>
							showAlert({
								title: 'COVID-19 Update',
								//@ts-ignore
								message: (
									<>
										Although we are excited to celebrate our wedding, COVID-19
										has posed challenges on having large groups of people
										together. We are assessing the status of the wedding weekly,
										so please check our website often for the most up to date
										information. We are working closely with our venue and
										vendors to do everything we can to ensure the safety and
										care of our guests.
										<br />
										<br /> We hope everyone is safe and well. ❤️
									</>
								),
								buttonTitle: 'Close',
							})
						}
					>
						COVID-19 Update
					</COVIDButton> */}
				</HeaderCopyWrapper>
			</HeaderWrapper>
		</PageWrapper>
	)
}
