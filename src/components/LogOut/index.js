import React, { useContext } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import './LogOut.scss'
import { deleteLocalStorage } from 'services'
import UserContext from 'context/UserContext';
import { useHistory } from 'react-router';
import { USER_INFO_KEY } from 'configuration';


export default function LogOut() {
	const history = useHistory()
	const { user, setuser } = useContext(UserContext)
	function handleClick(e) {
		deleteLocalStorage(USER_INFO_KEY)
		setuser({})
		history.replace('/login')

	}

	return (
		<div>
			<AiOutlineLogout className="icon" onClick={handleClick} />
		</div>
	)
}
