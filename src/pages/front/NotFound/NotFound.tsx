import React from 'react'

import { PageWrapper } from 'components'

import { Background, Content, Title, Copy, HomeLink } from './styledComponents'

export const NotFound = () => {
	return (
		<PageWrapper>
			<Background>
				<Content>
					<Title>You seem lost.</Title>
					<Copy>
						While exploring is fun, sometimes you need judgy people to point you back{' '}
						<HomeLink to='/'>home</HomeLink>.
					</Copy>
				</Content>
			</Background>
		</PageWrapper>
	)
}
