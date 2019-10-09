import React from 'react'
import { PacmanLoader } from 'react-spinners'

export const Loader: React.FC<{}> = () => {
	return <PacmanLoader sizeUnit={'px'} size={30} loading color='#36D7B7' />
}
