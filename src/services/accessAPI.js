import { TOKEN_DEMO } from 'configuration'
import { USER_INFO_KEY } from 'configuration';
const DEMO = { user: 'demo@demo.com', password: 'demo' };


function doGPostLogin(props) {
    const { email, password } = props

    if (email === DEMO.user && password === DEMO.password) {
        localStorage.setItem('token', TOKEN_DEMO)
        localStorage.setItem(USER_INFO_KEY, DEMO.user)
        return DEMO
    } else {
        throw new Error('Login Failed!')
    }
}

export { doGPostLogin };