

export function deleteLocalStorage(key) {
	if (localStorage.getItem(key)) {
		localStorage.clear(key)
		return true
	} else return false

}
export function getLocalStorage(key) {
	const value = JSON.parse(localStorage.getItem(key))
	if (!value) return null
	const today = new Date().getTime()

	if (today < value.ttl)
		return value.data
	else
		return null

}

export function saveLocalStorage(key, data) {
	const dataSave = {
		data: data,
		ttl: new Date().getTime() + (24 * 60 * 60 * 1000) //date + 24h in msec
	}
	localStorage.setItem(key, JSON.stringify(dataSave))
}