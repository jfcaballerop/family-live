import React, { useContext } from 'react'
import UserContext from 'context/UserContext';

export default function Wellcome() {
    const { user, setuser } = useContext(UserContext)

    return (
        <div>
            <h1>Family Live App</h1>
            <p>Wellcome {user.user}</p>
        </div>
    )
}
