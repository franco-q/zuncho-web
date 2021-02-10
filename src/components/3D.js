import React from 'react'
import BackBtn from './BackBtn'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const variants = {
	y: -50,
	opacity: 0
}

const Wrap = styled.div``

const DDD = props => {
	const { t } = useTranslation()
	return (
		<Wrap>
			<BackBtn />
			<motion.div variants={variants} className="d-flex justify-content-between w-100 mb-5">
				<h1 className="pr-5">{t('Diseño y Animación 3D')}</h1>
			</motion.div>
			<motion.div variants={variants} className="flex-grow-1">
				<h4 className="w-75 mb-5">{t('page 3d txt')}</h4>
				<ul className="font-italic list-unstyled">
					<li>- {t('page 3d li 1')}</li>
					<li>- {t('page 3d li 2')}</li>
					<li>- {t('page 3d li 3')}</li>
					<li>- {t('page 3d li 4')}</li>
					<li>- {t('page 3d li 5')}</li>
					<li>- {t('page 3d li 6')}</li>
					<li>- {t('page 3d li 7')}</li>
				</ul>
			</motion.div>
		</Wrap>
	)
}

export default DDD
