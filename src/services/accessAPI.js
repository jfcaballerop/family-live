import { db } from 'configuration/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { compareHash, encrypt } from 'utils/crypt';


async function doGPostLogin(props) {
	const { username, password } = props
	// const usersCol = collection(db, 'usuarios');
	// const users = await getDocs(usersCol)
	// const usersList = users.docs.map(doc => doc.data());

	// const usersList = await getDocs(collection(db, 'usuarios'))
	const docRef = doc(db, "usuarios", username);
	const docSnap = await getDoc(docRef);


	// console.log(usersList);
	console.log(docSnap.data().password);
	console.log(encrypt(password));
	if (docSnap.exists() && compareHash(password, docSnap.data().password)) {
		console.log("Document data:", docSnap.data());
		return docSnap.data()
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
		throw new Error('Login Failed!')
	}
}

export { doGPostLogin };
