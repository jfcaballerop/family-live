const URL_LOGIN = '';
const DEMO = { user: 'demo@demo.com', password: 'demo' };
function doGPostLogin(props) {
    const { email, password } = props

    if (email === DEMO.user && password === DEMO.password) {
        return DEMO
    } else {
        throw new Error('Login Failed!')
    }
}

export { doGPostLogin };