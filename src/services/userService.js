import { getLocalStorage } from 'services'
import { USER_INFO_KEY } from 'configuration';

export function isLogged() {

    if (getLocalStorage('token') && getLocalStorage(USER_INFO_KEY))
        return true
    else return false


}