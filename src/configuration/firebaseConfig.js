import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbIgIbXkET-MHw-Kft5WNXa6vOTXBhpBQ",
    authDomain: "family-live.firebaseapp.com",
    projectId: "family-live",
    storageBucket: "family-live.appspot.com",
    messagingSenderId: "932929592942",
    appId: "1:932929592942:web:6270297ecc3f7a2011907f",
    measurementId: "G-X8HTL0VBVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//initiating references to the databases

export { firebaseConfig, db };
