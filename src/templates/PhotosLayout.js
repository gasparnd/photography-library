const PhotosLayout = (photos) => {
	photos.results.forEach( photo => { 
		console.log(photo)
		let pines = `
			<article class="pin">
				<img src="${photo.urls.regular}" width="400" height="300" alt="${photo.alt_description}">
				<div class="pin-options">
					<div class="download-pin">
						<a target="_blank" href="${photo.links.download}">Download</a>
					</div>
					<div class="pin-user">
						<p>${photo.user.username}</p>
						<img src="${photo.user.profile_image.small}" width="25" height="25" alt="${photo.user.username}'s profile image">
					</div>
				</div>	
			</article>
		`
		$('.pines-container').append(pines)
	})
}

export default PhotosLayout