import UserContext from "context/UserContext";
import { useContext, useState } from "react";
import { doFBCreateUser } from 'services';
import { useLocation } from "wouter";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const useForm = () => {
    const { user, setuser } = useContext(UserContext)
    const [path, pushLocation] = useLocation()

    const [state, setState] = useState({
        username: null,
        password: null,
        email: null,
        errors: {
            username: '',
            password: '',
            email: ''
        }
    });
    function handleChange(e) {
        const { id, value } = e.target
        let errors = state.errors;

        switch (id) {
            case 'username':
                errors.username = value.length < 5 ? 'Username debe ser mayor a 4 caracteres' : ''
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    function validateForm(errors) {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const userRegister = { username: state.username, password: state.password, email: state.email }
        console.log(userRegister);
        if (validateForm(state.errors)) {
            console.info('Valid Form')
            let user
            try {
                user = await doFBCreateUser(userRegister)
                // console.log(user);
                // Añado user al Contexto
                setuser(user)
                // alert(JSON.stringify(user))
                pushLocation('/login')
            } catch (error) {
                alert(error)
            }

        } else {
            console.error('Invalid Form')
        }

    }
    return { state, handleChange, handleSubmit }
}

export default useForm