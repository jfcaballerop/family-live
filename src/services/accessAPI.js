const URL_LOGIN = '';
const DEMO = { user: 'demo@demo.com', pass: 'demo' };
function doGPostLogin(props) {
    const { email, pass } = props

    if (email === DEMO.user && pass === DEMO.pass) {
        return DEMO
    } else {
        throw new Error('Login Failed!')
    }
}

export { doGPostLogin };