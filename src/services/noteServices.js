import { db } from 'configuration/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

async function doFBCreateNote(props) {
	const { items, username, title } = props
	console.log(username);
	const docRef = doc(db, "notas", username, "notas", title);


	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		// Si existe la nota la sobreescribo
		console.log(docSnap.data());
		await setDoc(doc(db, "notas", username, "notas", title), { items: items });
	} else {
		// TODO: Crear nueva nota si no existe el titulo
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
	// 	console.log("Document data exists!", docSnap.data());
	// 	throw new Error('Save note Failed!')
	// } else {
	// 	// Add a new document in collection "cities"

	// }
}

export { doFBCreateNote };
