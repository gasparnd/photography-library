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
			<div class="pin">
				<img src="${photo.urls.regular}" width="400" height="300" alt="${photo.alt_description}">
				<div class="pin-options">
					<div class="download-pin">
						<a href="${photo.links.download}">Download</a>
					</div>
					<div class="pin-user">
						<p>${photo.user.username}</p>
						<img src="${photo.user.profile_image.small}" width="25" height="25" alt="${photo.user.username}'s profile image">
					</div>
				</div>	
			</div>
		`
		$('.appContent-wraper').append(pines)
	})
	

}

export default render