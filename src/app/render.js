import Home from '../pages/Home'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import PhotosLayout from '../templates/PhotosLayout'
import getPhoto from '../utils/getPhoto'

const render = async () => {
	const header = null || document.querySelector('.header')
	const content = null || document.querySelector('.content')
	const footer = null || document.querySelector('.footer')

	header.innerHTML = await Header()
	content.innerHTML = await Home()

	const searchInput = document.querySelector('#search-btn')
	searchInput.addEventListener('click', async () => {
		const searchValue = document.querySelector('.search-input').value
		const photos = await getPhoto(searchValue)
		PhotosLayout(photos)
	})	

}

export default render