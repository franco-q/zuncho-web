/** @jsx jsx */
import React, { useState } from 'react'
import MenuIcon from './MenuIcon'
import { css, jsx } from '@emotion/react'
const links = ['CONTACTO', 'EMPLEOS', 'NOSOTROS', 'SERVICIOS']

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false)
	//
	return (
		<div>
			<header
				css={css`
					background-color: #29323c;
				`}
			>
				<div className="p-6 md:flex relative h-24">
					<div className="flex flex-row justify-between items-center">
						<a className="">
							<img src="./logo.svg" className="h-12" />
						</a>
						<button
							onClick={() => {
								setOpen(s => !s)
							}}
							className="bg-transparent border-0 focus:outline-none md:hidden"
						>
							<MenuIcon {...{ open }} />
						</button>
					</div>
					<nav
						className={`max-h-${open ? (links.length + 2) * 8 : 0} py-${
							open ? 8 : 0
						} bg-black overflow-hidden w-full left-0 top-full flex flex-col md:flex-row md:ml-auto items-center transition-all duration-500 ease-in absolute md:relative z-50`}
					>
						{links.map((link: string, i: number) => (
							<a className="block mx-2 h-8 p-1 text-white" href="#" key={i}>
								{link}
							</a>
						))}
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Navbar
