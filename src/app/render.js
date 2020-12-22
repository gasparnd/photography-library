import Home from '../pages/Home'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import getPhoto from '../utils/getPhoto'

const render = async () => {
	const header = null || document.querySelector('.header')
	const content = null || document.querySelector('.content')
	const footer = null || document.querySelector('.footer')

	header.innerHTML = await Header()
	const photo = await getPhoto()
	content.innerHTML = await Home()
}

export default render