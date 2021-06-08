import React, { FC } from 'react'

type Props = {
	open: boolean
}

const MenuIcon: FC<Props> = ({ open }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="#FFF"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			{open ? (
				<>
					<path stroke="#FFF" d="M18 6L6 18" />
					<path stroke="#FFF" d="M6 6L18 18" />
				</>
			) : (
				<>
					<path stroke="#FFF" d="M3 12L21 12" />
					<path stroke="#FFF" d="M3 6L21 6" />
					<path stroke="#FFF" d="M3 18L21 18" />
				</>
			)}
		</svg>
	)
}

export default MenuIcon
