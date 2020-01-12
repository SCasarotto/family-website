import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	ComingSoonWrapper,
	ComingSoonCopy,
} from './styledComponents'
import { PageWrapper } from 'components'

export const Registery = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>We are so blessed</HeaderTitle>
				</HeaderContent>
			</Header>
			<ComingSoonWrapper>
				<ComingSoonCopy>Check back soon for more details.</ComingSoonCopy>
			</ComingSoonWrapper>
		</PageWrapper>
	)
}
