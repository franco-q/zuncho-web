import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from './img/brand-logo.svg'
import { NavLink } from 'react-router-dom'

const Brand = ({ className }) => {
	return (
		<NavLink className={className} to="/">
			<Logo />
		</NavLink>
	)
}

export default styled(Brand)`
	display: block;
	height: 53px;
	width: 53px;
	overflow: hidden;
	svg {
		height: 53px;
		#brand_zuncho_text {
			display: none;
			@media only screen and (min-width: 600px) {
				display: block;
			}
		}
	}
	@media only screen and (min-width: 600px) {
		width: 165px;
	}
`
