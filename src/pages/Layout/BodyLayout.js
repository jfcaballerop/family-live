import React from 'react'

const BodyLayout = ({ children }) => {
	return (
		<>
			<div className='Principal'>
				<div className='leftSide'>
				</div>
				<div className='centerContent'>
					{children}
				</div>
				<div className='rightSide'>
				</div>
			</div>
		</>
	)
}

export default BodyLayout
