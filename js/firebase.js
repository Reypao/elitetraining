// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyDzaJv1cJYnEAv0GBkA_4eyndthnFKWQ7s",
  authDomain: "elite-training-70c17.firebaseapp.com",
  projectId: "elite-training-70c17",
  storageBucket: "elite-training-70c17.firebasestorage.app",
  messagingSenderId: "241683097389",
  appId: "1:241683097389:web:b7dafd5d0c03820ddd95a4"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 👇 HACEMOS GLOBAL para usarlo en fullcalendar.js
window.db = db;
window.addDoc = addDoc;
window.collection = collection;
