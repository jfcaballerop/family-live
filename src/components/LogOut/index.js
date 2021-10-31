import React, { useContext } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import './LogOut.scss'
import { deleteLocalStorage } from 'services'
import { useLocation } from 'wouter';
import UserContext from 'context/UserContext';


export default function LogOut() {
    const [path, pushLocation] = useLocation()
    const { user, setuser } = useContext(UserContext)
    function handleClick(e) {
        deleteLocalStorage('token')
        pushLocation('/Login')
        setuser({})

    }

    return (
        <div>
            <AiOutlineLogout className="icon" onClick={handleClick} />
        </div>
    )
}
