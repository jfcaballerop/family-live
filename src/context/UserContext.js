import React, { useState } from 'react'

const UserContext = React.createContext({})


export function UserContextprovider({ children }) {
    const [user, setuser] = useState([]);

    return <UserContext.Provider value={{ user, setuser }}>
        {children}
    </UserContext.Provider>
}

export default UserContext;
