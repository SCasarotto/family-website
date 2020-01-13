import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { GalleryWrapper, GalleryThumbnail, GalleryPagination } from './styledComponents'

interface Props {
	images: { thumb: any; full: any }[]
	pageSize: number
	altPrefix: string
}
export const Gallery: React.FC<Props> = (props) => {
	const { images, pageSize, altPrefix } = props

	const [lightBoxOpen, setLightBoxOpen] = useState(false)
	const [lightBoxIndex, setLightBoxIndex] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)

	return (
		<>
			<GalleryWrapper>
				{images
					.slice((currentPage - 1) * pageSize, currentPage * pageSize)
					.map((data, index) => (
						<GalleryThumbnail
							src={data.thumb}
							alt={`${altPrefix ? altPrefix : 'gallery'} ${index + 1}`}
							key={`${altPrefix ? altPrefix : 'gallery'}_${index + 1}`}
							onClick={() => {
								setLightBoxIndex(index + (currentPage - 1) * pageSize)
								setLightBoxOpen(true)
							}}
						/>
					))}
			</GalleryWrapper>
			{images.length > pageSize && (
				<GalleryPagination
					onChange={(page: number) => setCurrentPage(page)}
					current={currentPage}
					defaultPageSize={pageSize}
					total={images.length}
				/>
			)}
			<ModalGateway>
				{lightBoxOpen ? (
					<Modal
						styles={{
							blanket: (base: { [key: string]: any }) => ({ ...base, zIndex: 1100 }),
							positioner: (base: { [key: string]: any }) => ({
								...base,
								zIndex: 1110,
							}),
							dialog: (base: { [key: string]: any }) => ({ ...base, zIndex: 1120 }),
						}}
						onClose={() => {
							setLightBoxIndex(0)
							setLightBoxOpen(!lightBoxOpen)
						}}
					>
						<Carousel
							views={images.map((data) => ({
								download: data.full,
								source: data.full,
								thumbnail: data.thumb,
							}))}
							currentIndex={lightBoxIndex}
							trackProps={{
								onViewChange: (index: number) =>
									setCurrentPage(Math.floor(index / pageSize) + 1),
							}}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</>
	)
}
