// Firebase client setup
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvJxq6MzDMy0QaHKgSQojbRMBee7s7Vls",
  authDomain: "g3-ranching.firebaseapp.com",
  projectId: "g3-ranching",
  storageBucket: "g3-ranching.firebasestorage.app",
  messagingSenderId: "56429650388",
  appId: "1:56429650388:web:a0633c5afd34dfb5903641"
};

// Prevent re-initialization in Next.js hot reload
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
