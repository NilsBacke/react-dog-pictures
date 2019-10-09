import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Page } from './components/Page'
import { rootReducer } from './state/reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Page />
		</Provider>
	)
}

export default App
