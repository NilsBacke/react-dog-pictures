import { ImagesState } from '..'
import { ImagesActionTypes, IMAGES_PENDING, IMAGES_SUCCESS, IMAGES_FAILURE } from '../actions/imagesActions'

const initialState: ImagesState = {
	isImagesLoading: false,
	images: [],
	imagesError: ''
}

export function imagesReducer(state = initialState, action: ImagesActionTypes): ImagesState {
	switch (action.type) {
		case IMAGES_PENDING:
			return action.payload
				? {
						isImagesLoading: true,
						imagesError: '',
						images: []
				  }
				: { ...state }
		case IMAGES_SUCCESS:
			return {
				isImagesLoading: false,
				imagesError: '',
				images: action.meta
					? /* replace old */ action.payload
					: Array.from(new Set([...state.images, ...action.payload])) // or append and remove duplicates
			}
		case IMAGES_FAILURE:
			return {
				isImagesLoading: false,
				imagesError: action.payload,
				images: []
			}
		default:
			return state
	}
}
