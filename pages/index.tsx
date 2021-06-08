import React from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
const links = [
	'PRODUCTO',
	'MEDICINA Y SALUD',
	'CHARACTER',
	'ARCH VIZ',
	'VFX',
	'INTERACTIVE',
	'MOTION GRAPHICS',
	'GRAPHICS'
]

const index = () => {
	return (
		<div>
			<Navbar />
			<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
				<div className="relative z-30 p-5 md:max-w-2xl">
					<h2 className="text-5xl text-white text-justify">
						A CREATIVE PRODUCTION PARTNER SPECIALIZING IN MULTI-CHANNEL CONTENT CREATION
						&amp; STORYTELLING
					</h2>
				</div>
				<video
					autoPlay
					loop
					muted
					className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
				>
					<source
						src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</header>
			{links.map((name: string, i: number) => (
				<Section {...{ name }} />
			))}
		</div>
	)
}

export default index
