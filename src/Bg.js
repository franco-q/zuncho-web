import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import pallete from './img/pallete.jpg'
import logo from './img/logo.png'

const Canvas = styled.canvas`
	position: fixed;
	top: 0;
	left: 0;
	width: ${props => props.w}px;
	height: ${props => props.h}px;
`

function map(value, start1, stop1, start2, stop2) {
	return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
}

function lerp(start, end, amt) {
	return (1 - amt) * start + amt * end
}

export default function () {
	const container = useRef()

	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	var scene, renderer, camera
	var terrain
	var zuncho

	var mouse = { x: 0, y: 0, xDamped: 0, yDamped: 0 }
	var isMobile = typeof window.orientation !== 'undefined'

	function init() {
		sceneSetup()
		sceneElements()
		sceneTextures()
		render()

		if (isMobile) {
			window.addEventListener('touchmove', onInputMove, { passive: false })
		} else {
			window.addEventListener('mousemove', onInputMove)
		}

		window.addEventListener('resize', resize)
		resize()
	}

	function sceneSetup() {
		scene = new THREE.Scene()
		var fogColor = new THREE.Color(0x333333)

		scene.fog = new THREE.Fog(fogColor, 0, 400)
		scene.add(new THREE.AmbientLight(0xffffff, 1))

		camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000)
		camera.position.y = 8
		camera.position.z = 4

		zuncho = new THREE.Mesh(
			new THREE.PlaneGeometry(5, 5),
			new THREE.MeshPhongMaterial({
				map: new THREE.TextureLoader().load(logo),
				color: 0xffffff,
				transparent: true
			})
		)
		zuncho.position.z = -30
		zuncho.position.y = 10

		scene.add(zuncho)

		renderer = new THREE.WebGLRenderer({
			canvas: container.current,
			antialias: true
		})
		renderer.setPixelRatio = devicePixelRatio
		renderer.setSize(width, height)
	}

	function sceneElements() {
		var geometry = new THREE.PlaneBufferGeometry(100, 400, 400, 400)

		var uniforms = {
			time: { type: 'f', value: 0.0 },
			scroll: { type: 'f', value: 0.0 },
			distortCenter: { type: 'f', value: 0.1 },
			roadWidth: { type: 'f', value: 1 },
			pallete: { type: 't', value: null },
			speed: { type: 'f', value: 0.5 },
			maxHeight: { type: 'f', value: 20.0 },
			color: new THREE.Color(1, 1, 1)
		}

		var material = new THREE.ShaderMaterial({
			uniforms: THREE.UniformsUtils.merge([THREE.ShaderLib.basic.uniforms, uniforms]),
			vertexShader: document.getElementById('custom-vertex').textContent,
			fragmentShader: document.getElementById('custom-fragment').textContent,
			wireframe: !true,
			fog: true
		})

		terrain = new THREE.Mesh(geometry, material)
		terrain.position.z = -180
		terrain.rotation.x = -Math.PI / 2

		scene.add(terrain)
	}

	function sceneTextures() {
		new THREE.TextureLoader().load(pallete, texture => {
			terrain.material.uniforms.pallete.value = texture
			terrain.material.needsUpdate = true
		})
	}

	function onInputMove(e) {
		e.preventDefault()

		var x, y
		if (e.type == 'mousemove') {
			x = e.clientX
			y = e.clientY
		} else {
			x = e.changedTouches[0].clientX
			y = e.changedTouches[0].clientY
		}

		mouse.x = x
		mouse.y = y
	}

	function resize() {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
		renderer.setSize(window.innerWidth, window.innerHeight)
	}

	function render() {
		requestAnimationFrame(render)

		mouse.xDamped = lerp(mouse.xDamped, mouse.x, 0.1)
		mouse.yDamped = lerp(mouse.yDamped, mouse.y, 0.1)

		var time = performance.now() * 0.001
		terrain.material.uniforms.time.value = time
		terrain.material.uniforms.scroll.value = time + map(mouse.yDamped, 0, height, 0, 0.4)
		terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.1
		terrain.material.uniforms.roadWidth.value = map(mouse.xDamped, 0, width, 1, 5)

		camera.position.y = map(mouse.yDamped, 0, height, 4, 11)

		renderer.render(scene, camera)
	}

	useEffect(() => {
		init()
		return () => {}
	}, [])

	return <Canvas ref={container} w={width} h={height} />
}
