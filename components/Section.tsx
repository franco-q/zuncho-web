import React, { FC } from 'react'

type Props = {
	name: string
}

const Section: FC<Props> = ({ name }) => {
	return (
		<div className="h-screen flex items-center justify-center">
			<h2>{name}</h2>
		</div>
	)
}

export default Section
