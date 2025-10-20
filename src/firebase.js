// firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDF1MqzycDVrMU08qXevUloIr9hpcJSGno",
  authDomain: "netflix-clone-dae44.firebaseapp.com",
  projectId: "netflix-clone-dae44",
  storageBucket: "netflix-clone-dae44.appspot.com",
  messagingSenderId: "530373634577",
  appId: "1:530373634577:web:ddc50a5f235fb462349fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Save user data in Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local"
    });

    console.log("User signed up and data saved:", user.uid);
  } catch (error) {
    console.error("Signup error:", error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in");
  } catch (error) {
    console.error("Login error:", error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export { auth, db, signup, login, logout };
