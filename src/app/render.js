import Home from '../pages/Home'
import Header from '../templates/Header'
import Footer from '../templates/Footer'

const render = async () => {
	const header = null || document.querySelector('.header')
	const content = null || document.querySelector('.content')
	const footer = null || document.querySelector('.footer')

	header.innerHTML = await Header()
	content.innerHTML = await Home()
	footer.innerHTML = await Footer()
}

export default render