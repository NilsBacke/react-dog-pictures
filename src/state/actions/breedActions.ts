export const BREED_PENDING = 'BREED_PENDING'
export const BREED_SUCCESS = 'BREED_SUCCESS'
export const BREED_FAILURE = 'BREED_FAILURE'
export const BREED_SET_FILTER = 'BREED_SET_FILTER'

interface BreedPendingAction {
	type: typeof BREED_PENDING
}

interface BreedSuccessAction {
	type: typeof BREED_SUCCESS
	payload: string[]
}

interface BreedFailureAction {
	type: typeof BREED_FAILURE
	payload: string
}

interface BreedSetFilterAction {
	type: typeof BREED_SET_FILTER
	payload: string | null
}

export type BreedActionTypes = BreedPendingAction | BreedSuccessAction | BreedFailureAction | BreedSetFilterAction

export function breedPending(): BreedActionTypes {
	return {
		type: BREED_PENDING
	}
}

export function breedSuccess(breeds: string[]): BreedActionTypes {
	return {
		type: BREED_SUCCESS,
		payload: breeds
	}
}

export function breedFailure(error: string): BreedActionTypes {
	return {
		type: BREED_FAILURE,
		payload: error
	}
}

export function breedSetFilter(filter: string | null): BreedActionTypes {
	return {
		type: BREED_SET_FILTER,
		payload: filter
	}
}
