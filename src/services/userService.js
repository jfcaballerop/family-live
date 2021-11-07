import { USER_INFO_KEY } from 'configuration';
import { db } from 'configuration/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getLocalStorage } from 'services';
import { encrypt, salt } from 'utils/crypt';
function isLogged() {

    if (getLocalStorage('token') && getLocalStorage(USER_INFO_KEY))
        return true
    else return false


}

async function doFBCreateUser(props) {
    const { username, password, email } = props
    const docRef = doc(db, "usuarios", username);
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {
        console.log("Document data exists!", docSnap.data());
        throw new Error('Login Failed!')
    } else {
        const saltV = salt;
        // Add a new document in collection "cities"
        await setDoc(doc(db, "usuarios", username), {
            username: username,
            email: email,
            password: encrypt(password, saltV)
        });

    }
}

export { doFBCreateUser, isLogged };
