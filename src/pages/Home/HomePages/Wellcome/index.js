import React from 'react'
import { getLocalStorage } from 'services';
import { USER_INFO_KEY } from 'configuration';

export default function Wellcome() {
    const user = getLocalStorage(USER_INFO_KEY)
    return (
        <div>
            <h1>Family Live App</h1>
            <p>Wellcome {user}</p>
        </div>
    )
}
