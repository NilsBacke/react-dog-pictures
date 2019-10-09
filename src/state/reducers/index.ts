import { combineReducers } from 'redux'
import { breedReducer } from './breedReducer'
import { imagesReducer } from './imagesReducer'

export const rootReducer = combineReducers({
	breedReducer,
	imagesReducer
})

export type AppState = ReturnType<typeof rootReducer>
