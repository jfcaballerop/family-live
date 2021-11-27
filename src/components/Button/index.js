import React from 'react'
import { BiPlus } from "react-icons/bi";
import './button.scss'

const Button = ({ children, handleClick, icon, customClass, Component }) => {
	return (
		<button className={`btn ${customClass} || btn-complementary`} onClick={handleClick}>
			{children}
			{icon && <BiPlus style={{ fontSize: '1.5em', marginLeft: '1em', width: '1em', fontWeight: 'bolder' }}></BiPlus>}
		</button>
	)
}

export default Button
