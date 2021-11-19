import React from 'react'
import { BiPlus } from "react-icons/bi";
import './button.scss'

const Button = ({ children, handleClick }) => {
	return (
		<button className="btn btn-secondary-b" onClick={handleClick}>
			{children}
			<BiPlus style={{ fontSize: '1.5em', marginLeft: '1em', width: '1em', fontWeight: 'bolder' }}></BiPlus>
		</button>
	)
}

export default Button
