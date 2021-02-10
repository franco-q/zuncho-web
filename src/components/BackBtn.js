import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../img/arrow-left.svg'

const Back = styled(NavLink)`
	cursor: pointer;
	display: block;
	height: 34px;
	width: 34px;
	color: #fff;
	text-decoration: none;
	position: absolute;
	right: 15px;
	top: 0;
	@media only screen and (min-width: 998px) {
		display: none;
	}
`

const BackBtn = props => {
	return (
		<Back to="/" exact>
			<ArrowLeft />
		</Back>
	)
}

export default BackBtn
