import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	ComingSoonWrapper,
	ComingSoonCopy,
} from './styledComponents'
import { PageWrapper } from 'components'

export const RSVP = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>We hope to see you there</HeaderTitle>
				</HeaderContent>
			</Header>
			<ComingSoonWrapper>
				<ComingSoonCopy>Check back soon for more details.</ComingSoonCopy>
			</ComingSoonWrapper>
		</PageWrapper>
	)
}
