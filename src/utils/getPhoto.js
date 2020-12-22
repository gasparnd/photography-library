const API = 'https://source.unsplash.com/random/'

const getPhoto = async () => {
	for (let i = 0 ; i < 10; i++) {
		const sizies = ['250x250', '250x500', '250x750']
		const randomSize = Math.floor(Math.random() * 3)
		const size = sizies[randomSize]
		const response = await fetch(`https://source.unsplash.com/random/${size}`)
		return response
	}
}

export default getPhoto