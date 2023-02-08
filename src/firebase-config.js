
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC5dHAkNssZ1HZxrqrNCrOUblLzAArHDSw",
    authDomain: "my-portfolio-3b14f.firebaseapp.com",
    projectId: "my-portfolio-3b14f",
    storageBucket: "my-portfolio-3b14f.appspot.com",
    messagingSenderId: "391076736391",
    appId: "1:391076736391:web:a0f92e9bd6f52d79d4f722"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connecting db
export const db = getFirestore(app);

