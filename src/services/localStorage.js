

export function deleteLocalStorage(key) {
    if (localStorage.getItem(key)) {
        localStorage.clear(key)
        return true
    } else return false

}