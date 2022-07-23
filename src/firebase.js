import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBHlUPcXNIxtpQ0KVmpudNWsywy1O06aBg",

  authDomain: "lapalmeraweb.firebaseapp.com",

  projectId: "lapalmeraweb",

  storageBucket: "lapalmeraweb.appspot.com",

  messagingSenderId: "68561765588",

  appId: "1:68561765588:web:25e660c937d646c02aa741"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);