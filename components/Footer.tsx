import React from 'react'
import styled from '@emotion/styled'

const Wrap = styled.div`
	background: #29323c;

	* {
		box-sizing: border-box;
	}
	.flip {
		width: 160px;
		height: 48px;
		perspective: 500px;
		top: 50%;
		left: 50%;
	}
	.flip a {
		font-weight: 400;
		text-transform: uppercase;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		transform-style: preserve-3d;
		transform: translateZ(-25px);
		transition: transform 0.3s;
		cursor: pointer;
	}
	.flip a .front,
	.flip a .back {
		margin: 0;
		width: 160px;
		height: 48px;
		line-height: 48px;
		position: absolute;
		text-align: center;
		letter-spacing: 0.4em;
	}
	.flip a .front {
		background-color: #29323c;
		color: #fff;
		transform: rotateY(0) translateZ(24px);
	}
	.flip a .back {
		background-color: rgba(255, 255, 255, 0);
		color: rgba(34, 34, 34, 0);
		transform: rotateX(90deg) translateZ(24px);
		overflow: hidden;
	}
	.flip a .back:after {
		content: '';
		position: absolute;
		top: -32%;
		left: -10%;
		width: 120%;
		height: 50%;
		background: #29323c;
		transform: rotate(8deg);
		transition: all 0.5s ease;
		transition-delay: 0.15s;
	}
	.flip a:hover {
		transform: translateZ(-24px) rotateX(-90deg);
	}
	.flip a:hover .front {
		background: #000;
		transition: all 0.8s ease;
	}
	.flip a:hover .back {
		color: #29323c;
		transition: color 0.4s linear;
		background: #FFF;
	}
	.flip a:hover .back:after {
		transform: rotate(6deg) translate(100px, -18px);
	}
`

const Btn = styled.button`
	background-color: #48637a;
	&:hover {
		background-color: #29323c;
	}
`

/**
 *

body {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  background: #29323c;
}








 */
const Footer = () => {
	return (
		<Wrap>
			<div className="container px-5 py-24 mx-auto text-white">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-4xl md:text-7xl font-medium title-font mb-4 text-white font-kanit">
						CONTACTANOS
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
					</p>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="name" className="leading-7 text-sm text-white">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="email" className="leading-7 text-sm text-white">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label htmlFor="message" className="leading-7 text-sm text-white">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
						</div>
						<div className="p-2 w-full flex justify-center">
							{/* <Btn className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">
								Button
							</Btn> */}

							<div className="flip">
								<a
									href="https://dribbble.com/shots/2507318-start-rollover"
									target="_blank"
								>
									<div className="front">ENVIAR</div>
									<div className="back">ENVIAR</div>
								</a>
							</div>
						</div>
						<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
							<a className="text-indigo-500">example@email.com</a>
							<p className="leading-normal my-5">
								49 Smith St.
								<br />
								Saint Cloud, MN 56301
							</p>
							<span className="inline-flex">
								<a className="text-white">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
									</svg>
								</a>
								<a className="ml-4 text-white">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
									</svg>
								</a>
								<a className="ml-4 text-white">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<rect
											width="20"
											height="20"
											x="2"
											y="2"
											rx="5"
											ry="5"
										></rect>
										<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
									</svg>
								</a>
								<a className="ml-4 text-white">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
									</svg>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</Wrap>
	)
}

export default Footer
