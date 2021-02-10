import React from 'react'
import BackBtn from './BackBtn'
import { ReactComponent as Esp } from '../img/esp.svg'
import { ReactComponent as Ita } from '../img/ita.svg'
import { ReactComponent as Arg } from '../img/arg.svg'
import { useTranslation } from 'react-i18next'

const Locations = () => {
	const { t } = useTranslation()
	return (
		<div>
			<div className="d-flex justify-content-between w-100 mb-5">
				<h1 className="pr-5 d-md-none">{t('Nosotros')}</h1>
				<div>
					<BackBtn />
				</div>
			</div>
			<div className="flex-grow-1">
				<div className="row my-3">
					<div className="col-3">
						<Arg height={92} width={43} />
					</div>
					<div className="col-9">
						<h4>Argentina:</h4>
						<p>Mar del Plata | Oficina Comercial.</p>
						<p>Palermo, Buenos Aires | Oficina Postal.</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-3">
						<Ita height={81} width={71} />
					</div>
					<div className="col-9">
						<h4>Italia: </h4>
						<p>Roma | Oficina Comercial.</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-3">
						<Esp height={53} width={69} />
					</div>
					<div className="col-9">
						<h4>España:</h4>
						<p>Palma de Mallorca | Oficina Comercial.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Locations
