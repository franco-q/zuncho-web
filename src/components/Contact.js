import React from 'react'
import BackBtn from './BackBtn'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
const Form = styled.form`
	margin-bottom: 2rem;
`
const Input = styled.div`
	padding: 0.2rem;
	margin-bottom: 0.8rem;
	background-color: #dddddd;
	border-radius: 0.4rem;
	input,
	textarea {
		display: block;
		width: 100%;
		border: 0;
		background-color: #dddddd;
		outline: none;
	}
`
const Label = styled.label`
	margin-bottom: 0;
	font-size: 1rem;
	line-height: 1rem;
`
const Submit = styled.button`
	border: 0;
	background-color: #7a368c;
	border-radius: 0.6rem;
	color: #fff;
	margin-left: auto;
	font-size: 12px;
	font-weight: bold;
	width: 87px;
	height: 30px;
	line-height: 35px;
`
const Footer = styled.div`
	font-size: 0.65rem;
	a {
		margin-bottom: 0.2rem;
		display: block;
		color: inherit;
		white-space: nowrap;
	}
`

function Contact() {
	const { t } = useTranslation()

	return (
		<div>
			<div className="d-flex justify-content-between w-100 mb-5">
				<h1 className="pr-5 d-md-none">{t('Contacto')} </h1>
				<div>
					<BackBtn />
				</div>
			</div>
			<div className="flex-grow-1">
				<Form>
					<div>
						<Label>Nombre y Apellido</Label>
						<Input>
							<input />
						</Input>
					</div>
					<div>
						<Label>Email</Label>
						<Input>
							<input />
						</Input>
					</div>
					<div>
						<Label>Mensaje</Label>
						<Input>
							<textarea resize="none"></textarea>
						</Input>
					</div>
					<div className="d-flex">
						<Submit>Enviar</Submit>
					</div>
				</Form>
				<Footer className="row">
					<div className="col-md-6 mb-3">
						<h4 className="mb-1">Argentina:</h4>
						<span className="d-block">Mar del Plata | Oficina Comercial.</span>
						<a href="" className="d-block">
							E-mail: info@zunchomultimedia.com.ar
						</a>
						<a href="" className="d-block">
							Tel:
						</a>
					</div>
					<div className="col-md-6 mb-3">
						<h4 className="mb-1">Argentina:</h4>
						<span className="d-block">Palermo, Buenos Aires | Oficina Postal.</span>
						<a href="" className="d-block">
							E-mail: info@zunchomultimedia.com.ar
						</a>
						<a href="" className="d-block">
							Tel:
						</a>
					</div>
					<div className="col-md-6 mb-3">
						<h4 className="mb-1">Italia:</h4>
						<span className="d-block">Roma | Oficina Comercial.</span>
						<a href="" className="d-block">
							E-mail: info@zunchomultimedia.com.it
						</a>
						<a href="" className="d-block">
							Tel: +393516003463
						</a>
					</div>
					<div className="col-md-6 mb-3">
						<h4 className="mb-1">España:</h4>
						<span className="d-block">Palma de Mallorca | Oficina Comercial.</span>
						<a href="" className="d-block">
							E-mail: info@zunchomultimedia.com.es
						</a>
						<a href="" className="d-block">
							Tel: +34674942192
						</a>
					</div>
				</Footer>
			</div>
		</div>
	)
}

export default Contact
