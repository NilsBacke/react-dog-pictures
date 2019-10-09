import React from 'react'
import './Page.css'
import Select from 'react-select'
import { connect } from 'react-redux'
import { getBreeds } from '../state/operations/breedOperations'
import { AppState } from '../state/reducers'
import { breedSetFilter } from '../state/actions/breedActions'
import { getImagesURLs } from '../state/operations/imagesOperations'

type ValueType = { value: string | null; label: string }

interface DropDownProps {
	isBreedsLoading: boolean
	breeds: string[]
	breedsError: string
	getBreeds: () => void
	options: ValueType[]
	currentFilter: string | null
	breedSetFilter: (filter: string) => void
}

export class DropDownComponent extends React.Component<DropDownProps, any> {
	componentDidMount() {
		this.props.getBreeds()
	}

	render() {
		const currFilter = breedToOption(this.props.currentFilter)
		return (
			<div style={styles.wrapper as any}>
				<Select
					name='Breeds'
					options={this.props.options.length > 0 ? this.props.options : []}
					className='select'
					placeholder='Filter by breed...'
					value={currFilter.value != null ? currFilter : undefined}
					onChange={newVal => {
						this.props.breedSetFilter((newVal! as any)['value']) // typescript work-around
					}}
				></Select>
			</div>
		)
	}
}

const breedToOption = (breed: string | null) => {
	if (!!breed) {
		return {
			label: breed[0].toUpperCase() + breed.slice(1),
			value: breed
		}
	} else {
		return {
			label: 'None',
			value: null
		}
	}
}

const mapStateToProps = (state: AppState) => ({
	isBreedsLoading: state.breedReducer.isBreedsLoading,
	breeds: state.breedReducer.breeds,
	breedsError: state.breedReducer.breedsError,
	currentFilter: state.breedReducer.currentFilter,
	options:
		state.breedReducer.breeds.length > 0
			? [
					{
						label: 'None',
						value: null
					},
					...state.breedReducer.breeds.map(breedToOption)
			  ]
			: []
})

const mapDispatchToProps = (dispatch: any) => ({
	getBreeds: () => dispatch(getBreeds()),
	breedSetFilter: (filter: string | null) => {
		dispatch(breedSetFilter(filter))
		dispatch(getImagesURLs(filter, true))
	}
})

const styles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		flex: 1
	}
}

export const DropDown = connect(
	mapStateToProps,
	mapDispatchToProps
)(DropDownComponent)
