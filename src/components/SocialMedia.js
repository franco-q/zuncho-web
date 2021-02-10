import React from 'react'
import BackBtn from './BackBtn'
import { useTranslation } from 'react-i18next'

const SocialMedia = () => {
	const { t } = useTranslation()
	return (
		<div>
			<div className="d-flex justify-content-between w-100 mb-5">
				<h1 className="pr-5">{t('page sm title')}</h1>
				<div>
					<BackBtn />
				</div>
			</div>
			<div className="flex-grow-1">
				<h4 className="w-75 mb-5">{t('page sm txt')}</h4>
				<ul className="font-italic list-unstyled">
					<li>- {t('page sm li 1')}</li>
					<li>- {t('page sm li 2')}</li>
					<li>- {t('page sm li 3')}</li>
					<li>- {t('page sm li 4')}</li>
					<li>- {t('page sm li 5')}</li>
				</ul>
			</div>
		</div>
	)
}

export default SocialMedia
