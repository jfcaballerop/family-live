import { TOKEN_DEMO } from 'configuration'
import { USER_INFO_KEY } from 'configuration';
import { db } from 'configuration/firebaseConfig'
import { doc, collection, getDocs, getDoc } from 'firebase/firestore';


const DEMO = { user: 'demo@demo.com', password: 'demo' };

async function doGPostLogin(props) {
    const { username, password } = props
    // const usersCol = collection(db, 'usuarios');
    // const users = await getDocs(usersCol)
    // const usersList = users.docs.map(doc => doc.data());

    // const usersList = await getDocs(collection(db, 'usuarios'))
    const docRef = doc(db, "usuarios", username);
    const docSnap = await getDoc(docRef);


    // console.log(usersList);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        localStorage.setItem('token', TOKEN_DEMO)
        localStorage.setItem(USER_INFO_KEY, DEMO.user)
        return DEMO
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        throw new Error('Login Failed!')
    }
}

export { doGPostLogin };