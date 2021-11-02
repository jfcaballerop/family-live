

export function deleteLocalStorage(key) {
    if (localStorage.getItem(key)) {
        localStorage.clear(key)
        return true
    } else return false

}
export function getLocalStorage(key) {
    const value = localStorage.getItem(key)
    return value

}

