import React from 'react'
import styled, { keyframes } from 'styled-components'
import masksvg from '../img/mask.svg'

const _color = '#fff'
const _animation = '0.6s'
const _scale = 0.5

const Path = styled.path`
	stroke-dasharray: 240;
	stroke-dashoffset: 240;
	stroke-linejoin: round;
`
const AnimatePath = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 68px;
	height: 68px;
`
const PathBurger = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 68px;
	width: 68px;
	mask: url(#mask);
	-webkit-mask-box-image: url(${masksvg});
`
const PathRotation = styled.div`
	height: 34px;
	width: 34px;
	margin: 34px 34px 0 0;
	transform: rotate(0deg);
	transform-origin: 100% 0;
	&:before {
		content: '';
		display: block;
		width: 30px;
		height: 34px;
		margin: 0 4px 0 0;
		background: ${_color};
	}
`
const BurgerIcon = styled.div`
	position: absolute;
	padding: 20px 16px;
	height: 68px;
	width: 68px;
`
const BurgerContainer = styled.div`
	position: relative;
	height: 28px;
	width: 36px;
`
const BurgerRing = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 68px;
	height: 68px;
	& > svg {
		width: 68px;
		height: 68px;
	}
`
const BurgerLines = styled.span`
	position: absolute;
	display: block;
	height: 4px;
	width: 36px;
	border-radius: 2px;
	background: ${_color};
`
const BurgerBunTop = styled(BurgerLines)`
	top: 0;
	transform-origin: 34px 2px;
`
const BurgerBunBot = styled(BurgerLines)`
	bottom: 0;
	transform-origin: 34px 2px;
`
const BurgerFilling = styled(BurgerLines)`
	top: 12px;
`
const Hamburglar = styled.div`
	transform: scale(${_scale}) translateX(50%);
	position: relative;
	display: block;
	width: 68px;
	height: 68px;
	-webkit-touch-callout: none;
	user-select: none;
	cursor: pointer;
	${Path} {
		animation: ${props => (props.open ? dash_in : dash_out)} ${_animation} linear normal;
		animation-fill-mode: forwards;
	}
	${AnimatePath} {
		animation: ${props => (props.open ? rotate_in : rotate_out)} ${_animation} linear normal;
		animation-fill-mode: forwards;
	}
	${BurgerBunTop} {
		animation: ${props => (props.open ? bun_top_out : bun_top_in)} ${_animation} linear normal;
		animation-fill-mode: forwards;
	}
	${BurgerBunBot} {
		animation: ${props => (props.open ? bun_bot_out : bun_bot_in)} ${_animation} linear normal;
		animation-fill-mode: forwards;
	}
	${BurgerFilling} {
		animation: ${props => (props.open ? fill_out : fill_in)} ${_animation} linear normal;
		animation-fill-mode: forwards;
	}
`

const rotate_out = keyframes`
0% { transform: rotate(0deg); }
40% { transform: rotate(180deg); }
100% { transform: rotate(360deg); }
`
const rotate_in = keyframes`
0% { transform: rotate(360deg); }
40% { transform: rotate(180deg); }
100% { transform: rotate(0deg); }
`
const dash_in = keyframes`
0% { stroke-dashoffset: 240; }
40% { stroke-dashoffset: 240; }
100% { stroke-dashoffset: 0; }
`
const dash_out = keyframes`
0% { stroke-dashoffset: 0; }
40% { stroke-dashoffset: 240; }
100% { stroke-dashoffset: 240; }
`
const bun_top_out = keyframes`
0% {
left: 0;
top: 0;
transform: rotate(0deg);
}
20% {
left: 0;
top: 0;
transform: rotate(15deg);
}
80% {
left: -5px;
top: 0;
transform: rotate(-60deg);
}
100% {
left: -5px;
top: 1px;
transform: rotate(-45deg);
}
`
const bun_bot_out = keyframes`
0% {
left: 0;
transform: rotate(0deg);
}
20% {
left: 0;
transform: rotate(-15deg);
}
80% {
left: -5px;
transform: rotate(60deg);
}
100% {
left: -5px;
transform: rotate(45deg);
}
`
const bun_top_in = keyframes`
0% {
left: -5px;
bot: 0;
transform: rotate(-45deg);
}
20% {
left: -5px;
bot: 0;
transform: rotate(-60deg);
}
80% {
left: 0;
bot: 0;
transform: rotate(15deg);
}
100% {
left: 0;
bot: 1px;
transform: rotate(0deg);
}
`
const bun_bot_in = keyframes`
0% {
left: -5px;
transform: rotate(45deg);
}
20% {
left: -5px;
bot: 0;
transform: rotate(60deg);
}
80% {
left: 0;
bot: 0;
transform: rotate(-15deg);
}
100% {
left: 0;
transform: rotate(0deg);
}
`
const fill_in = keyframes`
0% {
width: 0;
left: 36px;
}
40% {
width: 0;
left: 40px;
}
80% {
width: 36px;
left: -6px;
}
100% {
width: 36px;
left: 0px;
}
`
const fill_out = keyframes`
0% {
width: 36px;
left: 0px;
}
20% {
width: 42px;
left: -6px;
}
40% {
width: 0;
left: 40px;
}
100% {
width: 0;
left: 36px;
}
`

const Wrap = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	strong {
		line-height: 34px;
		position: relative;
		top: 3px;
		display: none;
		@media only screen and (min-width: 768px) {
			display: block;
		}
	}
`
function BurgerMenu({ open, onClick }) {
	return (
		<Wrap>
			<strong>Menu</strong>
			<Hamburglar open={open} onClick={onClick}>
				<BurgerIcon>
					<BurgerContainer>
						<BurgerBunTop />
						<BurgerFilling />
						<BurgerBunBot />
					</BurgerContainer>
				</BurgerIcon>
				<BurgerRing>
					<svg>
						<Path
							fill="none"
							stroke="#fff"
							strokeMiterlimit="10"
							strokeWidth="4"
							d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
						/>
					</svg>
				</BurgerRing>
				<svg width="0" height="0">
					<mask id="mask">
						<path
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ff0000"
							strokeMiterlimit="10"
							strokeWidth="4"
							d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
						/>
					</mask>
				</svg>
				<PathBurger>
					<AnimatePath>
						<PathRotation />
					</AnimatePath>
				</PathBurger>
			</Hamburglar>
		</Wrap>
	)
}

export default BurgerMenu
