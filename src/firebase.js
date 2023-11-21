import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaHCSd8gPRKbmDwAUqOB53kstx1p8P8Yc",
  authDomain: "chat-app-b7916.firebaseapp.com",
  projectId: "chat-app-b7916",
  storageBucket: "chat-app-b7916.appspot.com",
  messagingSenderId: "255045521036",
  appId: "1:255045521036:web:294fc7608df4b7d16d75a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);