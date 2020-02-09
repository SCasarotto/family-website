import styled from 'styled-components'
import { NavLink as NL } from 'react-router-dom'
import { NavIcon } from 'assets/SVGs'

export const NavbarContainer = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	padding: 15px 30px;
	z-index: 100;

	@media only screen and (max-width: 950px) {
		padding: 15px 20px;
	}
`
export const NavbarContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: 0px auto;

	@media only screen and (max-width: 800px) {
		justify-content: space-between;
	}
`
export const NavList = styled.ul`
	padding: 0px;
	margin: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	@media only screen and (max-width: 800px) {
		display: none;
	}
`
export const NavListItem = styled.li`
	padding: 0px 15px;
	margin: 0px;
	list-style: none;
	text-align: center;

	@media only screen and (max-width: 1100px) {
		padding: 0px 12px;
	}
	@media only screen and (max-width: 950px) {
		padding: 0px 10px;
	}
`
export const NavLink = styled(NL)`
	font-size: 18px;
	color: #ffffff;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
	text-align: center;
	text-decoration: none;
	line-height: 1.25;

	@media only screen and (max-width: 1100px) {
		font-size: 17px;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);
	}
	@media only screen and (max-width: 950px) {
		font-size: 16px;
	}
`
export const Name = styled(NL)`
	margin-top: 0px;
	margin-bottom: 0px;
	color: #ffffff;
	text-align: center;
	font-family: 'Great Vibes', cursive;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
	padding: 0px 15px;
	font-size: 50px;
	white-space: nowrap;
	text-decoration: none;

	@media only screen and (max-width: 1100px) {
		font-size: 42px;
		padding: 0px 10px;
	}
	@media only screen and (max-width: 950px) {
		font-size: 32px;
	}
	@media only screen and (max-width: 800px) {
		font-size: 38px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 28px;
	}
	@media only screen and (max-width: 300px) {
		font-size: 20px;
	}
`
export const MenuButton = styled.button`
	background-color: rgba(255, 255, 255, 0.15);
	border-radius: 5px;
	border: 1px solid rgba(255, 255, 255, 0.65);
	padding: 12px 10px;
	display: none;

	@media only screen and (max-width: 800px) {
		display: block;
		flex-shrink: 0;
	}
	@media only screen and (max-width: 500px) {
		padding: 8px 6px;
	}
	@media only screen and (max-width: 300px) {
		padding: 5px;
	}
`
export const MenuButtonIcon = styled(NavIcon)`
	fill: ${(props) => props.theme.white};
	width: 25px;

	@media only screen and (max-width: 500px) {
		width: 20px;
	}
	@media only screen and (max-width: 300px) {
		width: 16px;
	}
`
export const MobileMenuContainer = styled.div<{ visible: boolean }>`
	position: fixed;
	z-index: 1000;
	width: 100%;
	height: 100vh;
	display: none;
	visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
	opacity: ${(props) => (props.visible ? 1 : 0)};
	transition: opacity 0.5s ease-in, visiblity 0s ease-in 0.5s;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);

	@media only screen and (max-width: 800px) {
		display: flex;
	}
`
export const MobileMenuList = styled.ul`
	padding: 0px;
	margin: 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`
export const MobileMenuListItem = styled.li`
	width: 100%;
	margin: 0px;
	list-style: none;
	text-align: center;
	border-top: 1px solid rgba(255, 255, 255, 0.65);
	background-color: rgba(255, 255, 255, 0.15);

	:last-child {
		border-bottom: 1px solid rgba(255, 255, 255, 0.65);
	}
`
export const MobileMenuNavLink = styled(NL)`
	padding: 10px 15px;
	display: block;
	font-size: 26px;
	color: #ffffff;
	font-weight: 400;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
	text-align: center;
	text-decoration: none;
	line-height: 1.25;
	width: 100%;

	@media only screen and (max-width: 800px) and (max-height: 500px) {
		font-size: 20px;
		padding: 10px;
	}
	@media only screen and (max-width: 800px) and (max-height: 400px) {
		font-size: 16px;
		padding: 10px 5px;
	}
	@media only screen and (max-width: 800px) and (max-height: 250px) {
		font-size: 14px;
		padding: 10px 2px;
		line-height: 1;
	}
`
