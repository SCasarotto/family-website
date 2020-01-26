import styled from 'styled-components'
import Pagination from 'rc-pagination'

export const GalleryWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
`
export const GalleryThumbnail = styled.img`
	display: block;
	width: 200px;
	height: 200px;
	object-fit: cover;
	overflow: hidden;
	cursor: pointer;
	margin: 10px;
	border-radius: 10px;
	transition: opacity 0.2s ease-in;

	:hover {
		opacity: 0.75;
	}

	@media only screen and (max-width: 900px) {
		width: 180px;
		height: 180px;
	}
	@media only screen and (max-width: 650px) {
		width: 150px;
		height: 150px;
	}
	@media only screen and (max-width: 500px) {
		width: 125px;
		height: 125px;
	}
`
export const GalleryPagination = styled(Pagination)`
	display: flex;
	justify-content: center;
	align-items: center;

	.rc-pagination-item {
		font-size: 18px;
		min-width: 34px;
		height: 34px;
		line-height: 34px;

		:hover {
			border-color: ${(props) => props.theme.primary};

			a {
				color: ${(props) => props.theme.primary};
			}
		}
	}
	.rc-pagination-prev,
	.rc-pagination-next {
		font-size: 18px;
		min-width: 34px;
		height: 34px;
		line-height: 34px;
	}

	.rc-pagination-jump-prev,
	.rc-pagination-jump-next {
		font-size: 18px;
		min-width: 34px;
		height: 34px;
		line-height: 34px;

		:hover:after,
		:hover:after {
			color: ${(props) => props.theme.primary};
		}
	}
	.rc-pagination-item-active {
		background-color: ${(props) => props.theme.primary};
		border-color: ${(props) => props.theme.primary};

		a {
			color: #ffffff !important;
		}
	}
`
