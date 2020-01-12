import React, { useState } from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	GallerySection,
	GalleryContainer,
	GalleryHeader,
	GalleryTabs,
} from './styledComponents'
import { PageWrapper, Gallery } from 'components'
import { processedImages } from 'config/images'

export const OurStory = () => {
	const [selectedViewTab, setSelectedViewTab] = useState('How We Met')

	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>How it all started</HeaderTitle>
				</HeaderContent>
			</Header>
			<GallerySection>
				<GalleryContainer>
					<GalleryHeader>
						<GalleryTabs
							labelForKey='viewToggle'
							checkedValue={selectedViewTab}
							buttonArray={['How We Met', 'Through The Years', 'The Proposal']}
							onChange={(e) => setSelectedViewTab(e.target.value)}
						/>
					</GalleryHeader>
					{selectedViewTab === 'How We Met' && (
						<>
							<Gallery pageSize={12} images={processedImages} />
						</>
					)}
					{selectedViewTab === 'Through The Years' && (
						<>
							<Gallery pageSize={12} images={processedImages} />
						</>
					)}
					{selectedViewTab === 'The Proposal' && (
						<>
							<Gallery pageSize={12} images={processedImages} />
						</>
					)}
				</GalleryContainer>
			</GallerySection>
		</PageWrapper>
	)
}
