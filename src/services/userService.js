import { getLocalStorage } from 'services'

export function isLogged() {

    if (getLocalStorage('token') && getLocalStorage('userInfo'))
        return true
    else return false


}