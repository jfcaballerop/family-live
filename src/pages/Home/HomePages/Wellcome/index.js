import React from 'react'
import { getLocalStorage } from 'services';
import { USER_INFO_KEY } from 'configuration';
import './wellcome.scss'

export default function Wellcome() {
    const user = getLocalStorage(USER_INFO_KEY)
    return (
        <div>
            <h1>
                Wellcome {user}
            </h1>
        </div>
    )
}
