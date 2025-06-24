import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBbZUq36yEbn1Ps-ByEFVU9zB5l7soiVo",
  authDomain: "safespace-5c550.firebaseapp.com",
  projectId: "safespace-5c550",
  storageBucket: "safespace-5c550.appspot.com", 
  messagingSenderId: "238810384517",
  appId: "1:238810384517:web:d771c6de3c4bac785cc1ec"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
