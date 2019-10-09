export interface BreedState {
	breeds: string[]
	isBreedsLoading: boolean
	breedsError: string
	currentFilter: string | null
}

export interface ImagesState {
	images: string[]
	isImagesLoading: boolean
	imagesError: string
}
