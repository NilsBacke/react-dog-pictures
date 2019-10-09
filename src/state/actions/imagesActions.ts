export const IMAGES_PENDING = 'IMAGES_PENDING'
export const IMAGES_SUCCESS = 'IMAGES_SUCCESS'
export const IMAGES_FAILURE = 'IMAGES_FAILURE'

interface ImagesPendingAction {
	type: typeof IMAGES_PENDING
	payload: boolean // replaceOld
}

interface ImagesSuccessAction {
	type: typeof IMAGES_SUCCESS
	payload: string[]
	meta: boolean
}

interface ImagesFailureAction {
	type: typeof IMAGES_FAILURE
	payload: string
}

export type ImagesActionTypes = ImagesPendingAction | ImagesSuccessAction | ImagesFailureAction

export function imagesPending(replaceOld: boolean): ImagesActionTypes {
	return {
		type: IMAGES_PENDING,
		payload: replaceOld
	}
}

export function imagesSuccess(images: string[], replaceOld: boolean): ImagesActionTypes {
	return {
		type: IMAGES_SUCCESS,
		payload: images,
		meta: replaceOld
	}
}

export function imagesFailure(error: string): ImagesActionTypes {
	return {
		type: IMAGES_FAILURE,
		payload: error
	}
}
