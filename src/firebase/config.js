import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvPX_LiTP-gauS07OO8TCPDiMkpd7QUII",
  authDomain: "chat-app-817c9.firebaseapp.com",
  projectId: "chat-app-817c9",
  storageBucket: "chat-app-817c9.appspot.com",
  messagingSenderId: "329146695730",
  appId: "1:329146695730:web:f4a393a1d83f61e95ffc2b",
  measurementId: "G-8Y89MDKTZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const authentication = getAuth(app);

export const db = getFirestore(app);

// export default firebase;
