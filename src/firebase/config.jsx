import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCaIQZN6sl2q2uY08CLdi97e5Nd2xbuT-U",
    authDomain: "avaliacao-dw3-lifedev.firebaseapp.com",
    projectId: "avaliacao-dw3-lifedev",
    storageBucket: "avaliacao-dw3-lifedev.firebasestorage.app",
    messagingSenderId: "255978404968",
    appId: "1:255978404968:web:7dcb8e83d7470277384fdd",
    measurementId: "G-6NBXDSPG7L"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }