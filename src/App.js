import Bg from './Bg'
import styled from 'styled-components'
import Zuncho from './Zuncho'
import Main from './Main'
import './i18n'
const Wrap = styled.div``

function App() {
	return (
		<Wrap>
			<Bg />
			<Zuncho />
			<Main />
		</Wrap>
	)
}

export default App
