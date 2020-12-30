import Home from '../pages/Home'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import getPhoto from '../utils/getPhoto'

const render = async () => {
	const header = null || document.querySelector('.header')
	const content = null || document.querySelector('.content')
	const footer = null || document.querySelector('.footer')

	header.innerHTML = await Header()
	content.innerHTML = await Home()
	
	const photos = await getPhoto()
	console.log(photos)
	let pines

	photos.results.forEach( photo => { 
		console.log(photo)
		pines = `
			<img src="${photo.urls.regular}" width="400" height="250" alt="${photo.alt_description}">
			<p>${photo.user.username}</p>
		`
		$('.appContent-wraper').append(pines)
	})
	

}

export default render