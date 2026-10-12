import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "career-assessment-system-ef526.firebaseapp.com",
  projectId: "career-assessment-system-ef526",
  storageBucket: "career-assessment-system-ef526.firebasestorage.app",
  messagingSenderId: "354866087843",
  appId: "1:354866087843:web:511ffa28240c0756f5bc16"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };