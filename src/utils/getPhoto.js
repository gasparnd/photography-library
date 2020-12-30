const CLIENT_ID = 'OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g'
const pageNum = 1
const API = `https://api.unsplash.com/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&page=${pageNum}` //https://source.unsplash.com/random/
const APISEARCH = `https://api.unsplash.com/search/photos?client_id=OFUMjvzxwguutNlHSxBHkxyQLowhfNAkPLMnG_0i53g&page=1&query=`

const getPhoto = async (search = 'all') => {
	const urlApi = search ? `${APISEARCH}${search}` : `${APISEARCH}all`
	try {
		const response = await fetch(urlApi)
		const data = await response.json()
		return data
	} catch (error) {
		return console.log(new Error(`Fetch Error: ${error}`))
	}
}

export default getPhoto