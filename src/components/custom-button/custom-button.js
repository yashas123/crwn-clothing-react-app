import React from 'react'

import './custom-button.scss'

export default function CustomButton({children, className='', ...otherProps}){
	return(
		<button className={`${className} custom-button`} {...otherProps}>
			{children}
		</button>
	)
}