import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import './LogOut.scss'
import { deleteLocalStorage } from 'services'
import { useLocation } from 'wouter';



export default function LogOut() {
    const [path, pushLocation] = useLocation()

    function handleClick(e) {
        deleteLocalStorage('token')
        pushLocation('/Login')

    }

    return (
        <div>
            <AiOutlineLogout className="icon" onClick={handleClick} />
        </div>
    )
}
