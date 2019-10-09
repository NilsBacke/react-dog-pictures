const axios = require('axios')

export const getAllBreeds = async (): Promise<string[] | undefined> => {
	try {
		const response = await axios.get('https://dog.ceo/api/breeds/list/all')
		return Object.keys(response.data.message)
	} catch (e) {
		console.log(e)
	}
}

export const getAllImageURLs = async (breed: string | null): Promise<string[] | undefined> => {
	try {
		const response = await axios.get(
			!!breed
				? `https://dog.ceo/api/breed/${breed}/images/random/10`
				: `https://dog.ceo/api/breeds/image/random/10`
		)
		return response.data.message
	} catch (e) {
		console.log(e)
	}
}

export const getImageFromURL = async (url: string) => {
	try {
		const response = await fetch(url)
		return response.blob()
	} catch (e) {
		console.log(e)
	}
}
