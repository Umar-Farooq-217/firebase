
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey:'AIzaSyD4yMgs5uinLiP0kRFhCneVk4m0ksSqf0w',
  authDomain: "fir-auth-70a7d.firebaseapp.com",
  projectId: "fir-auth-70a7d",
  storageBucket: "fir-auth-70a7d.appspot.com",
  messagingSenderId: "557649632782",
  appId: "1:557649632782:web:a8732f3dc32200cf7fa65f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)