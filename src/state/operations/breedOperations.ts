import { breedPending, breedFailure, breedSuccess } from '../actions/breedActions'
import { getAllBreeds } from '../../api/apiService'

export const getBreeds = () => {
	return async (dispatch: any) => {
		dispatch(breedPending())
		try {
			const breeds = await getAllBreeds()

			if (!breeds) {
				dispatch(breedFailure('breeds is undefined'))
			} else {
				dispatch(breedSuccess(breeds))
			}
		} catch (e) {
			dispatch(breedFailure(e))
		}
	}
}
