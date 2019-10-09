import React from 'react'
import './Page.css'
import { connect } from 'react-redux'
import { AppState } from '../state/reducers'
import { DropDown } from './DropDown'
import { getImagesURLs } from '../state/operations/imagesOperations'
import InfiniteScroll from 'react-infinite-scroller'
import { Loader } from './Loader'

interface PageProps {
	images: string[]
	isImagesLoading: boolean
	imagesError: string
	breedsError: string
	isBreedsLoading: boolean
	getImagesURLs: (breed: string | null) => void
	currentFilter: string | null
}

export class PageComponent extends React.Component<PageProps, any> {
	componentDidMount() {
		this.props.getImagesURLs(this.props.currentFilter)
	}

	renderGrid() {
		const { isImagesLoading, imagesError, breedsError, images, isBreedsLoading } = this.props

		if (!!imagesError || !!breedsError) {
			return (
				<div>
					<p>{imagesError}</p>
				</div>
			)
		}

		if (isImagesLoading || isBreedsLoading) {
			return (
				<div style={styles.wrapper as any}>
					<Loader />
				</div>
			)
		}

		if (!!images) {
			return (
				<InfiniteScroll
					pageStart={0}
					loader={
						<div style={styles.wrapper as any}>
							<Loader />
						</div>
					}
					loadMore={() => this.props.getImagesURLs(this.props.currentFilter)}
					hasMore={true || false}
					threshold={100}
				>
					<div style={styles.wrapper as any}>
						{this.props.images.map((url, index) => (
							<img key={String(index)} src={url} alt='dog' style={{ margin: 12, width: '100%', maxWidth: 500, height: '100%', maxHeight: 500 }} />
						))}
					</div>
				</InfiniteScroll>
			)
		}

		return <div></div>
	}

	render() {
		return (
			<div>
				<DropDown />
				{this.renderGrid()}
			</div>
		)
	}
}

const mapStateToProps = (state: AppState) => ({
	images: state.imagesReducer.images,
	isImagesLoading: state.imagesReducer.isImagesLoading,
	imagesError: state.imagesReducer.imagesError,
	isBreedsLoading: state.breedReducer.isBreedsLoading,
	currentFilter: state.breedReducer.currentFilter,
	breedsError: state.breedReducer.breedsError
})

const mapDispatchToProps = (dispatch: any) => ({
	getImagesURLs: (breed: string | null) => dispatch(getImagesURLs(breed))
})

const styles = {
	wrapper: {
		marginTop: 20,
		flexWrap: 'wrap',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	}
}

export const Page = connect(
	mapStateToProps,
	mapDispatchToProps
)(PageComponent)
