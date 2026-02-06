import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd7nc92_iBjNaOLHs4rXbPmUmjbYwXGy0",
  authDomain: "jurchen-technology.firebaseapp.com",
  projectId: "jurchen-technology",
  storageBucket: "jurchen-technology.appspot.com",
  messagingSenderId: "1042954979706",
  appId: "1:1042954979706:web:610fc972f9353d831ceec3",
  measurementId: "G-ZDJL2VQS9P",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
