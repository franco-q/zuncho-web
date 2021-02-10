import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Link, useLocation, useHistory } from 'react-router-dom'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ReactComponent as ArrowRight } from '../img/arrow-right.svg'
import client_Smile from '../img/clientes/Doctor Doctor Smile.svg'
import client_Athix from '../img/clientes/Logo Athix.svg'
import client_Audi from '../img/clientes/Logo Audi.svg'
import client_Bioxen from '../img/clientes/Logo Bioxen.svg'
import client_Universidad from '../img/clientes/Logo Canal Universidad.svg'
import client_Fasta from '../img/clientes/Logo Fasta.svg'
import client_Fia from '../img/clientes/Logo Fia.svg'
import client_Mercedez from '../img/clientes/Logo Mercedez.svg'
import client_Black from '../img/clientes/Logo Mr Black.svg'
import client_Nacional from '../img/clientes/Logo Universidad Nacional.svg'

SwiperCore.use([Autoplay])

const Wrap = styled.div`
	padding-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	flex-direction: column;
	max-width: 100%;
	@media only screen and (min-width: 998px) {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: auto;
		margin-left: 0;
	}
	nav {
		ul {
			list-style: none;
			padding: 0;
			margin: 0 auto;
			align-self: center;
			Item {
				font-weight: 600;
				font-size: 58px;
				line-height: 58px;
				cursor: pointer;
			}
			li {
				margin-bottom: 1rem;
				position: relative;
				svg {
					position: absolute;
					left: -50px;
					height: 35px;
					width: 35px;
					display: block;
					top: -2px;
				}
				a {
					color: #fff;
					text-decoration: none;
					display: block;
					margin-bottom: 0.5rem;
				}
			}
		}
	}
	.swiper-container {
		width: 100%;
	}
	.swiper-slide {
		transition: all 0.5s ease-in-out;
	}
	.swiper-slide-active {
		transform: scale(1.7);
	}
	.swiper-slide-next,
	.swiper-slide-prev {
		opacity: 0.7;
	}
`
const SubMenu = styled.div`
	max-height: ${props => (props.open ? '100vh' : '0')};
	overflow: hidden;
	padding: ${props => (props.open ? '25px 0' : '0')};
	transition: all 0.65s ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
const Client = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	width: 100px;
	margin-left: auto;
	margin-right: auto;
`

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
}

const SubItem = styled(Link)`
	transition: all 0.5s ease-out;
	opacity: ${props => (props.active ? 1 : 0.5)};
`

const Item = styled.h1`
	transition: all 0.5s ease-out;
	opacity: ${props => (props.active ? 1 : 0.5)};
`

function Menu({ open }) {
	let location = useLocation()
	const history = useHistory()
	const [active, setActive] = useState(false)
	const Servicios = 'Servicios'
	const Contacto = 'Contacto'
	const Nosotros = 'Nosotros'

	useEffect(() => {
		switch (location.pathname) {
			case '/nosotros':
				setActive(Nosotros)
				break
			case '/contacto':
				setActive(Contacto)
				break
			default:
				if (location.pathname !== '/') {
					setActive(Servicios)
				}
				break
		}
	}, [])

	useEffect(() => {
		if (!active) {
			// history.push('/')
		}
	}, [active])

	const { t } = useTranslation()

	const routes = [
		{ route: '/3D', text: 'Diseño y Animación 3D' },
		{ route: '/animacion-publicitaria', text: 'Animación Publicitaria 2D / 3D' },
		{ route: '/branding', text: 'Diseño Gráfico / Branding' },
		{ route: '/diseño-web', text: 'Desarrollo Web' },
		{ route: '/social-media', text: 'Social Media' }
	]

	return (
		<Wrap>
			<motion.nav initial={false} animate={open ? 'open' : 'closed'}>
				<motion.ul
					variants={{
						open: {
							transition: { staggerChildren: 0.07, delayChildren: 0.2 }
						},
						closed: {
							transition: { staggerChildren: 0.05, staggerDirection: -1 }
						}
					}}
				>
					<motion.li variants={variants} key={Servicios}>
						{active === Servicios && <ArrowRight />}
						<Item
							active={active === Servicios ? true : !active}
							onClick={() => setActive(v => (v === Servicios ? '' : Servicios))}
						>
							{t(Servicios)}
						</Item>
						<AnimatePresence initial={false}>
							<SubMenu open={active === Servicios}>
								{routes.map(({ route, text }) => (
									<SubItem
										active={
											location.pathname == route
												? true
												: !routes
														.map(r => r.route)
														.includes(location.pathname)
										}
										to={route}
									>
										{t(text)}
									</SubItem>
								))}
							</SubMenu>
						</AnimatePresence>
					</motion.li>
					<motion.li variants={variants} key={Nosotros}>
						{active === Nosotros && <ArrowRight />}
						<Item
							active={active === Nosotros ? true : !active}
							onClick={() => setActive(v => (v === Nosotros ? '' : Nosotros))}
						>
							<Link to="/nosotros">{t(Nosotros)}</Link>
						</Item>
					</motion.li>
					<motion.li variants={variants} key={Contacto}>
						{active === Contacto && <ArrowRight />}
						<Item
							active={active === Contacto ? true : !active}
							onClick={() => setActive(v => (v === Contacto ? '' : Contacto))}
						>
							<Link to="/contacto">{t(Contacto)}</Link>
						</Item>
					</motion.li>
				</motion.ul>
			</motion.nav>
			{open && (
				<Swiper
					slidesPerView={3}
					onSwiper={swiper => console.log(swiper)}
					centeredSlides
					loop
					autoplay={{
						delay: 2000,
						disableOnInteraction: true
					}}
				>
					{[
						client_Smile,
						client_Athix,
						client_Audi,
						client_Bioxen,
						client_Universidad,
						client_Fasta,
						client_Fia,
						client_Mercedez,
						client_Black,
						client_Nacional
					].map((img, i) => (
						<SwiperSlide key={'slide_' + i}>
							<Client>
								<img src={img} />
							</Client>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Wrap>
	)
}

export default Menu
