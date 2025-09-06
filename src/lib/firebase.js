// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase Config (من Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDtquB9cTaNk9cU9n-Hv5Jc41bX3CidG7g",
  authDomain: "chat-cmd-app-f3f06.firebaseapp.com",
  projectId: "chat-cmd-app-f3f06",
  storageBucket: "chat-cmd-app-f3f06.appspot.com",
  messagingSenderId: "143760168908",
  appId: "1:143760168908:web:REPLACE_THIS_WITH_WEB_APP_ID" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
