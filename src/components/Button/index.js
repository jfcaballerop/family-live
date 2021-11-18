import React from 'react'
import { BiPlus } from "react-icons/bi";

const Button = ({ children }) => {
	return (
		<button>
			{children}
			<BiPlus></BiPlus>
		</button>
	)
}

export default Button
