import styled from 'styled-components'
import { NavLink as NL } from 'react-router-dom'

export const NavbarContainer = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	padding: 15px 30px;
	z-index: 100;
`
export const NavbarContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: 0px auto;
`
export const NavList = styled.ul`
	padding: 0px;
	margin: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
`
export const NavListItem = styled.li`
	padding: 0px 15px;
	margin: 0px;
	list-style: none;
`
export const NavLink = styled(NL)`
	font-size: 18px;
	color: #ffffff;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
	text-align: center;
	text-decoration: none;
`
export const Name = styled.div`
	margin-top: 0px;
	margin-bottom: 0px;
	color: #ffffff;
	text-align: center;
	font-family: 'Great Vibes', cursive;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	padding: 0px 15px;
	font-size: 50px;
	flex: 1;
	white-space: nowrap;
`
