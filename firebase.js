import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxzZVbB5RMjlZ-hZEXpBTRvNJuZpLclgg",
  authDomain: "zesto-bd896.firebaseapp.com",
  projectId: "zesto-bd896",
  storageBucket: "zesto-bd896.firebasestorage.app",
  messagingSenderId: "396537954129",
  appId: "1:396537954129:web:28b76a6c5592f48b681d70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
