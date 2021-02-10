import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import i18n from '../i18n'

import { writeStorage, useLocalStorage } from '@rehooks/local-storage'

const Langs = ({ className, options }) => {
	const [lang] = useLocalStorage('lang', 'es')
	const [active, setActive] = useState(lang)

	useEffect(() => {
		i18n.changeLanguage(active)
		writeStorage('lang', active)
	}, [active])

	return (
		<ul className={className}>
			{options &&
				Object.entries(options).map(([key, value], i) => (
					<li key={key}>
						<a
							href="#"
							onClick={() => setActive(key)}
							className={key == active ? 'active' : ''}
						>
							{value}
						</a>
					</li>
				))}
		</ul>
	)
}

export default styled(Langs)`
	display: flex;
	list-style: none;
	padding: 0;
	justify-content: flex-end;
	margin: 0 0 0 auto;
	font-style: italic;
	@media only screen and (min-width: 768px) {
		margin-right: 2rem;
	}
	a {
		text-decoration: none;
		color: #6b6869;
		display: inline-block;
		line-height: 1;
		&.active {
			font-weight: 600;
			color: #fff;
		}
	}
	li:not(:last-of-type) {
		&:after {
			color: #6b6869;
			display: inline-block;
			content: '/';
			margin-right: 5px;
			margin-left: 5px;
		}
	}
`
