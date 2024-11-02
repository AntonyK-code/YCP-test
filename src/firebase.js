// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTl-QNBnYl34C0A7AxyKvFTnKoruJmK8",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "youth-connect-platform",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "488978596084",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
