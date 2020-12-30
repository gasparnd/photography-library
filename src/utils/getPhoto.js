const CLIENT_ID = 'OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g'
const pageNum = 1
const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&page=${pageNum}` //https://source.unsplash.com/random/
const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&page=1&query=all`
//LIST https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&page=1
const getPhoto = async (search) => {
	const urlApi = search ? `${APISEARCH}${search}` : API
	try {
		const response = await fetch(APISEARCH)
		const data = await response.json()
		return data
	} catch (error) {
		return console.log(new Error(`Fetch Error: ${error}`))
	}
}

export default getPhoto