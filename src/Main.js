import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Langs from './components/Langs'
import BurgerMenu from './components/BurgerMenu'
import Menu from './components/Menu'
import Brand from './Brand'
import { NavLink, Route, Switch, useLocation, useHistory } from 'react-router-dom'

import DDD from './components/3D.js'
import AdAnimation from './components/AdAnimation.js'
import Branding from './components/Branding.js'
import Locations from './components/Locations.js'
import SocialMedia from './components/SocialMedia.js'
import WebDesing from './components/WebDesing.js'
import Contact from './components/Contact'

import bg3d from './img/3D.jpeg'
import bgDesing from './img/Desing.jpeg'

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-top: 53px;
	padding-bottom: 53px;
	position: relative;
	z-index: 1;
`

const Content = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
	flex-grow: 1;
`

const Wrap = styled.div`
	max-width: 100%;
	background-position: 50vw center;
	background-repeat: no-repeat;
	background-size: auto 100%;
	position: relative;
	background-color: ${props => (props.open ? 'rgb(0,0,0)' : 'rgba(0,0,0,0)')};
	min-height: 100vh;
	transition: all 0.6s ease-in;
	display: flex;
	flex-direction: column;
	&::after {
		display: block;
		position: absolute;
		height: 100%;
		width: 50%;
		content: ' ';
		left: 50%;
		background-size: cover;
		background-position: center;
		display: none;
		opacity: 0;
		background-repeat: no-repeat;
	}
	@media only screen and (min-width: 992px) {
		&::after {
			background-image: url(${props => props.bg});
			display: block;
			opacity: ${props => (props.bg ? 1 : 0)};
		}
	}
`

const RouteWrap = styled(motion.div)`
	padding: 3rem 2.2rem;
	min-height: 100%;
	left: 0;
	right: 0;
	width: 100%;
	position: absolute;
	background-position: center;
	background-color: #000;
	z-index: 1;
	@media only screen and (min-width: 998px) {
		background-color: rgba(0, 0, 0, 0);
		padding: 3.5rem;
		width: 50%;
		position: relative;
	}
	h1 {
		font-size: 2rem;
	}
	h4 {
		font-size: 1.2rem;
	}
	ul li {
		margin-bottom: 10px;
		line-height: 1.2;
	}
`
const Main = props => {
	const [open, setOpen] = useState(false)
	let location = useLocation()
	let history = useHistory()
	const routes = [
		{ path: '/3D', Component: DDD, bg: bg3d },
		{ path: '/animacion-publicitaria', Component: AdAnimation },
		{ path: '/branding', Component: Branding, bg: bgDesing },
		{ path: '/diseño-web', Component: WebDesing },
		{ path: '/social-media', Component: SocialMedia },
		{ path: '/nosotros', Component: Locations },
		{ path: '/contacto', Component: Contact }
	]

	useEffect(() => {
		setOpen(routes.some(({ path }) => path === location.pathname))
	}, [])

	useEffect(() => {
		if (!open && routes.every(({ path }) => path !== location.pathname)) {
			history.push('/')
		}
	}, [open])

	const langs = {
		es: 'Español',
		it: 'Italiano',
		en: 'English'
	}
	return (
		<Wrap
			open={open}
			bg={routes.reduce((str, { path, bg }) => (path == location.pathname ? bg : str), '')}
		>
			<Header className="container-sm">
				<AnimatePresence initial={false}>
					{open && (
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							key="h1"
						>
							<Brand />
						</motion.div>
					)}
					{open && (
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							key="h2"
							className="flex-grow-1"
						>
							<Langs options={langs} active={langs.es} className="ml-auto" />
						</motion.div>
					)}
				</AnimatePresence>
				<BurgerMenu
					onClick={() => {
						if (open) {
							history.push('/')
							setOpen(false)
						} else {
							setOpen(true)
						}
					}}
					open={open}
				/>
			</Header>
			<Content className="container-sm">
				<Menu open={open} />
				<AnimatePresence exitBeforeEnter initial={false}>
					<Switch location={location}>
						{routes.map((route, i) => (
							<Route path={route.path} key={'route_' + i}>
								<RouteWrap
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									key={'___' + i}
								>
									<route.Component />
								</RouteWrap>
							</Route>
						))}
					</Switch>
				</AnimatePresence>
			</Content>
		</Wrap>
	)
}

export default Main
