import { imagesPending, imagesSuccess, imagesFailure } from '../actions/imagesActions'
import { getAllImageURLs } from '../../api/apiService'

export const getImagesURLs = (breed: string | null, replaceOld: boolean = false) => {
	return async (dispatch: any) => {
		dispatch(imagesPending(replaceOld))
		try {
			const urls = await getAllImageURLs(breed)
			if (!urls) {
				dispatch(imagesFailure('URLs is undefined'))
			} else {
				dispatch(imagesSuccess(urls!, replaceOld))
			}
		} catch (e) {
			dispatch(imagesFailure(e))
		}
	}
}
