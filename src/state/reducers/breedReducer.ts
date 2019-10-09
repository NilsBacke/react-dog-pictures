import { BreedState } from '..'
import {
	BreedActionTypes,
	BREED_PENDING,
	BREED_SUCCESS,
	BREED_FAILURE,
	BREED_SET_FILTER
} from '../actions/breedActions'

const initialState: BreedState = {
	isBreedsLoading: false,
	breeds: [],
	breedsError: '',
	currentFilter: null
}

export function breedReducer(state = initialState, action: BreedActionTypes): BreedState {
	switch (action.type) {
		case BREED_PENDING:
			return {
				isBreedsLoading: true,
				breedsError: '',
				breeds: [],
				currentFilter: null
			}
		case BREED_SUCCESS:
			return {
				...state,
				isBreedsLoading: false,
				breedsError: '',
				breeds: action.payload
			}
		case BREED_FAILURE:
			return {
				...state,
				isBreedsLoading: false,
				breedsError: action.payload,
				breeds: []
			}
		case BREED_SET_FILTER:
			return {
				...state,
				currentFilter: action.payload
			}
		default:
			return state
	}
}
