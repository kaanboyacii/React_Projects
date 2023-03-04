// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOzF6z1-WpL0PFzGvmRkOj9RiU-l9W5Q0",
  authDomain: "chat-2b654.firebaseapp.com",
  projectId: "chat-2b654",
  storageBucket: "chat-2b654.appspot.com",
  messagingSenderId: "33561745762",
  appId: "1:33561745762:web:e87a8048f2627914af743b",
  measurementId: "G-F7XGPW0SFZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()