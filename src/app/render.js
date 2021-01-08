import Home from '../pages/Home'
import Header from '../templates/Header'
import PhotosLayout from '../templates/PhotosLayout'
import getPhoto from '../utils/getPhoto'

const render = async () => {
	const header = null || document.querySelector('.header')
	const content = null || document.querySelector('.content')

	header.innerHTML = await Header()
	content.innerHTML = await Home()

	const searchInput = document.querySelector('#search-btn')
	const contentWraper = document.querySelector('.appContent-wraper')
	contentWraper.innerHTML = '<div class="pines-container"></div>'
	const photos = await getPhoto()
	PhotosLayout(photos)

	searchInput.addEventListener('click', async () => {
		const contentWraper = document.querySelector('.appContent-wraper')
		const searchValue = document.querySelector('.search-input').value
		const pinesConstainer = document.querySelector('.pines-container')
		if (pinesConstainer) {
    		contentWraper.removeChild(pinesConstainer)
		}
		contentWraper.innerHTML = '<div class="pines-container"></div>'
		const photos = await getPhoto(searchValue)
		PhotosLayout(photos)
	})
}

export default render