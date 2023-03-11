
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWV-KaCaLXDZC23Pn-4JiyOYUuKbml9xQ",
  authDomain: "twigs-firebase-app.firebaseapp.com",
  projectId: "twigs-firebase-app",
  storageBucket: "twigs-firebase-app.appspot.com",
  messagingSenderId: "172563984479",
  appId: "1:172563984479:web:de8f50877ef92848302bea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
