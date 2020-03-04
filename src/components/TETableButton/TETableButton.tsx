import React from 'react'
import styled from 'styled-components'
import { FaEdit, FaCopy, FaTrashAlt } from 'react-icons/fa'
import Tippy from '@tippy.js/react'
import { TEButton, TEButtonProps } from 'react-tec'

const Tooltip = styled(Tippy)`
	display: block;
	flex: 1;
`
const Button = styled(TEButton)`
	font-size: 14px;
	padding: 5px 10px;
	display: block;
	flex: 1;
	line-height: 1;
`
interface Props extends TEButtonProps {
	icon?: 'edit' | 'duplicate' | 'delete'
	tooltip?: string
}
export const TETableButton: React.FC<Props> = (props) => {
	const { icon, tooltip, ...rest } = props

	switch (icon) {
		case 'edit':
			return (
				<Tooltip content={tooltip ? tooltip : 'Edit'}>
					<Button {...rest}>
						<FaEdit />
					</Button>
				</Tooltip>
			)
		case 'duplicate':
			return (
				<Tooltip content={tooltip ? tooltip : 'Duplicate'}>
					<Button {...rest}>
						<FaCopy />
					</Button>
				</Tooltip>
			)

		case 'delete':
			return (
				<Tooltip content={tooltip ? tooltip : 'Delete'}>
					<Button {...rest}>
						<FaTrashAlt />
					</Button>
				</Tooltip>
			)

		default:
			return <Button {...rest} />
	}
}
